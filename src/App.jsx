import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <h1>Counter: {counter}</h1>
        <button className="button-plus" onClick={() => dispatch(increment())}>+</button>
        <button className="button-minus" onClick={() => dispatch(decrement())}>-</button>
      </div>

      <br />

      <div>
        {isLogged ? <button className="button-logout" onClick={() => dispatch(login())}>Log out</button> : <button className="button-login" onClick={() => dispatch(login())}>Log in</button>}
        {isLogged ? <h3>Valuable information I should not see unless I am logged in</h3> : ''}
      </div>
    </div>
  );
}

export default App
