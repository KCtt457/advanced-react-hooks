// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  // // 💰 you can write the countReducer function so you don't have to make any
  // // changes to the next two lines of code! Remember:
  // // The 1st argument is called "state" - the current value of count
  // // The 2nd argument is called "newState" - the value passed to setCount
  // function countReducer(state, newState) {
  //   return newState
  // }
  // const increment = () => setCount(count + step) // setCount is the dispatch function

  // Extra Credit 1
  // const [count, changeCount] = React.useReducer(countReducer, initialCount)

  // // 💰 you can write the countReducer function so you don't have to make any
  // // changes to the next two lines of code! Remember:
  // // The 1st argument is called "state" - the current value of count
  // // The 2nd argument is called "newState" - the value passed to setCount
  // function countReducer(state, newState) {
  //   return state + newState
  // }
  // const increment = () => changeCount(step)

  // Extra Credit 2
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // function countReducer(state, newState) {
  //   return newState
  // }
  // function countReducer(state, newState) {
  //   return {...state, ...newState}
  // }
  // const countReducer = (state, action) => ({...state, ...action})
  // const increment = () => setState({count: count + step})

  // Extra Credit 3
  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // function countReducer(state, newState) {
  //   return newState(state)
  // }
  // const countReducer = (state, action) => ({
  //   ...state, 
  //   ...(typeof action === 'function' ? action(state) : action)
  // })
  // const increment = () =>
  //   setState(currentState => ({count: currentState.count + step}))

  // Extra Credit 4
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  function countReducer(state, action) {
      switch (action.type) {
        case 'INCREMENT':
          return {count: state.count + action.step};
        default:
          throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
