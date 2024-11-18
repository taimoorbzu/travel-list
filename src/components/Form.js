import { useState } from "react";

export function Form({ handleItem }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [id, setId] = useState(5);
    //handling the form submission
    function handleSubmit(e) {
        e.preventDefault();
        const packed = false;
        const newEntry = { id, description, quantity, packed };
        setId(() => id + 1);
        //Calling the function here to manage the state
        handleItem(newEntry);
        setDescription('');
        setQuantity(1);
    }
    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip ?</h3>
        <select onChange={e => setQuantity(+e.target.value)} value={quantity} name="options" id="options">
            {Array.from({ length: 20 }, ((_, index) => index + 1)).map(e => <option key={e} value={e}>{e}</option>)}
        </select>
        <input onChange={e => setDescription(e.target.value)} type="text" placeholder="Item...." value={description} />
        <button type="submit">Add</button>
    </form>;
}
