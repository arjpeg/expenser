import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

type Transaction = {
  name: string;
  amount: number;

  id: number;
};

export type StateType = {
  transactions: Transaction[];

  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: Transaction) => void;

  clearAllTransactions?: () => void;
};

type Props = {
  children: any;
};

// Initial State
const initialState: StateType = {
  transactions: JSON.parse(localStorage.getItem("expenses") || "[]")
};

export const GlobalContext = createContext<StateType>(initialState);

export const GlobalProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  function clearAllTransactions() {
    dispatch({
      type: "CLEAR_TRANSACTIONS"
    });
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        clearAllTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
