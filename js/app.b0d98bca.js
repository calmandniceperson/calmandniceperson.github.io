(function(t){function e(e){for(var r,i,c=e[0],u=e[1],s=e[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"2dad":function(t,e,n){},"2e61":function(t,e,n){"use strict";var r=n("f6ac"),o=n.n(r);o.a},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},7004:function(t){t.exports=JSON.parse('{"github":"https://github.com/rettetdemdativ","stackoverflow":"https://stackoverflow.com/users/2593209/calmandniceperson?tab=profile","twitter":"https://twitter.com/rettetdemdativ"}')},"9c0c":function(t,e,n){},bf6c:function(t){t.exports=JSON.parse('{"invalid":["You entered an invalid command"],"about":["\\nWait, what? How did you even get here?! You... randomly browsing... alright.\\n","Well, since you\'re already here, I might as well introduce myself.\\n","Hi. My name is Michael. I\'m a computer science student hailing from"," Austria.\\n"],"help":["You can use the following commands:","\\n\\tabout          personal information about me","\\n\\thelp           a help text","\\n\\tclear          clear the console","\\n\\tgithub","\\n\\t\\tshow\\topens my GitHub page","\\n\\t\\tinfo\\tprints info from my GitHub page","\\n\\tstackoverflow","\\n\\t\\tshow\\topens my Stackoverflow page","\\n\\t\\tinfo\\tprints info from my Stackoverflow profile","\\n\\ttwitter","\\n\\t\\tshow\\topens my Twitter page","\\n\\t\\tinfo\\tprints info from my Twitter"]}')},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,o,a,!1,null,null,null),s=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",attrs:{id:"home"}},[n("Info",{staticClass:"row content",attrs:{id:"info"}}),n("div",{staticClass:"row content",attrs:{id:"terminal_div"}},[n("Terminal",{attrs:{id:"terminal"}})],1),n("div",{staticClass:"row footer"})],1)},p=[],d=(n("6b54"),n("2397"),n("d225")),h=n("4e2b"),v=n("308d"),m=n("6bb5"),b=n("9ab4"),g=n("60a3"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info"},[r("img",{attrs:{id:"profile_pic",src:n("f0e3")}}),r("h1",[t._v(t._s(t.title))]),r("h3",[t._v(t._s(t.description))])])},w=[];function k(t){var e=O();return function(){var n,r=Object(m["a"])(t);if(e){var o=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v["a"])(this,n)}}function O(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t){Object(h["a"])(n,t);var e=k(n);function n(){var t;return Object(d["a"])(this,n),t=e.call(this),t.title="Michael Köppl",t.description="Austrian computer science student with a passion for technology",t}return n}(g["b"]);j=Object(b["a"])([g["a"],Object(b["b"])("design:paramtypes",[])],j);var _=j,x=_,C=(n("2e61"),Object(i["a"])(x,y,w,!1,null,null,null)),S=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"terminal"}},[n("div",{attrs:{id:"term_box"}},[n("textarea",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"},{name:"model",rawName:"v-model",value:t.termText,expression:"termText"}],attrs:{spellcheck:"false",autofocus:"",id:"term_input"},domProps:{value:t.termText},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.onDelete(e)}],input:function(e){e.target.composing||(t.termText=e.target.value)}}})])])},R=[],T=(n("7f7f"),n("ac6a"),n("456d"),n("28a5"),n("b0b4")),I=(n("55dd"),n("bc3a")),D=n.n(I),E=function(){function t(){Object(d["a"])(this,t)}return Object(T["a"])(t,[{key:"getGitHubRepos",value:function(t){D.a.get("https://api.github.com/users/rettetdemdativ/repos").then((function(e){t(e.data.sort((function(t,e){return t.stargazers_count-e.stargazers_count})))}))}}]),t}(),H=function t(e,n,r,o,a,i){Object(d["a"])(this,t),this.displayName=e,this.badgeCountGold=n,this.badgeCountSilver=r,this.badgeCountBronze=o,this.questionCount=a,this.answerCount=i},B=function(){function t(){Object(d["a"])(this,t)}return Object(T["a"])(t,[{key:"getInfo",value:function(t){var e=null;D.a.all([this.getUser(),this.getQuestionCount(),this.getAnswerCount()]).then(D.a.spread((function(n,r,o){e=new H(n.data.items[0].display_name,n.data.items[0].badge_counts.gold,n.data.items[0].badge_counts.silver,n.data.items[0].badge_counts.bronze,r.data.items.length,o.data.items.length),t(e)})))}},{key:"getUser",value:function(){return D.a.get("https://api.stackexchange.com/2.2/users/2593209?order=desc&sort=reputation&site=stackoverflow")}},{key:"getQuestionCount",value:function(){return D.a.get("https://api.stackexchange.com/2.2/users/2593209/questions?order=desc&sort=activity&site=stackoverflow")}},{key:"getAnswerCount",value:function(){return D.a.get("https://api.stackexchange.com/2.2/users/2593209/answers?order=desc&sort=activity&site=stackoverflow")}}]),t}();function G(t){var e=N();return function(){var n,r=Object(m["a"])(t);if(e){var o=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v["a"])(this,n)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var z=n("bf6c"),M=n("7004"),$=function(t){Object(h["a"])(n,t);var e=G(n);function n(){var t;return Object(d["a"])(this,n),t=e.call(this),t.prompt="guest@koeppl.dev:~",t.tooltip="Type 'help' to see what you can do",t.termText=t.prompt,t}return Object(T["a"])(n,[{key:"mounted",value:function(){this.movePointerBehindPrompt()}},{key:"onEnter",value:function(t){var e=document.getElementById("term_input"),n=this.getCurrentLine(e).substr(this.prompt.length).trimRight();this.handleCommand(n,e),t.preventDefault()}},{key:"onDelete",value:function(t){var e=document.getElementById("term_input"),n=this.getCurrentLine(e);n.substr(0,n.length-1).length>=this.prompt.length?e.value=e.value.substr(0,e.value.length):t.preventDefault()}},{key:"handleCommand",value:function(t,e){if(z[t])e.value+="\n".concat(z[t].join(""),"\n").concat(this.prompt);else{var n=t.split(" ")[0];if(Object.keys(M).some((function(t){return n===t}))){var r=t.split(" ")[1];if("show"===r){var o=window.open(M[n],"_blank");o&&o.focus()}else"info"!==r&&r||this.printInfo(n,e);this.putPrompt(e)}else"clear"===t?e.value=this.prompt:""===t?this.putPrompt(e):e.value+="\n".concat(z.invalid,"\n").concat(this.prompt);e.scrollTop=e.scrollHeight}}},{key:"putPrompt",value:function(t){t.value+="\n".concat(this.prompt)}},{key:"getCurrentLine",value:function(t){var e=t.value.split("\n");return e[e.length-1]}},{key:"movePointerBehindPrompt",value:function(){var t=document.getElementById("term_input");t.selectionStart=this.prompt.length,t.selectionEnd=this.prompt.length}},{key:"printInfo",value:function(t,e){switch(t){case"github":this.printGitHubInfo(e);break;case"stackoverflow":this.printStackOverflowInfo(e);break;case"twitter":e.value+="\n".concat(M[t]);break}}},{key:"printGitHubInfo",value:function(t){var e=this,n=new E;n.getGitHubRepos((function(n){t.value+="\nList of repositories:",n.forEach((function(e){t.value+="\n".concat(e.name,"\n                    \tDescription: ").concat(e.description,"\n                    \tStargazers: ").concat(e.stargazers_count)})),e.putPrompt(t),t.scrollTop=t.scrollHeight}))}},{key:"printStackOverflowInfo",value:function(t){var e=this,n=new B;n.getInfo((function(n){t.value+="\nMy StackOverflow profile:\n                \tUsername:      ".concat(n.displayName,"\n                \tNo. of badges:\n                \t\tGold: ").concat(n.badgeCountGold,"\n                \t\tSilver: ").concat(n.badgeCountSilver,"\n                \t\tBronze: ").concat(n.badgeCountBronze,"\n                \tNo. of questions asked: ").concat(n.questionCount,"\n                \tNo. of answers given: ").concat(n.answerCount),e.putPrompt(t),t.scrollTop=t.scrollHeight}))}}]),n}(g["b"]);$=Object(b["a"])([g["a"],Object(b["b"])("design:paramtypes",[])],$);var q=$,A=q,J=(n("f58f"),Object(i["a"])(A,P,R,!1,null,null,null)),L=J.exports;function U(t){var e=Y();return function(){var n,r=Object(m["a"])(t);if(e){var o=Object(m["a"])(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v["a"])(this,n)}}function Y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Q=function(t){Object(h["a"])(n,t);var e=U(n);function n(){return Object(d["a"])(this,n),e.apply(this,arguments)}return n}(g["b"]);Q=Object(b["a"])([Object(g["a"])({components:{Info:S,Terminal:L}})],Q);var W=Q,K=W,F=(n("21bb"),Object(i["a"])(K,f,p,!1,null,null,null)),V=F.exports;r["default"].use(l["a"]);var X=new l["a"]({routes:[{path:"/",name:"home",component:V}]}),Z=n("2f62");r["default"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{}}),et=n("e37d");r["default"].config.productionTip=!1,r["default"].use(et["a"]),new r["default"]({router:X,store:tt,render:function(t){return t(s)}}).$mount("#app")},f0e3:function(t,e,n){t.exports=n.p+"img/rettetdemdativ.50cc2cce.png"},f58f:function(t,e,n){"use strict";var r=n("fc2c"),o=n.n(r);o.a},f6ac:function(t,e,n){},fc2c:function(t,e,n){}});
//# sourceMappingURL=app.b0d98bca.js.map