import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
        return{
            ...state,
            expenses: [...state.expenses, action.payload],
        };
    case 'DELETE_EXPENSE':
        return{
            ...state,
            expenses: state.expenses.filter(
                (exp)=> exp.id !== action.payload
            ),
        };
    case 'ADD_BUDGET':
        return{
            ...state,
            budget: action.payload,
        }
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 1, name: "Shopping", cost: 40 },
    { id: 2, name: "Holiday", cost: 100 },
    { id: 3, name: "Car Washing", cost: 30 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
