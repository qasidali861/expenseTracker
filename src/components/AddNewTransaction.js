import { useState } from "react";

const AddNewTransaction = (props) => {
    const {getData} = props
    const [cash, setCash] = useState(0)
    const [msg, setMsg] = useState("");
    const getValue = (e) =>{
        e.preventDefault();
        // console.log(cash, msg);
        getData(msg,cash)
        setMsg('')
        setCash(0)
        }

    return ( 
        <>
                        <div>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={getValue}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" value = {msg} onChange ={(e) => setMsg((e.target.value))} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value = {cash} onChange = {(e) => setCash(e.target.value)} id="amount" placeholder="Enter amount..." />
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
            </div>

        </>
     );
}
 
export default AddNewTransaction;