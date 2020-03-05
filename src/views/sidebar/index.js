import React from 'react';
import './../../css/left-sidebar.css'
// import {NavLink as Link} from 'react-router-dom'
import { BrowserRouter as Router, Link, } from 'react-router-dom';
export default class Sidebar extends React.Component{
    constructor(prop){
        super(prop)
        this.state={
            routes:[]
        }
    }
    render(){
        return (<div className="left-sidebar">
        <Router>
        <ul>
            <li><Link to="/chart">1111</Link></li>
        </ul>
        </Router>
        </div>)
    }
}