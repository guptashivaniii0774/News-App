import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initialState = {
    allNews: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
