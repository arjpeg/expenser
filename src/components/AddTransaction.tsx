import { FormEvent, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./css/AddTransaction.css";

function generateID() {
  return Math.floor(Math.random() * 1000000);
}

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);

  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (addTransaction)
      addTransaction({
        id: generateID(),
        name: text,
        amount
      });

    setText("");
    setAmount(0);
  }

  return (
    <div>
      <h3>Add Transaction</h3>

      <form className="add-expense-form" action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            required
            type="text"
            value={text}
            placeholder="Enter transaction name..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="amount">
            Amount{" "}
            <small>(positive is income, and expenses are negative)</small>
          </label>
          <input
            required
            type="number"
            value={amount ? amount : ""}
            placeholder="Enter transaction amount..."
            onChange={(e) => {
              setAmount(+e.target.value);
            }}
          />
        </div>

        <button className="submit-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
