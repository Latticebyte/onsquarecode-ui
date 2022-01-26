import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  language: "auto",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
