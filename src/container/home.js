import React, { Component } from 'react';
import { Link,Route} from 'react-router-dom';
import All from './All'
import Share from './Share'
import Ask from './Ask'
import Good from './Good'
import Job from './Job'
import Dev from './Dev'
export default class Home extends Component {
    state = {
        data: 'data'
    }
    getChildMessage (newData) {
        this.setState({
            data: newData
        })
    }
    button=(e)=>{   
        var l = e.currentTarget.parentElement.children.length;
        console.log(e.currentTarget.parentElement.children.length)
        for(var i=0;i<l;i++){
            e.currentTarget.parentElement.children[i].style.backgroundColor='#F0F0F0';
            e.currentTarget.parentElement.children[i].firstChild.style.color='black';
        }
        e.currentTarget.style.backgroundColor='green';
        e.currentTarget.firstChild.style.color='#ffffff';
        this.forceUpdate();
    }
    render() {
        return (
                <div>
                    <div className="top">
                        <div style={{ background: '#F0F0F0', padding: '6px 16px 6px'}}>
                            <button onClick={this.button}><Link to='/home/all'>全部</Link></button>
                            <button onClick={this.button}><Link to='/home/good'>精华</Link></button>
                            <button onClick={this.button}><Link to='/home/share'>分享</Link></button>
                            <button onClick={this.button}><Link to='/home/ask'>问答</Link></button>
                            <button onClick={this.button}><Link to='/home/job'>招聘</Link></button>
                            <button onClick={this.button}><Link to='/home/dev'>客户端测试</Link></button>
                        </div>
                        <div>
                            <Route path='/home/all' component={All} />    
                            <Route path='/home/good' component={Good} />
                            <Route path='/home/share' component={Share} />
                            <Route path='/home/ask' component={Ask} />
                            <Route path='/home/job' component={Job} />
                            <Route path='/home/dev' component={Dev} />   
                        </div>
                    </div>
                </div>
        )
    }
}

