import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./css/History.css";
import Transaction from "./Transaction";

export default function History() {
  const { transactions, clearAllTransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>
        History{" "}
        <button onClick={clearAllTransactions} className="clear-history">
          Clear All
        </button>
      </h3>
      <ul className="transaction-history">
        {transactions.map((transaction) => {
          return (
            <Transaction
              name={transaction.name}
              amount={transaction.amount}
              id={transaction.id}
              key={transaction.id}
            />
          );
        })}
      </ul>
    </>
  );
}
