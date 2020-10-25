import React, { useReducer, createContext } from 'react'
import TodoList from './components/list';
import itemReducer from './reducer/itemReducer';

import './App.css';
import Form from './components/form';

const initialState = {
  items : [],
  isLogged: false,
  mode : {
      type : 'add',
      id : null
  }
}

export const Context = createContext()

function App() {

  const [ state, dispatch ] = useReducer(itemReducer,initialState);

  return (
    <Context.Provider value={{state,dispatch}}>
      <Form />
      <TodoList />
    </Context.Provider>
  )
}

export default App;