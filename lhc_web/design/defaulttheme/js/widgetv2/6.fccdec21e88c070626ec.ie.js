(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[6],{477:function(t,e,a){"use strict";a.r(e),a.d(e,"nodeJSChat",(function(){return d}));var n=a(5),i=a.n(n),c=a(6),s=a.n(c),h=a(3),o=a(11),d=new(function(){function t(){var e=this;i()(this,t),this.socket=null,h.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.destroy()}))}return s()(t,[{key:"bootstrap",value:function(t,e,n){var i,c=n(),s=c.chatwidget.getIn(["chatData","id"]),d=(c.chatwidget.getIn(["chatData","hash"]),c.chatwidget.getIn(["chat_ui","sync_interval"])),r={hostname:t.hostname,path:t.path};""!=t.port&&(r.port=parseInt(t.port)),1==t.secure&&(r.secure=!0),i=t.instance_id>0?"chat_"+t.instance_id+"_"+s:"chat_"+s;var g=a(486),u=this.socket=g.connect(r),_=null;function p(e){1==e.status?t.instance_id>0?u.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:e.msg}):u.publish("chat_"+s,{op:"vt",msg:e.msg}):t.instance_id>0?u.publish("chat_"+t.instance_id+"_"+s,{op:"vts"}):u.publish("chat_"+s,{op:"vts"})}function l(){(_=t.instance_id>0?u.subscribe("chat_"+t.instance_id+"_"+s):u.subscribe("chat_"+s)).on("subscribeFail",(function(t){console.error("Failed to subscribe to the sample channel due to error: "+t)})),_.watch((function(t){if("ot"==t.op)1==t.data.status?e({type:"chat_status_changed",data:{text:t.data.ttx}}):e({type:"chat_status_changed",data:{text:""}});else if("cmsg"==t.op||"schange"==t.op){var a=n();a.chatwidget.hasIn(["chatData","id"])&&e(Object(o.d)({chat_id:a.chatwidget.getIn(["chatData","id"]),hash:a.chatwidget.getIn(["chatData","hash"]),lmgsid:a.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:a.chatwidget.get("theme")}))}else if("schange"==t.op){var i=n();i.chatwidget.hasIn(["chatData","id"])&&e(Object(o.b)({chat_id:i.chatwidget.getIn(["chatData","id"]),hash:i.chatwidget.getIn(["chatData","hash"]),mode:i.chatwidget.get("mode"),theme:i.chatwidget.get("theme")}))}})),h.a.eventEmitter.addListener("visitorTyping",p),e({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),e({type:"CHAT_ADD_OVERRIDE",data:"typing"})}u.on("error",(function(t){console.error(t)})),u.on("close",(function(){null!==_&&_.destroy(),h.a.eventEmitter.removeListener("visitorTyping",p),e({type:"CHAT_UI_UPDATE",data:{sync_interval:d}}),e({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})})),u.on("connect",(function(e){e.isAuthenticated&&s>0?l():u.emit("login",{hash:t.hash,chanelName:i},(function(t){t?console.log(t):l()}))}))}}]),t}())}}]);
//# sourceMappingURL=6.fccdec21e88c070626ec.ie.js.map