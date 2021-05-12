import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// alt-z to auto code that is overflowing
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);