(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{108:function(e,t,a){e.exports=a(174)},113:function(e,t,a){},114:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),i=(a(113),a(114),a(3));function o(){return c.a.createElement("div",{className:"headerwrap"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}),c.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},c.a.createElement(i.b,{to:"/home/all"},"\u9996\u9875"),c.a.createElement(i.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(i.b,{to:"/api"},"API"),c.a.createElement(i.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(i.b,{to:"/login"},"\u767b\u5f55"))))}var s=a(27),u=a(5),m=a(6),p=a(8),h=a(7),d=a(9),E=a(175),g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){console.log(t);var a="https://cnodejs.org/api/v1/topics/?tab=all&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"1\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){var a="https://cnodejs.org/api/v1/topics/?tab=share&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/?tab=share"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"3\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){var a="https://cnodejs.org/api/v1/topics/?tab=ask&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/?tab=ask"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"4\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){var a="https://cnodejs.org/api/v1/topics/?tab=good&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/?tab=good",key:0},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"2\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){var a="https://cnodejs.org/api/v1/topics/?tab=job&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/?tab=job",key:0},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"5\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).changePage=function(t){var a="https://cnodejs.org/api/v1/topics/?tab=devd&page="+t;e.setState({url:a},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}))},e.state={data:[],url:"https://cnodejs.org/api/v1/topics/?tab=dev",key:0},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,fetch(this.state.url).then((function(e){return e.json()})).then((function(t){t.data.map((function(a){e.setState({data:t.data})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("div",{className:"list"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"list1"}),c.a.createElement("span",{className:"count1"},e.reply_count),c.a.createElement("span",{className:"count2"},"/",e.visit_count),c.a.createElement(i.b,{className:"topic-title",to:"/topic/"+e.id},e.title),c.a.createElement("span",{className:"listtime"},"6\u5c0f\u65f6\u524d"))})))),c.a.createElement("div",{id:"pages"},c.a.createElement(E.a,{defaultCurrent:1,total:100,onChange:this.changePage,key:this.pages})))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={data:"data"},a.button=function(e){var t=e.currentTarget.parentElement.children.length;console.log(e.currentTarget.parentElement.children.length);for(var n=0;n<t;n++)e.currentTarget.parentElement.children[n].style.backgroundColor="#F0F0F0",e.currentTarget.parentElement.children[n].firstChild.style.color="black";e.currentTarget.style.backgroundColor="green",e.currentTarget.firstChild.style.color="#ffffff",a.forceUpdate()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getChildMessage",value:function(e){this.setState({data:e})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"top"},c.a.createElement("div",{style:{background:"#F0F0F0",padding:"6px 16px 6px"}},c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/all"},"\u5168\u90e8")),c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/good"},"\u7cbe\u534e")),c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/share"},"\u5206\u4eab")),c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/ask"},"\u95ee\u7b54")),c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/job"},"\u62db\u8058")),c.a.createElement("button",{onClick:this.button},c.a.createElement(i.b,{to:"/home/dev"},"\u5ba2\u6237\u7aef\u6d4b\u8bd5"))),c.a.createElement("div",null,c.a.createElement(s.b,{path:"/home/all",component:g}),c.a.createElement(s.b,{path:"/home/good",component:v}),c.a.createElement(s.b,{path:"/home/share",component:f}),c.a.createElement(s.b,{path:"/home/ask",component:b}),c.a.createElement(s.b,{path:"/home/job",component:j}),c.a.createElement(s.b,{path:"/home/dev",component:y}))))}}]),t}(n.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login"},c.a.createElement("span",null,"API")),"api")}}]),t}(n.Component),N=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login"},c.a.createElement("span",null,"\u65b0\u624b\u5165\u95e8")),"start")}}]),t}(n.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login"},c.a.createElement("span",null,"\u5173\u4e8e")),"about")}}]),t}(n.Component),S=a(106),_=a(104),x={avatar_url:" ",loginname:" "};var P=Object(_.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_user_infor":return console.log(t),t.userInfor;default:return e}})),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state=P.getState(),P.subscribe((function(){a.setState(P.getState())})),a.state={none:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics").then((function(e){return e.json()})).then((function(t){t.data.map((function(t){if(0==t.reply_count){var a;a=[].concat(Object(S.a)(e.state.none),[t.title]),e.setState({none:a})}}))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"Righter"},c.a.createElement("div",{className:"a1"},c.a.createElement("p",{className:"b1"},"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",{className:"b2"},"\u60a8\u53ef\u4ee5",c.a.createElement("a",{href:"https://cnodejs.org/signin"},"\u767b\u5f55"),"\u6216",c.a.createElement("a",{href:"https://cnodejs.org/signup"},"\u6ce8\u518c"),", \u4e5f\u53ef\u4ee5 "),c.a.createElement("p",{className:"b3"},"\u901a\u8fc7\xa0\xa0GitHub\xa0\xa0\u767b\u5f55")),c.a.createElement("div",{className:"a2"},c.a.createElement("img",{style:{marginTop:"6px"},alt:"",src:"https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"}),c.a.createElement("img",{alt:"",src:"https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"}),c.a.createElement("img",{alt:"",src:"https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"})),c.a.createElement("div",{className:"a3"},c.a.createElement("p",{style:{padding:"6px 0 6px 6px",backgroundColor:"rgb(233, 231, 231)",marginBottom:"6px"}},"\u65e0\u4eba\u56de\u590d\u7684\u8bdd\u9898"),c.a.createElement("li",null,"\u91c7\u7528hexo\u4e8c\u6b21\u5f00\u53d1\u7684\u4e2a\u4eba\u535a\u5ba2\uff0c\u6587\u827a\u98ce\u5662"),c.a.createElement("li",null,"\u4f7f\u7528sequlize\u65f6\uff0c\u5982\u4f55\u5bf9\u591a\u5bf9\u591a\u6a21\u578b\u7b5b\u9009"),c.a.createElement("li",null,"http://www.cocky.fun/ \u6765\u8fd9\u91cc\u804a\u5929\u554a"),c.a.createElement("li",null,"\u3010\u65b0\u624b\u3011\u7528\u6237\u6ce8\u518c\u65f6\u5206\u4e24\u4e2a\u6b65\u9aa4\uff0c\u8bf7\u95ee\u4e34\u65f6"),c.a.createElement("li",null,"\u6c42\u52a9:server\u7aef\u65e0\u54cd\u5e94\u95ee\u9898")),c.a.createElement("div",{className:"a3",style:{height:"350px"}},c.a.createElement("p",{style:{padding:"6px 0 6px 6px",backgroundColor:"rgb(233, 231, 231)",marginBottom:"6px",cursor:"pointer"}},"\u79ef\u5206\u699c TOP 100>>"),c.a.createElement("li",null,"21735\xa0\xa0i5ting"),c.a.createElement("li",null,"15670\xa0\xa0alsotang"),c.a.createElement("li",null,"9350\xa0\xa0leapon"),c.a.createElement("li",null,"9065\xa0\xa0atian25"),c.a.createElement("li",null,"8780\xa0\xa0jiyinyiyong"),c.a.createElement("li",null,"7325\xa0\xa0yakczh"),c.a.createElement("li",null,"6815\xa0\xa0im-here"),c.a.createElement("li",null,"6095\xa0\xa0DevinXian"),c.a.createElement("li",null,"5815\xa0\xa0chapgaga"),c.a.createElement("li",null,"5350\xa0\xa0magicdawn")),c.a.createElement("div",{className:"a5"},c.a.createElement("p",{style:{padding:"6px 0 6px 6px",backgroundColor:"rgb(233, 231, 231)",margin:"10px 0 6px 0",fontSize:"13px"}},"\u53cb\u60c5\u793e\u533a"),c.a.createElement("li",null,c.a.createElement("img",{alt:"",src:"https://static2.cnodejs.org/public/images/ruby-china-20150529.png"})),c.a.createElement("li",null,c.a.createElement("img",{alt:"",src:"https://static2.cnodejs.org/public/images/golangtc-logo.png"})),c.a.createElement("li",null,c.a.createElement("img",{alt:"",src:"https://static2.cnodejs.org/public/images/phphub-logo.png"})),c.a.createElement("li",null,c.a.createElement("img",{alt:"",src:"https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"}))),c.a.createElement("div",{style:{backgroundColor:"white"}},c.a.createElement("p",{style:{padding:"6px 0 6px 6px",backgroundColor:"rgb(233, 231, 231)",margin:"10px 0 6px 0",fontSize:"13px"}},"\u5ba2\u6237\u7aef\u4e8c\u7ef4\u7801"),c.a.createElement("img",{style:{width:"200px",height:"100%",paddingLeft:"20px"},alt:"",src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"}),c.a.createElement("p",{className:"adr"},"\u5ba2\u6237\u7aef\u6e90\u7801\u5730\u5740")))}}]),t}(n.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"login"},c.a.createElement("span",null,"\u767b\u5f55")),c.a.createElement("div",{className:"login1"},"\u7528\u6237\u540d\xa0\xa0 ",c.a.createElement("input",{type:"text",name:"username"}),c.a.createElement("br",null),"\u5bc6\xa0\xa0\xa0\xa0\u7801\xa0\xa0 ",c.a.createElement("input",{type:"pwd",name:"pwd"}),c.a.createElement("br",null),c.a.createElement(i.b,{to:"/home/all"},c.a.createElement("input",{type:"submit",value:"\u767b\u5f55",id:"login2",onClick:this.login}))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={data:"",con:"",time:"",url:"https://cnodejs.org/api/v1/topic/"},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.setState({url:"https://cnodejs.org/api/v1/topic/"+e},(function(){var e=this;fetch(this.state.url).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data.content,con:t.data.con,time:t.data.time})}))}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{dangerouslySetInnerHTML:{__html:this.state.con}}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.time}}),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data}}))}}]),t}(n.Component);var D=function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"content"},c.a.createElement(s.a,{from:"/",to:"/home/all"}),c.a.createElement(s.a,{from:"/home",to:"/home/all"}),c.a.createElement(s.b,{path:"/api",component:k}),c.a.createElement(s.b,{path:"/about",component:C}),c.a.createElement(s.b,{path:"/start",component:N}),c.a.createElement(s.b,{path:"/login",component:w}),c.a.createElement(s.b,{path:"/topic/:id",component:T}),c.a.createElement(s.b,{path:"/home",component:O})),c.a.createElement(M,null))))};r.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.94e2c50a.chunk.js.map