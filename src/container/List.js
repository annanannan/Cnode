import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:"",
            con:"",
            time:"",
            url:'https://cnodejs.org/api/v1/topic/',
        }
    }
    componentDidMount(){
        var id = this.props.match.params.id;
        this.setState({
            url:'https://cnodejs.org/api/v1/topic/'+id
        },function(){
            fetch(this.state.url)
            .then(res=>res.json())
            .then(res=>{
                // console.log(res.data.content)
                this.setState({
                    data:res.data.content,
                    con:res.data.con,
                    time:res.data.time,
                })
            })
        })
    }

    render() {
        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html:this.state.con}}></h1>
                <p dangerouslySetInnerHTML={{__html:this.state.time}}></p>
                <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
            </div>
        )
    }
}

