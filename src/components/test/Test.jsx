import React, { useEffect, useReducer } from "react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

const initialState = { count: 0 }

const Test = () => {
    
  const { dark, setToDark } = useContext(ThemeContext);
  const reducer = (state, action) => {
    switch(action.type){
        case('increment'):
            return {...state, count: state.count + 1}
        case('incrementByAmount'):
            return {...state, count: state.count + action.payload}
        default:
            return state.count
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log(dark);
  }, [dark]);

  return (
    <div className={`h-[100vh] ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <p>Test</p>
      <button onClick={setToDark}>Toggle theme</button>
      <p>Value: {state.count}</p>
      <p><button onClick={() => dispatch({ type: 'increment' })}>+</button></p>
      <p><button onClick={() => dispatch({ type: 'incrementByAmount', payload: 2 })}>+</button></p>
    </div>
  );
};

export default Test;