import React from 'react';
import './../../css/header.css'
export default class Headers extends React.Component{
    constructor(prop){
        super(prop)
        this.states={
            list:[]
        }
    }
    render(){
        return (<header>我才是头部导航</header>)
    }
}