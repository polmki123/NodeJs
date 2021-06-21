import logo from './logo.svg';
// {useState} 비 구조적 용법 바로 사용 
import React, {useState, useEffect } from "react";
import axios from 'axios'
import './App.css';

const data = [
  {
    title: "Node",
    value : 0
  },
  {
    title: "React",
    value : 1
  }
]
const Head = props => <h1>{props.title}</h1> 

function App() {
  return (
    // class가 아니라 className 으로 사용한다. 유의!!! 
    // <div className="App"> 
    //   <header className="App-header">
    //     {
    //       data.map( item =>  {
    //         <>
    //         <p key={item.value}>{ item.title}</p>
    //         </>
    //       } )
    //     }
    //     <div >
          
    //     </div>
    //   </header>
    // </div>
    // 블럭안에 아무것도 선언 하지 않는 것을 fragment라 한다. 두 가지 
    <> 
    <Head title="this is a title" name="this is a name" />
    <Head title="this is a title" name="this is a name" />
    </>
  );
}

const Loading  = () => (
  <div>Loading</div>
)
class LoadingComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  commnet(){
    const con = 1
    const res = con > 0? true : false 
    // 특정 조건일 때만 && 연산자 뒤에 있는 표현식이 표현되도록 함 
    const and = this.state.loading && (<div>this is a webpage </div>)
  }
  render(){
    const {loading} = this.state
    //if (loading) return <Loading />
    return (
      <>
        {
          loading && <Loading /> 
        }
      </>
    )
  }
}

class LifeCycle extends React.Component {
  constructor(props){
    super(props)
  }

  //해당 render 하기전에 
  componentWillMount(){
    
  }
  //this.state를 사용하면 안됨 
  render(){
    return
     ( <></> )
  }

  // subscribe 된 객체를 제거 this.state 사용가능 
  componentDidMount(){

  }
  // 해당하는 작업을 초기화 this.state를 사용하면 안됨 
  componentWillUnmount(){
    
  }
}

//stateless : 상태가 없는 일반 function
//state     : 상태가 있는
class Fast extends React.Component {
  constructor(props) {
    //props 상위 계층과 상호 화환하기 위해 사용
    super(props)
    //state 내부에서만 사용 하는 코드 
    //state 는 객체로 사용할 수 있다. 
    this.state = {
      lang: 'javascript',
      date : new Date()
    }
  } 
  
  render(){
    const { lang, date } = this.state
    return (
      <div> {lang} </div>
    )
  }
}

function App2(){
  const handleClick = (e, param) => {
    //param.preventDefault()
    console.log('button is clicked')
  }
  // 한번에 한번만 진행 
  const newhandleClick = (e) => {
    e.preventDefault()
    console.log('wrapper button is clicked')
  }
  return (
    <div onclick={newhandleClick}> 
    <button onClick={handleClick('test')}>this is a button</button> 
    </div>
  )
}

function App3(){
  const iter = [0,1,2]
  return(
    <>
    {
      //react 에서 key를 왜 선언하라고 할까 
      //중복되지 않은 key값이 필요 virtual Dom 이란 것은 전체 Dom 을 생성하지 않지만 일부분만 사용하기 위해서 사용 
      //virtual Dom은 React가 사용자가 virtual Dom을 사용하기 위해서 권한을 줌?? 
      // map( (item, index) => <h1 key={index}> ) 이 방법은 굉장히 위험하다 
      // map 안에 들어오는 값들은 비동기적으로 사용 
      // race condition에 걸리는 경우 위험해진다. 
      // 유일한 key 값을 선언해주는 것이 중요하다. 
      iter.map((item) => <h1 key={item}>item</h1>)
    }
    <Timer />
    </>
  )
}

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time : new Date()
    }
  }

  // component가 ui 업데이트 이후에 적용 
  componentDidUpdate(){
    this.setState()
  }

  //rendering 이후 호출하는 함수?? 초기화가 되었다는것 
  componentDidMount() {
    this.tick()
  }

  //초당 업데이트 되는 단위를 tick이라고 말한다. 
  tick(){
    // 비동기적으로 사용되는 코드 
    this.setState({
      time : new Date()
    }, () => console.log(this.state) )
    // 이렇게 바로 사용하는 경우 this.state가 업데이트 안 되어 있을 수 도 있다. 그래서 setstate 이후에 적용되기 위해서는
    // this.state가 바로 되어야 한다. 
    // 
  }

  render() {
    const {time} = this.state
    return(
      <div>
        {time.toLocaleTimeString() }
      </div>
    )
  }
}

class App4 extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      front : 'react'
    }
  }
  componentDidMount() {
    //this.setState(prevState => console.log(prevState))
    this.setState( {front : 'nodejs' }, () => {
      console.log(this.state)
    })
  }
  render(){
    return (
      <div>hi</div>
    )
  }
}

//state hook 
//가장중요!! 
function App5(){
  // usestate는 초기화 하는 것이 목적 
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ () => setCount(count + 1)}>{count}</button>
      </header>
    </div>
  )
}

//hook 사용 
const Todo = ( { todo, index, completeTodo, removeTodo })=>{
  return (
    //styled-components 컴퍼넌트네에서 css를 선언할 수 있게 한다. 
    //JSX 는 하나의 요소만 가지고 있어야 한다. 
    <>
    <div
      className="todo"
      style={{ textDecoration : todo.isCompleted ? 'line-through' : ''}}
    >
      {todo.text}
    </div>

    <div>
      <button onClick={ () => completeTodo(index)}> Complete </button>
      <button onClick={ () => removeTodo(index)}> X </button>
    </div>
    </>
  )
}
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e =>{
    // event가 두번 되는 것을 막을 수 있다. 
    e.preventDefault();
    if (!value) return 
    addTodo(value)
    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value} 
        //data가 변화 할때 마다 데이터 가져오기 
        onChange = {e => setValue(e.target.value)}
      />
    </form>

  )
}
const App6 = () => {
  // usestate는 초기화 하는 것이 목적 
  const [todo, setTodo] = useState([])

  const addTodo = text => {
    const newTodos = [...todo, {text}]
    setTodo(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todo]
    newTodos[index].isCompleted = true
    // todo를 다시 설정 진행 
    setTodo(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todo]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }

  return (
    <div className="App">
      <div className="todoList">
        {
          todo.map( (item, index) => (
            console.log(item),
            console.log(index),
            console.log(todo),
            <Todo 
              key={item}
              index={item.index}
              todo={item}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}


const App7 = () => {

  const [Data, setData] = useState({ hits:[]})
  const [query, setQuery] = useState('node')

  //비동기적으로 사용된다. 
  useEffect( () =>{
    // 초기에는 다른 단어를 completed 를 false로 하여 무시하지 않도록 한다. 
    let completed = false 
    async function get() {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=${query}')
      //setData는 하나의 약속이다. 
      if (!completed) setData(result.data)
    }

    get()
    console.log(query)
    return() =>{
      completed = true 
    };
  // effect가 변경되어야 하는 시점은 query 즉 데이터가 변경되는 시점이다. 
  }, [query])

  return (
    //setQuery를 통해서 react hook의 값을 가져오게 한다. 
    <>
      <input 
        value={query} 
        className = 'input' 
        onChange={e => setQuery(e.target.value)  } />
      <ul>
        {Data.hits.map(item => (
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default App7;
