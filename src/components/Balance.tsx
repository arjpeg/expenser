import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./css/Balance.css";

function formatNumber(amount: number) {
  const formatted = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3
  }).format(Math.abs(amount));

  if (amount < 0) return `-$${formatted}`;
  return `$${formatted}`;
}

export default function Balance() {
  const context = useContext(GlobalContext);
  const transactions = context.transactions;

  let bal = 0;

  for (const t of transactions) bal += t.amount;

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{formatNumber(bal)}</h1>
    </>
  );
}
