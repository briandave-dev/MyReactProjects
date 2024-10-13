// import { useReducer } from "react";
// import "./index.css";
// import DigitButton from "./DigitButton.jsx";

// export const ACTIONS = {
//   ADD_DIGIT: "add-digit",
//   CHOOSE_OPERATION: "choose-operation",
//   CLEAR: "clear",
//   DELETE_DIGIT: "delete-digit",
//   EVALUATE: "evaluate",
// };

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case ACTIONS.ADD_DIGIT:
//       return {
//         ...state,
//         currentOperand: `${state.currentOperand || ""}${payload.digit}`,
//       };
//     case ACTIONS.CHOOSE_OPERATION:
//       if (state.currentOperand === "") return state; // Prevent choosing operation without a number
//       if (state.previousOperand) {
//         // If there's a previous operand, evaluate it first
//         const result = evaluate(state);
//         return {
//           ...state,
//           previousOperand: result.toString(),
//           currentOperand: "",
//           operation: payload.operation,
//         };
//       }
//       return {
//         ...state,
//         previousOperand: state.currentOperand,
//         currentOperand: "",
//         operation: payload.operation,
//       };
//     case ACTIONS.CLEAR:
//       return { currentOperand: "", previousOperand: "", operation: "" };
//     case ACTIONS.DELETE_DIGIT:
//       return {
//         ...state,
//         currentOperand: state.currentOperand.slice(0, -1),
//       };
//     case ACTIONS.EVALUATE:
//       if (
//         state.currentOperand === "" ||
//         state.previousOperand === "" ||
//         state.operation === ""
//       ) return state;

//       const result = evaluate(state);
//       return {
//         ...state,
//         currentOperand: result.toString(),
//         previousOperand: "",
//         operation: "",
//       };
//     default:
//       return state; // Return the current state for unhandled actions
//   }
// }

// // Helper function to evaluate the expression
// function evaluate({ currentOperand, previousOperand, operation }) {
//   const prev = parseFloat(previousOperand);
//   const current = parseFloat(currentOperand);
  
//   if (isNaN(prev) || isNaN(current)) return ""; // Return empty if invalid numbers
  
//   let result;

//   switch (operation) {
//     case "+":
//       result = prev + current;
//       break;
//     case "-":
//       result = prev - current;
//       break;
//     case "*":
//       result = prev * current;
//       break;
//     case "/":
//       if (current === 0) {
//         alert("Cannot divide by zero!");
//         return prev; // Prevent division by zero
//       }
//       result = prev / current;
//       break;
//     default:
//       return current; // If no operation, return current
//   }

//   return result;
// }

// const Calculator = () => {
//   const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
//     reducer,
//     { currentOperand: "", previousOperand: "", operation: "" } // Initialize state
//   );

//   return (
//     <div className="calculator-grid">
//       <div className="output">
//         <div className="previous-operand">
//           {previousOperand} {operation}
//         </div>
//         <div className="current-operand">{currentOperand}</div>
//       </div>
//       <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
//       <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
//       <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '/' } })}>/</button>
//       <DigitButton digit="1" dispatch={dispatch} />
//       <DigitButton digit="2" dispatch={dispatch} />
//       <DigitButton digit="3" dispatch={dispatch} />
//       <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '*' } })}>*</button>
//       <DigitButton digit="4" dispatch={dispatch} />
//       <DigitButton digit="5" dispatch={dispatch} />
//       <DigitButton digit="6" dispatch={dispatch} />
//       <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+' } })}>+</button>
//       <DigitButton digit="7" dispatch={dispatch} />
//       <DigitButton digit="8" dispatch={dispatch} />
//       <DigitButton digit="9" dispatch={dispatch} />
//       <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '-' } })}>-</button>
//       <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: '.' } })}>.</button>
//       <DigitButton digit="0" dispatch={dispatch} />
//       <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
//     </div>
//   );
// };

// export default Calculator;


import { useReducer } from "react";
import "./index.css";
import DigitButton from "./DigitButton.jsx";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === "") return state; // Prevent choosing operation without a number
      return {
        ...state,
        previousOperand: `${state.previousOperand} ${state.currentOperand} ${payload.operation}`,
        currentOperand: "", // Clear current input for next number
      };
    case ACTIONS.CLEAR:
      return { currentOperand: "", previousOperand: "", operation: "" };
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (state.currentOperand === "") return state; // No current input to evaluate
      const fullExpression = `${state.previousOperand} ${state.currentOperand}`; // Combine for evaluation
      const result = evaluate(fullExpression);
      return {
        ...state,
        currentOperand: result.toString(),
        previousOperand: "",
      };
    default:
      return state; // Return the current state for unhandled actions
  }
}

// Helper function to evaluate the expression
function evaluate(expression) {
  try {
    // Using eval is generally not recommended, but for simple calculations, it can be used with caution
    const result = eval(expression); // Evaluate the string expression
    return result;
  } catch (error) {
    alert("Invalid Expression");
    return "";
  }
}

const Calculator = () => {
  const [{ currentOperand, previousOperand }, dispatch] = useReducer(
    reducer,
    { currentOperand: "", previousOperand: "" } // Initialize state
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
      <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '/' } })}>/</button>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '*' } })}>*</button>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '+' } })}>+</button>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: '-' } })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: '.' } })}>.</button>
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </div>
  );
};

export default Calculator;
