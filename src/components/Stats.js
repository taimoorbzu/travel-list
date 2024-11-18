export function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed === true).length;
    const percentage = totalItems > 0 ? Math.floor((packedItems / totalItems) * 100) : 0;
    return <div className="stats">
        <footer>💼 You have {totalItems} number of Item in list and you already packed {packedItems} ({percentage}%)</footer>
    </div>;
}
