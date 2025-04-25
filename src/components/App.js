import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackagingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items,setItems] = useState([]);
  function handleAddItems(item){
    setItems((items) => [...items,item]);
  }

  function handleDeleteItems(id){
    setItems((items) => items.filter(item=>item.id!==id));
  }

  function handleToggleItems(id){
    setItems(items => items.map(item=>item.id===id?{...item,packed:!item.packed}:item));
  }

  function handleClearItems(){
    const confirmed = window.confirm("Are you sure want to clear all the items ?");
    if(confirmed) setItems([]);
  }
  return (
    <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems}/>
    <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItems={handleToggleItems} onClearItems={handleClearItems}/>
    <Stats items={items}/>
    </div>
  );
}

