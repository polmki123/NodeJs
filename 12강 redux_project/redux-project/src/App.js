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
    value : state.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: () => dispatch({type : 'INCREASE'})
  }
}

const ReduxCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

function counter(state = {value : 0}, action ){
  const { value } = state
  switch (action.type) {
    case 'INCREASE' :
      return { value : value + 1}
    default :
      return state 
  }
}

function App(){
  //Provider 
  const store = createStore(counter) //counter 라는 reducer를 생성한다. 
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  )
}
export default App;
