(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=(n(16),n(6)),i=n(9),u=n(1),s=n(2),h=n(4),m=n(3),f=n(5);var w=function(e){var t=e.value,n=e.onClick;return r.a.createElement("div",{className:"board-cell",onClick:n},t)},v=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"renderCells",value:function(){var e=this.props,t=e.cells,n=e.onClick;return t.map(function(e,t){return r.a.createElement(w,{value:e,key:"cell-"+t,onClick:function(){n(t)}})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board"},this.renderCells())}}]),t}(r.a.Component);n(17);var d=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).handleClick=function(t){var n=e.state,a=n.cells,r=n.whoNext,l=n.stepCounter,c=n.winner;(a=Object(i.a)(a))[t]||c||(a[t]=r,r="X"===r?"0":"X",l+=1,c=function(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].filter(function(t){var n=Object(o.a)(t,3),a=n[0],r=n[1],l=n[2];return e[a]&&e[a]===e[r]&&e[r]===e[l]}),n=Object(o.a)(t,1)[0];return n?e[n[0]]:null}(a),e.setState({cells:a,whoNext:r,stepCounter:l,winner:c}))},e.resetGame=function(){e.setState({cells:Array(9).fill(null),stepCounter:1,whoNext:"X",winner:null})},e.state={cells:Array(9).fill(null),stepCounter:1,whoNext:"X",winner:null},e}return Object(f.a)(t,e),Object(s.a)(t,[{key:"renderResetButton",value:function(e,t){if(e||10===t)return r.a.createElement("button",{onClick:this.resetGame},"New game!")}},{key:"render",value:function(){var e,t=this.state,n=t.cells,a=t.whoNext,l=t.winner,c=t.stepCounter;return e=l?"Player ".concat(l," wins!"):10===c?"It is a DRAW!":"Player ".concat(a,", your turn!"),r.a.createElement("div",{className:"Game"},r.a.createElement("h1",null,"Tic Tac Toe, step: ",c),r.a.createElement("h3",null,e),this.renderResetButton(l,c),r.a.createElement(v,{cells:n,onClick:this.handleClick}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.2bc625c2.chunk.js.map