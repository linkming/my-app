import React, { Component } from 'react'
import { HashRouter, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import './index.css'
export default class Bottom extends Component {
   constructor(props){
     super(props)
     this.state = {
     
     }
     
  }
   render(){
     return (<div className="bottom">
     <HashRouter>
           <Row className='line'>
                <Col span={8}>
                    <Link to="/">
                        <Icon type="home" className="icons" onClick={()=>{
                            console.log(this.props)
                            }} />
                    </Link>
                </Col>
                <Col span={8}>
                    <Link to="/menu">
                        <Icon type="menu" className="icons" />
                    </Link>
                </Col>
                <Col span={8}>
                    <Link to="/detail">
                        <Icon type="setting" className="icons" />
                    </Link>
                </Col>
            </Row>
     </HashRouter>
     </div>)
  }
}