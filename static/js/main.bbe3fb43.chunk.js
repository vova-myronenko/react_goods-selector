(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(2),s=a.n(c),r=a(3),l=a(4),i=a(7),u=a(6),m=a(5),d=a.n(m),g=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={good:"Jam"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.good;return n.a.createElement("div",{className:"goods"},t?n.a.createElement("h1",{className:"goods__title"},t," ","is selected"," ",n.a.createElement("button",{type:"button",onClick:function(){e.setState({good:null})}},"X")):n.a.createElement("h1",{className:"goods__title"},"No goods selected"),n.a.createElement("ul",{className:"goods__list"},g.map((function(a){return n.a.createElement("li",{key:"goodFS",className:d()("goods__item",{active:t===a})},a," ",t!==a&&n.a.createElement("button",{type:"button",onClick:function(){e.setState({good:a})}},"Select"))}))))}}]),a}(n.a.Component);s.a.render(n.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.bbe3fb43.chunk.js.map