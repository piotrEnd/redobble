(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(9),c=n(1),l=n(2),u=n(4),m=n(3),h=n(6),d=n(5),p=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.hits,a=t.missed;return(n>0||a>0)&&(e=100*(n/(n+a)).toFixed(2)),r.a.createElement("div",{className:"stats"},r.a.createElement("p",null,"Hits: ",r.a.createElement("span",null,this.props.hits)),r.a.createElement("hr",null),r.a.createElement("p",null,"Missed: ",r.a.createElement("span",null,this.props.missed)),r.a.createElement("hr",null),r.a.createElement("p",null,"Rate: ",r.a.createElement("span",null,e,"%")))}}]),t}(a.Component)),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={fontFamily:"Fredoka One",textTransform:"uppercase",color:"#f44336"};return this.props.isFound&&(e.color=" #61dafb"),"initial"===this.props.isFound?null:r.a.createElement("div",{style:{lineHeight:"0"}},r.a.createElement("h2",{style:e},this.props.isFound?"nicely done":"bad deal"),r.a.createElement("p",null,this.props.isFound?"in ":"took ",this.props.timeEnd>1?"".concat(this.props.timeEnd," seconds"):"".concat(this.props.timeEnd," second")))}}]),t}(a.Component),E=["anchor","baby","bomb","bone","bus","carrot","cat","chess-knight","cocktail","couch","crow","dragon","user-md","frog","gem","guitar","spider","globe-europe","futbol","fish","user-astronaut","truck-monster","coffee","snowman","fist-raised","meteor","camera-retro","user-secret","save"];n(17);var b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).matching=r.a.createRef(),n.state={matcher:"",isFound:"initial",timeStart:Math.floor(Date.now()/1e3),timeEnd:"",hits:0,missed:0},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"random",value:function(){return Math.floor(Math.random()*this.props.numIcons)}},{key:"handleClick",value:function(e){var t=this.matching.current.attributes[1].value,n=e.currentTarget.value;console.log(t),console.log(n);var a=Math.floor(Date.now()/1e3),r=a-this.state.timeStart;t===n?this.setState(function(e){return{matcher:t,isFound:!0,timeStart:a,timeEnd:r,hits:e.hits+1}}):this.setState(function(e){return{isFound:!1,timeStart:a,timeEnd:r,missed:e.missed+1}})}},{key:"render",value:function(){var e=this;!function(){for(var e=E.length-1;e>=0;e--){var t=Math.floor(Math.random()*(e+1)),n=E[t];E[t]=E[e],E[e]=n}}();var t=Object(s.a)(E),n=t.shift();console.log(n);var a=t.splice(0,this.props.numIcons-1);a.splice(this.random(),0,n);var i=a.map(function(t){return r.a.createElement("button",{key:t,value:t,onClick:e.handleClick,matcher:n,ref:e.matching},r.a.createElement("i",{className:"fas fa-".concat(t)}))}),o=t.splice(0,this.props.numIcons-1);o.splice(this.random(),0,n);var c=o.map(function(t){return r.a.createElement("button",{key:t,value:t,onClick:e.handleClick,matcher:n,ref:e.matching},r.a.createElement("i",{className:"fas fa-".concat(t)}))});return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"card"},i),r.a.createElement(f,{isFound:this.state.isFound,timeEnd:this.state.timeEnd}),r.a.createElement("div",{className:"card"},c),r.a.createElement(p,{hits:this.state.hits,missed:this.state.missed}))}}]),t}(a.Component);b.defaultProps={icons:E,numIcons:9};var v=b;n(18);function k(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("span",null,"Re"),"Dobble"),r.a.createElement("h2",null,"There is only"," ",r.a.createElement("span",null,r.a.createElement("u",null,"one"))," ","match between"," ",r.a.createElement("span",null,r.a.createElement("u",null,"both"))," ","boards!"))}n(19);var g=function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"mailto:piotrend@gmail.com"},"\xa9 2019 by piotrEnd"))};n(20);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(v,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.e4e635a3.chunk.js.map