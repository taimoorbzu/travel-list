import { useState } from "react";
import { Items } from "./Items";

export function PackingList({ items, onDeleteItem, onPackedItem, onClearList }) {
    const [sortBy, setSortBy] = useState('input');
    let sortedArray;
    if (sortBy === 'input') sortedArray = items;
    if (sortBy === 'description') sortedArray = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === 'packed') sortedArray = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return <div className="list">
        <ul className="list">
            {sortedArray.map((item) => {
                return <Items key={item.id} item={item} onDeleteItem={onDeleteItem} onPackedItem={onPackedItem} />;
            })}
        </ul>
        <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Sort by the input order</option>
                <option value="description">Sort by the description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={onClearList}>Clear List</button>
        </div>
    </div>;
}
