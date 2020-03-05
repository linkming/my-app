import React from 'react'
import Chart from './../chart'
import { BrowserRouter as Router,Route, } from 'react-router-dom';
// import { BrowserRouter as Router,Route,NavLink, Link,HashRouter } from 'react-router-dom';
export default class RightPlain extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            list:[{name:'lee',age:11},{name:'wang',age:44},{name:'zhang',age:33},{name:'wu',age:22}]
        }
    }
    render(){
        return (<div className="content">
        我是内容区
        <Router>
            <Route path="/chart" exact component={Chart}></Route>
        </Router>
        {/* <Switch> */}
            {/* <Route path='/chart' component={Chart}></Route> */}
                    {/* <Route path='/attendence/external/list' component={List}/>
                    <Route path='/attendence/external/edit' render={props => <Edit {...props} type='edit'/>}/>
                    <Route path='/attendence/external/add' render={props => <Edit {...props} type='add'/>}/>
                    <Route path='/attendence/external/detail' render={props => <Detail {...props} type='external'/>}/> */}
                {/* </Switch> */}
        </div>)
    }
}