(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(20)},17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),i=t.n(o),c=(t(17),t(2)),s=t.n(c),d=t(3),l=t(6),m=t(7),u=t(9),E=t(8),v=t(10),w=(t(19),{getAddress:function(){return new Promise(function(e){window.addEventListener("ICONEX_RELAY_RESPONSE",function n(t){var a=t.detail,r=a.type,o=a.payload;"RESPONSE_ADDRESS"===r&&e(o),window.removeEventListener("ICONEX_RELAY_RESPONSE",n)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_ADDRESS"}}))})},sendTransaction:function(e){return new Promise(function(n){window.addEventListener("ICONEX_RELAY_RESPONSE",function e(t){var a=t.detail,r=a.type,o=a.payload;"RESPONSE_JSON-RPC"===r&&n(o.result),window.removeEventListener("ICONEX_RELAY_RESPONSE",e)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_JSON-RPC",payload:e}}))})}}),p=t(1),f=t.n(p),h=new p.HttpProvider(window.PROVIDER_URL),S=new f.a(h),N=p.IconBuilder.CallBuilder,R=p.IconBuilder.CallTransactionBuilder,g=p.IconBuilder.IcxTransactionBuilder,O={iconService:S,callBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.from,t=e.methodName,a=e.to,r=e.params,o=void 0===r?{}:r;return(new N).from(n).to(a).method(t).params(o).build()},sendTxBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.from,t=e.to,a=e.methodName,r=e.params,o=void 0===r?{}:r,i=e.networkId,c=void 0===i?window.NID:i,s=e.stepLimit,d=void 0===s?"0x493e0":s,l=e.value,m=void 0===l?"0x0":l;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new R).nid(c).from(n).to(t).stepLimit(d).value(m).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).method(a).params(o).version("0x3").build(),id:1}},sendTxBuild2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.from,t=e.to,a=e.networkId,r=void 0===a?window.NID:a,o=e.stepLimit,i=void 0===o?"0x493e0":o,c=e.value,s=void 0===c?"0x0":c;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new g).nid(r).from(n).to(t).stepLimit(i).value(s).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).version("0x3").build(),id:1}}};function _(e){return parseInt(e[5],16)}var x=["\uc9dc\uc7a5\uba74","\ub77c\uba74","\uc9dc\ud30c\uad6c\ub9ac","\uc6b0\ub3d9","\ub3c8\uae4c\uc9c0","\uce58\uc988\ub3c8\uae4c\uc9c0","\ub41c\uc7a5\ucc0c\uac1c","\uc0ac\uc774\ub2e4","\uad76\uc5b4\uc694..","\uc0bc\uacb9\uc0b4","\ud53c\uc790","\ud06c\ub85c\uc640\uc0c1","\ub9c8\uce74\ub871","\ubd80\ub300\ucc0c\uac1c","\ud68c","\ucee4\ud53c","\uc9c4\uc800\uc5d0\uc77c"],A=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(E.a)(n)).call.apply(e,[this].concat(r)))).state={login:!1,foodname:x[0],myAddress:""},t.clickme=function(){var e=Object(d.a)(s.a.mark(function e(n){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAddress();case 2:a=e.sent,t.setState({login:!0,myAddress:a});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.clickagain=Object(d.a)(s.a.mark(function e(){var n,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.sendTxBuild2,a=n({from:t.state.myAddress,to:window.CONTRACT_ADDRESS}),e.next=4,w.sendTransaction(a);case 4:(r=e.sent)&&t.setState({foodname:x[_(r)]}),console.log(_(r),t.state.foodname);case 7:case"end":return e.stop()}},e)})),t}return Object(v.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"})),this.state.login?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,this.state.foodname),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#",className:"green",onClick:this.clickagain},"\ub2e4\uc2dc\ud558\uae30")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrap2"}),r.a.createElement("div",{className:"wrap",onClick:this.clickme}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.ffc51378.chunk.js.map