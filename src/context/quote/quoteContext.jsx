import { createContext, useReducer } from "react";
import QuoteReducer from "./quoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const initialState = {
    quoteData: null,
  };

  const [state, dispatch] = useReducer(QuoteReducer, initialState);

  return (
    <QuoteContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteContext;
