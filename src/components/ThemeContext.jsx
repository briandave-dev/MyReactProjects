import React, { useContext, createContext, useState } from "react";


const ThemeContext = createContext()


const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  
  function setToDark(){
    console.log("Function trigerred")
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider value={{dark, setToDark}}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };