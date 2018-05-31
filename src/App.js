import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from 'react-router-dom';
import Header from './component/Header';
import routes from './route-config.js';
import Todolist from './page/Todolist';

class App extends Component {
  render() {
    return (
		<Router>
			<div className="container-fluid">
				<Header />
				{this.showRoute(routes)}
			</div>
		</Router>
    );
  }
  showRoute(routes){
  	
	let xhtml = null;
	if(routes.length > 0){
		xhtml = routes.map((route,index)=>{
			return <Route key={index} exact={route.exact} path={route.path} component={route.main}/>
		})
	}
	console.log(xhtml);
	return xhtml;
  }
}

export default App;
