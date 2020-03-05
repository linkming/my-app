import React, { Component } from 'react'
export default class Menu extends Component {
   constructor(props){
     super(props)
     this.state = {
      
     }
    }
    componentDidMount(){//相当于mounted
      console.log('running')
      var indexedDB= window.indexedDB.open('dbname',1)
      console.log(indexedDB) 
    }
   render(){
     return (<div>
            我是菜单主要内容页面
            <span></span>
     </div>)
  }
}