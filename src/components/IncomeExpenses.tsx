import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./css/IncomeExpenses.css";

function formatNumber(amount: number) {
  if (amount < 0) return `-$${Math.abs(amount)}`;
  return `$${amount}`;
}

export default function IncomeExpenses() {
  const context = useContext(GlobalContext);
  const transactions = context.transactions;

  let income = 0,
    expenses = 0;

  for (const transaction of transactions) {
    if (transaction.amount > 0) income += transaction.amount;
    else expenses += transaction.amount;
  }

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{formatNumber(income)}</p>
      </div>

      <div>
        <h4>Expenses</h4>
        <p className="money minus">{formatNumber(expenses)}</p>
      </div>
    </div>
  );
}
