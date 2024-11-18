import { useState } from "react";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";

const initialItems = [
  { id: 1, description: "Passports", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 3, packed: false },
  { id: 3, description: "Jeans", quantity: 10, packed: false },
  { id: 4, description: "Soaps", quantity: 20, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleItem(newItem) {
    setItems([...items, newItem]);
  }

  function handlePacked(id) {
    setItems(
      (items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item)
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear entire list ?');
    if (confirmed) setItems([]);
  }

  return <div className="app">
    <Logo />
    <Form handleItem={handleItem} />
    <PackingList
      onDeleteItem={handleDeleteItem}
      onPackedItem={handlePacked}
      onClearList={handleClearList}
      items={items} />
    <Stats items={items} />
  </div>
}


