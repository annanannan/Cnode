import React, { Component } from 'react';
import { Pagination } from 'antd';
import {Link} from 'react-router-dom';
export default class Ask extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            url:'https://cnodejs.org/api/v1/topics/?tab=ask'
        }
    }
    changePage=(page)=> { 
        var url = 'https://cnodejs.org/api/v1/topics/?tab=ask&page='+page;
        this.setState({
            url : url
        },function(){
            fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
                {
                    res.data.map((item)=>{
                        this.setState({
                            data:res.data
                        })
                    })
                }
            })
        })
    }   
    componentDidMount(){
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{
            {
                res.data.map((item)=>{
                    this.setState({
                        data:res.data
                    })
                })
            }
        })
    }
    render() {
        return (
            <div>
                <ul>
                <div className="list">
                    {
                        this.state.data.map((item,idx)=>
                            <li key={idx}>
                                <img src={item.author.avatar_url} alt={item.author.loginname} className="list1"/>
                                <span className="count1">{item.reply_count}</span>
                                <span className="count2">/{item.visit_count}</span>                                       
                                <Link className="topic-title" to={'/topic/'+item.id}>
                                {item.title}
                                </Link>
                                <span className="listtime">4小时前</span>
                            </li>)
                    }
                </div>
            </ul>
            <div id="pages">
                <Pagination defaultCurrent={1} total={100} onChange={this.changePage} key={this.pages}/>
            </div>
        </div>
        )
    }
}
