(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],f=0,b=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="vue-chatkit/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1537:function(e,t,r){"use strict";var n=r("6eda"),s=r.n(n);s.a},"2a13":function(e,t,r){},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("5f5b"),a=r("123d"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},i=[],u=(r("5c0b"),r("2877")),l={},f=Object(u["a"])(l,c,i,!1,null,null,null),b=f.exports,d=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("b-jumbotron",{attrs:{header:"Vue.js Chat",lead:"Powered by Chatkit SDK and Bootstrap-Vue","bg-variant":"info","text-variant":"white"}},[r("p",[e._v("For more information visit website")]),r("b-btn",{attrs:{target:"_blank",href:"https://pusher.com/chatkit"}},[e._v("More Info")])],1),r("b-container",[r("b-row",[r("b-col",{attrs:{lg:"4",md:"3"}}),r("b-col",{attrs:{lg:"4",md:"6"}},[r("LoginForm")],1),r("b-col",{attrs:{lg:"4",md:"3"}})],1)],1)],1)},m=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-form"},[r("h5",{staticClass:"text-center"},[e._v("Chat Login")]),r("hr"),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("b-alert",{attrs:{variant:"danger",show:e.hasError}},[e._v(e._s(e.error))]),r("b-form-group",{attrs:{id:"userInputGroup",label:"User Name","label-for":"userInput"}},[r("b-form-input",{attrs:{id:"userInput",type:"text",placeholder:"Enter user name",autocomplete:"off",disabled:e.loading,required:""},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}})],1),r("b-button",{staticClass:"ld-ext-right",class:{running:e.loading},attrs:{type:"submit",variant:"primary",disabled:e.isValid}},[e._v(" Login "),r("div",{staticClass:"ld ld-ring ld-spin"})])],1)],1)},g=[],h=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf"),r("1da1")),v=r("ade3"),O=r("2f62");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"login-form",data:function(){return{userId:""}},computed:w({isValid:function(){var e=this.userId.length<3;return e||this.loading}},Object(O["e"])(["loading","error"]),{},Object(O["c"])(["hasError"])),methods:w({},Object(O["b"])(["login"]),{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.login(this.userId);case 2:t=e.sent,t&&this.$router.push("chat");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},k=_,P=Object(u["a"])(k,j,g,!1,null,null,null),x=P.exports,R={name:"login",components:{LoginForm:x}},C=R,E=Object(u["a"])(C,p,m,!1,null,null,null),S=E.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"chat-dashboard"},[r("ChatNavBar"),r("b-container",{staticClass:"ld-over",class:{running:e.loading},attrs:{fluid:""}},[r("div",{staticClass:"ld ld-ring ld-spin"}),r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("RoomList")],1),r("b-col",{attrs:{cols:"8"}},[r("b-row",[r("b-col",{attrs:{id:"chat-content"}},[r("MessageList")],1)],1),r("b-row",[r("b-col",[r("MessageForm")],1)],1)],1),r("b-col",{attrs:{cols:"2"}},[r("UserList")],1)],1)],1)],1)},M=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-navbar",{attrs:{id:"chat-navbar",toggleable:"md",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Vue Chat")]),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-text",[e._v(e._s(e.user.name)+" |")]),r("b-nav-item",{attrs:{href:"#",active:""},on:{click:e.onLogout}},[e._v("Logout")])],1)],1)},T=[];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={name:"ChatNavBar",computed:U({},Object(O["e"])(["user","reconnect"])),methods:U({},Object(O["b"])(["logout","login"]),{},Object(O["d"])(["setReconnect"]),{onLogout:function(){this.$router.push({path:"/"}),this.logout()},unload:function(){this.user.username&&this.setReconnect(!0)}}),mounted:function(){window.addEventListener("beforeunload",this.unload),this.reconnect&&this.login(this.user.username)}},$=I,N=(r("1537"),Object(u["a"])($,z,T,!1,null,null,null)),F=N.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"room-list"},[r("h4",[e._v("Channels")]),r("hr"),e.activeRoom?r("b-list-group",e._l(e.rooms,(function(t){return r("b-list-group-item",{key:t.name,attrs:{active:e.activeRoom.id===t.id,href:"#"},on:{click:function(r){return e.onChange(t)}}},[e._v("# "+e._s(t.name))])})),1):e._e()],1)},V=[];function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={name:"RoomList",computed:B({},Object(O["e"])(["rooms","activeRoom"])),methods:B({},Object(O["b"])(["changeRoom"]),{onChange:function(e){this.changeRoom(e.id)}})},G=Y,J=Object(u["a"])(G,A,V,!1,null,null,null),H=J.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-list"},[r("h4",[e._v("Messages")]),r("hr"),r("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{smooth:!0},expression:"{smooth: true}"}],staticClass:"message-group",attrs:{id:"chat-messages"}},e._l(e.messages,(function(t,n){return r("div",{key:n,staticClass:"message"},[r("div",{staticClass:"clearfix"},[r("h4",{staticClass:"message-title"},[e._v(e._s(t.name))]),r("small",{staticClass:"text-muted float-right"},[e._v("@"+e._s(t.username))])]),r("p",{staticClass:"message-text"},[e._v(e._s(t.text))]),r("div",{staticClass:"clearfix"},[r("small",{staticClass:"text-muted float-right"},[e._v(e._s(t.date))])])])})),0),r("div",{staticClass:"user-typing"},[e.userTyping?r("small",{staticClass:"text-muted"},[e._v("@"+e._s(e.userTyping)+" is typing....")]):e._e()])])},Q=[];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={name:"message-list",computed:X({},Object(O["e"])(["messages","userTyping"]))},ee=Z,te=(r("e3b5"),Object(u["a"])(ee,K,Q,!1,null,null,null)),re=te.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-form ld-over"},[r("small",{staticClass:"text-muted"},[e._v("@"+e._s(e.user.username))]),r("b-form",{staticClass:"ld-over",class:{running:e.sending},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"ld ld-ring ld-spin"}),r("b-alert",{attrs:{variant:"danger",show:e.hasError}},[e._v(e._s(e.error))]),r("b-form-group",[r("b-form-input",{attrs:{id:"message-input",type:"text",placeholder:"Enter Message",autocomplete:"off",required:""},on:{input:e.isTyping},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),r("div",{staticClass:"clearfix"},[r("b-button",{staticClass:"float-right",attrs:{type:"submit",variant:"primary"}},[e._v("Send")])],1)],1)],1)},se=[],ae=(r("d81d"),r("b0c0"),r("a9e3"),r("726d")),oe=r("c1df"),ce=r.n(oe),ie=r("bfa9"),ue={setError:function(e,t){e.error=t},setLoading:function(e,t){e.loading=t},setUser:function(e,t){e.user=t},setReconnect:function(e,t){e.reconnect=t},setActiveRoom:function(e,t){e.activeRoom=t},setRooms:function(e,t){e.rooms=t},setUsers:function(e,t){e.users=t},clearChatRoom:function(e){e.users=[],e.messages=[]},setMessages:function(e,t){e.messages=t},addMessage:function(e,t){e.messages.push(t)},setSending:function(e,t){e.sending=t},setUserTyping:function(e,t){e.userTyping=t},reset:function(e){e.error=null,e.users=[],e.messages=[],e.rooms=[],e.user=null}};function le(e,t){var r=t.message||t.info.error_description;e("setError",r)}var fe={login:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,r){var n,s,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,s=t.state,e.prev=1,n("setError",""),n("setLoading",!0),e.next=6,Ee.connectUser(r);case 6:return a=e.sent,n("setUser",{username:a.id,name:a.name}),n("setReconnect",!1),o=a.rooms.map((function(e){return{id:e.id,name:e.name}})),n("setRooms",o),c=s.activeRoom||o[0],n("setActiveRoom",{id:c.id,name:c.name}),e.next=15,Ee.subscribeToRoom(c.id);case 15:return e.abrupt("return",!0);case 18:e.prev=18,e.t0=e["catch"](1),le(n,e.t0);case 21:return e.prev=21,n("setLoading",!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[1,18,21,24]])})));function t(t,r){return e.apply(this,arguments)}return t}(),changeRoom:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,r){var n,s,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,Ee.subscribeToRoom(r);case 4:s=e.sent,a=s.id,o=s.name,n("setActiveRoom",{id:a,name:o}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),le(n,e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),sendMessage:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,r){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,n("setError",""),n("setSending",!0),e.next=6,Ee.sendMessage(r);case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e["catch"](1),le(n,e.t0);case 13:return e.prev=13,n("setSending",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));function t(t,r){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r("reset"),Ee.disconnectUser(),window.localStorage.clear();case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()};n["default"].use(O["a"]);var be=!1,de=new ie["a"]({storage:window.localStorage}),pe=new O["a"].Store({state:{loading:!1,sending:!1,error:null,user:[],reconnect:!1,activeRoom:null,rooms:[],users:[],messages:[],userTyping:null},mutations:ue,actions:fe,getters:{hasError:function(e){return!!e.error}},plugins:[de.plugin],strict:be}),me="v1:us1:c80b81d5-be09-448f-abd7-85f0bdeba312",je="https://us1.pusherplatform.io/services/chatkit_token_provider/v1/c80b81d5-be09-448f-abd7-85f0bdeba312/token",ge=Number("10")||10,he=null,ve=null;function Oe(e){return ye.apply(this,arguments)}function ye(){return ye=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new ae["ChatManager"]({instanceLocator:me,tokenProvider:new ae["TokenProvider"]({url:je}),userId:t}),e.next=3,r.connect();case 3:return he=e.sent,e.abrupt("return",he);case 5:case"end":return e.stop()}}),e)}))),ye.apply(this,arguments)}function we(e){return _e.apply(this,arguments)}function _e(){return _e=Object(h["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return pe.commit("clearChatRoom"),e.next=3,he.subscribeToRoom({roomId:t,messageLimit:ge,hooks:{onMessage:function(e){pe.commit("addMessage",{name:e.sender.name,username:e.senderId,text:e.text,date:ce()(e.createdAt).format("h:mm:ss a D-MM-YYYY")})},onPresenceChanged:function(){ke()},onUserStartedTyping:function(e){pe.commit("setUserTyping",e.id)},onUserStoppedTyping:function(){pe.commit("setUserTyping",null)}}});case 3:return ve=e.sent,ke(),e.abrupt("return",ve);case 6:case"end":return e.stop()}}),e)}))),_e.apply(this,arguments)}function ke(){var e=ve.users.map((function(e){return{username:e.id,name:e.name,presence:e.presence.state}}));pe.commit("setUsers",e)}function Pe(e){return xe.apply(this,arguments)}function xe(){return xe=Object(h["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,he.sendMessage({text:t,roomId:ve.id});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),xe.apply(this,arguments)}function Re(e){he.isTypingIn({roomId:e})}function Ce(){he.disconnect()}var Ee={connectUser:Oe,subscribeToRoom:we,sendMessage:Pe,disconnectUser:Ce};function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function De(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Me={name:"message-form",data:function(){return{message:""}},computed:De({},Object(O["e"])(["user","sending","error","activeRoom"]),{},Object(O["c"])(["hasError"])),methods:De({},Object(O["b"])(["sendMessage"]),{onSubmit:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.sendMessage(this.message);case 2:t=e.sent,t&&(this.message="");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),isTyping:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Re(this.activeRoom.id);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},ze=Me,Te=Object(u["a"])(ze,ne,se,!1,null,null,null),Le=Te.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-list"},[r("h4",[e._v("Members")]),r("hr"),r("b-list-group",e._l(e.users,(function(t){return r("b-list-group-item",{key:t.username},[e._v(" "+e._s(t.name)+" "),t.presence?r("b-badge",{attrs:{variant:e.statusColor(t.presence),pill:""}},[e._v(e._s(t.presence))]):e._e()],1)})),1)],1)},Ie=[];function $e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe={name:"user-list",computed:Ne({},Object(O["e"])(["loading","users"])),methods:{statusColor:function(e){return"online"===e?"success":"warning"}}},Ae=Fe,Ve=Object(u["a"])(Ae,Ue,Ie,!1,null,null,null),qe=Ve.exports;function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){Object(v["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ge={name:"Chat",components:{ChatNavBar:F,RoomList:H,UserList:qe,MessageList:re,MessageForm:Le},computed:Ye({},Object(O["e"])(["loading"]))},Je=Ge,He=Object(u["a"])(Je,D,M,!1,null,null,null),Ke=He.exports;n["default"].use(d["a"]);var Qe=new d["a"]({mode:"history",base:"vue-chatkit/",routes:[{path:"/",name:"login",component:S},{path:"/chat",name:"chat",component:Ke}]});r("f9e3"),r("2dd8"),r("2a13"),r("ccb3");n["default"].config.productionTip=!1,n["default"].use(s["a"]),n["default"].use(o.a),new n["default"]({router:Qe,store:pe,render:function(e){return e(b)}}).$mount("#app")},"59fc":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},"6eda":function(e,t,r){},"9c0c":function(e,t,r){},ccb3:function(e,t,r){},e3b5:function(e,t,r){"use strict";var n=r("59fc"),s=r.n(n);s.a}});
//# sourceMappingURL=app.7fb659c5.js.map