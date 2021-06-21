import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'; //redux를 사용하기 위해서 provider 사용
import store from './store'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './containers/HomePage'
import Room from './containers/RoomPage'
import NotFound from './components/NotFound'
import styles from './app.css'

render (
	<Provider store= {store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path = "/r/:room" component={Room}/>
				<Route path = "*" component={NotFound}/>
			</Switch>
		</BrowserRouter>
	</Provider>,
	//ReactDOM.render(element, document.getElementById('root')); 이런식으로 쓸 경우 해당 위치에 render를 해주게 된다 개 꿀팁
	document.getElementById('app') // 이 app은 index.html의 main id = 'app' 을 가리키고 있다.
)