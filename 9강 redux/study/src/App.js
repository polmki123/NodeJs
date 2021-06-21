import logo from './logo.svg';
import React, {useState, useEffect } from "react";
import './App.css';
import {Router, Redirect, Route, Switch} from 'react-router-dom'
// Router   : 
// Redirect : page 넘기기 
// Route    : Route 할당 요소 
// Switch   : 실제 routing 하기 위해서 분기를 제공하는 요소로 생각하면 된다. 
const moment = require('moment');
//더 중복성 제거 
//props.children을 하면 아래의 하위 요소가 다 포함되서 나올 수 있게 된다. 
const Component = props =>< div classNmae={props.name}>{props.children}</div>

//최대한 중복성 제거 
const Wrapper = props =>< div classNmae="Comment">{props.children}</div>

const Comment = (props) =>{
  <div classNmae="Comment">{props.children}</div>
}
const UserInfo = (props) =>{
  <div classNmae="UserInfo">{props.children}</div>
}

function App(props) {
  return (
    <Component name="comment">
      <Component name="user">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <Component name="UserInfo-name">
          {props.author.name}
        </Component>
        <Component name="Comment-text">
          {props.text}
        </Component>
        <Component name="Comment-date">
          {(props.date)}
        </Component>
        {/* 이뜻은 정확하게 path가 맞아야 들어 간다고 하는 것이다 \ */}
        <Comment  exact path="/admin">
        </Comment>
      </Component>
    </Component>
  )
}

function App2(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {(props.date)}
      </div>
    </div>
  );
}

export default App;
