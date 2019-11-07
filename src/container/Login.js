import React, { Component } from 'react'
import { Link, Route} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <span>登录</span>
                </div>
                <div className="login1">
                    用户名&nbsp;&nbsp; <input type="text" name="username"/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp; <input type="pwd" name="pwd"/>
                    <br/>
                    <Link to='/home/all'>
                        <input type="submit" value="登录" id="login2" onClick={this.login}/>
                    </Link>
                </div>     
            </div> 
        )
    }
}

