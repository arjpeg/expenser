import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import History from "./components/History";
import IncomeExpenses from "./components/IncomeExpenses";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
