(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(17)},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(9),s=a.n(i),r=(a(16),a(1)),c=a(2),l=a(4),m=a(3),h=a(6),u=a(5),d=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={style:{transform:"translate(".concat(a.props.from[0],"px, ").concat(a.props.from[1],"px) rotate(").concat(360*Math.random(),"deg)")}},a.setStyle=a.setStyle.bind(Object(h.a)(a)),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){setTimeout(this.setStyle,1)}},{key:"setStyle",value:function(){var t="translate(".concat(Math.random()*window.innerHeight*2,"px, ").concat(Math.random()*window.innerWidth*2,"px) rotate(").concat(360*Math.random(),"deg)"),e=this.props,a=e.time,n=e.size,o={position:"absolute",zIndex:"-1",transform:t,transition:"transform ".concat(a,"s ease-out"),MsTransform:t,MsTransition:"transform ".concat(a,"s ease-out"),Webkitransform:t,WebkitTransition:"transform ".concat(a,"s ease-out"),overflow:"visible",willChange:"transform"},i={width:n,height:"auto"};this.setState({style:o,size:i}),setTimeout(this.setStyle,1e3*a)}},{key:"render",value:function(){var t=this.state,e=t.style,a=t.size;return o.a.createElement("div",{style:e},o.a.createElement("img",{style:a,src:this.props.what,alt:""}))}}]),e}(o.a.Component),v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={moves:[]},a.movement=a.movement.bind(Object(h.a)(a)),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){for(var t=this.props.how,e=[],a=0;a<t;a++)e.push(this.movement());this.setState({moves:e})}},{key:"movement",value:function(){return{rotation:Math.floor(600*(2*Math.round(Math.random())-1)),fromX:Math.floor(Math.random()*window.innerWidth),fromY:Math.floor(Math.random()*window.innerHeight*1.5),toX:Math.floor(Math.random()*window.innerWidth*(2*Math.round(Math.random())-1)),toY:Math.floor(Math.random()*window.innerHeight*1.5*(2*Math.round(Math.random())-1))}}},{key:"render",value:function(){var t=this.props,e=t.images,a=t.background,n=t.size,i=t.time,s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",margin:"0",padding:"0",overflow:"hidden",zIndex:"-1",background:a};return o.a.createElement("div",{style:s,id:"sky"},this.state.moves.map(function(t,a){var s=Math.floor(Math.random()*Object.keys(e).length);return o.a.createElement(d,{what:e[s],from:[t.fromX,t.fromY],to:[t.toX,t.toY],rotation:t.rotation,size:n,time:i,key:a})}))}}]),e}(o.a.Component);v.defaultProps={size:"150px",background:"",time:20};var f=v,g=(a(7),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(m.a)(e).call(this))).updChange=function(){"false"===t.state.isChecked?t.setState({isChecked:"check"}):t.setState({isChecked:"false"})},t.state={isChecked:"false"},t}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props.item;return o.a.createElement("li",null,o.a.createElement("input",{type:"checkbox",onChange:this.updChange.bind(this)}),o.a.createElement("i",{className:this.state.isChecked},t),o.a.createElement("a",{href:"#",onClick:this.props.delItem.bind(this,t)},o.a.createElement("img",{src:"https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/010_trash-2-512.png"})))}}]),e}(n.Component)),p=function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("ul",null,this.props.items.map(function(e){return o.a.createElement(g,{delItem:t.props.delItem.bind(t,e),item:e})})))}}]),e}(n.Component),b=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(m.a)(e).call(this,t))).state={mode:"space",background:"#2F3939",how:100,items:[],text:""},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(u.a)(e,t),Object(c.a)(e,[{key:"handleClick",value:function(t){this.setState({mode:t.target.value,how:t.target.attributes.how.value,background:t.target.attributes.background.value})}},{key:"submitForm",value:function(t){t.preventDefault();var e=this.state.text,a=this.state.items.concat(e);this.setState({items:a,text:""})}},{key:"changeForm",value:function(t){var e=t.target.value;this.setState({text:e})}},{key:"delItem",value:function(t){var e=this.state.items.filter(function(e){return e!=t});this.setState({items:e})}},{key:"render",value:function(){var t,e=this.state,a=e.mode,n=e.background,i=e.how;return 0===this.state.items.length||(t=o.a.createElement("ul",{id:"Incomplete"},o.a.createElement("h3",null,"your plans")," ",o.a.createElement("br",null),o.a.createElement("div",{class:"letter",className:this.state.hide},o.a.createElement(p,{items:this.state.items,delItem:this.delItem.bind(this)})))),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"title"}),o.a.createElement(f,{images:{space:{0:"https://image.flaticon.com/icons/svg/124/124574.svg",1:"https://image.flaticon.com/icons/svg/124/124570.svg",2:"https://image.flaticon.com/icons/svg/124/124567.svg",3:"https://image.flaticon.com/icons/svg/124/124560.svg",4:"https://image.flaticon.com/icons/svg/124/124559.svg",5:"https://image.flaticon.com/icons/svg/124/124582.svg",6:"https://image.flaticon.com/icons/svg/124/124558.svg",7:"https://image.flaticon.com/icons/svg/124/124588.svg",8:"https://image.flaticon.com/icons/svg/124/124542.svg",9:"https://image.flaticon.com/icons/svg/124/124569.svg",10:"https://image.flaticon.com/icons/svg/124/124573.svg",11:"https://image.flaticon.com/icons/svg/124/124586.svg",12:"https://image.flaticon.com/icons/svg/124/124548.svg",13:"https://image.flaticon.com/icons/svg/124/124555.svg"}}[a],how:i,size:"100px",time:30,background:n}),o.a.createElement("form",{class:"container",onSubmit:this.submitForm.bind(this)},o.a.createElement("img",{class:"header",src:"https://fanart.tv/fanart/movies/129139/hdmovielogo/the-to-do-list-538fe1236b047.png"}),o.a.createElement("p",null,o.a.createElement("input",{id:"new-task",type:"text",placeholder:"What is your main foucs ?",onChange:this.changeForm.bind(this),value:this.state.text})),t,o.a.createElement("h2",null,"BE",o.a.createElement("span",{class:"colorTwo"}," AMAZING")," TODAY")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.2c9a6a76.chunk.js.map