import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import './App.css';

function Counter({value, add}) {
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={add}>Add</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({ type: 'INCREASE' })
  }
}

const ReduxCounter = connect(
  mapStateToProps, // 이거는 value value를 쓰기 위해서는 state라는 변수가 필요 
  mapDispatchToProps // 이것은 add 를 반환 한다.  add를 쓰기 위해서는 dispatch라는 변수가 필요하다. 
)(Counter)

//reducer
function counter(state = { count: 0 }, action) {
  const { count } = state
  switch (action.type) {
    case 'INCREASE':
      return { count: count + 1}
    default:
      return state
  }
}

function App() {
  const store = createStore(counter)
  return (
    <Provider store={store} >
      <ReduxCounter />
    </Provider>
  )
}

export default App;
