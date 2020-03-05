import React, { Component } from 'react'
import { Input } from 'antd';
import http from './../../api/index'
import F2 from "@antv/f2";

export default class Home extends Component {
  getSongs(e){
    // this.setState({
    //   songsId:e.target.value
    // })
    http.getSongsByName(e.target.value).then(res=>{
      console.log(res)
      if (res.code ===200) {
        this.setState({
          // src:res.songs[0].al.picUrl,
          name:res.songs[0].name,
          id:res.songs[0].id,
          publishTime:res.songs[0].publishTime,
          // name:res.songs[0].name,
        })
      }
    })
  }
   constructor(props){
     super(props)
     this.state = {
      publishTime:'',
      songsId:'',
      id:'',
      src:'',
      name:'',
     }
  }
  componentDidMount(){
    console.log(F2)                            
  }
   render(){
     return (<div>
          <Input placeholder="请输入歌曲ID" onBlur={this.getSongs.bind(this)} />
          <div>
            <img src={this.state.src} alt="图片获取失败"></img>
          </div>
     </div>)
  }
}