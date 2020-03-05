import React from 'react';
import Home from './views/home'
import Config from './views/setting'
import Bottom from './views/bottom'
import Menu from './views/content'
import { Switch,HashRouter,Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/menu" component={Menu}></Route>
        <Route exact path="/detail" component={Config}></Route>
      </Switch>
    </HashRouter>
    <div>
        <Bottom></Bottom>
        {/* <Link to="/">跳转到HOME</Link>
        <Link to="/detail">跳转到详情</Link> */}
    </div>
    </div>
  );
}

export default App;
