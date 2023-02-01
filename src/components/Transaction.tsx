import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./css/Transaction.css";

type Props = {
  name: string;
  amount: number;

  id: number;
};

export default function Transaction(props: Props) {
  const { deleteTransaction } = useContext(GlobalContext);

  function deleteThis() {
    if (deleteTransaction) deleteTransaction(props.id);
  }

  return (
    <li className={props.amount > 0 ? "plus" : "minus"}>
      {props.name}{" "}
      <div>
        <span>
          {props.amount < 0 ? "-" : ""}
          {Math.abs(props.amount)}$
        </span>
        <button onClick={deleteThis} className="remove-transaction-btn">
          X
        </button>
      </div>
    </li>
  );
}
