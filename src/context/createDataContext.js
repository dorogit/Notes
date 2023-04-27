import React,{ useReducer } from "react";


export default (ReducerFunction, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(ReducerFunction, initialState)

    //iterate through actions to get an action, and pass dispatch to call the action
    const boundActions = {}
    for (let action in actions) {
      boundActions[action] = actions[action](dispatch) //calling the action wit dispatch
    }

    return (
      <Context.Provider value = {{state, ...boundActions}}>
      {children}
      </Context.Provider>
    )
  }
  return { Context, Provider }
}