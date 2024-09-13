import React, { useContext, createContext, useState } from "react";

const mainContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <mainContext.Provider value={{ userName, setUserName }}>
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => useContext(mainContext);
