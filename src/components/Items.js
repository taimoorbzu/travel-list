export function Items({ item, onDeleteItem, onPackedItem }) {

    return <li>
        <input onClick={() => onPackedItem(item.id)} type="checkbox" name="check" id="check" />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </span>
    </li>;
}
