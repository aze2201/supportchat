(window.webpackJsonpLiveHelperChat=window.webpackJsonpLiveHelperChat||[]).push([[7],{33:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.screenShare=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params={},this.attributes=null,this.chatEvents=null,this.isSharing=!1,this.sharemode="chat",this.sharehash=null,this.cobrowser=null}return n(e,[{key:"startCoBrowse",value:function(e){var t=this;if(void 0===r)var r=!1;this.isSharing=!0,this.cobrowser=new LHCCoBrowser({formsenabled:r,chat_hash:this.sharehash,event_emitter:this.attributes.eventEmitter,nodejssettings:e.nodejssettings,nodejsenabled:e.nodejsenabled,trans:e.trans,url:e.url+"/(hash)/"+this.sharehash+"/?url="+encodeURIComponent(location.href.match(/^(.*\/)[^\/]*$/)[1])}),this.cobrowser.startMirroring();var n=function(e){t.cobrowser&&t.cobrowser.handleMessage(e.split(":"))};this.attributes.eventEmitter.addListener("screenshareCommand",n),this.attributes.eventEmitter.addOnceListener("finishScreenSharing",(function(e){s.helperFunctions.removeById("lhc_status_mirror"),t.attributes.storageHandler.removeSessionStorage(t.attributes.prefixStorage+"_screenshare"),t.isSharing=!1;var r=document.getElementsByTagName("head")[0],o=document.createElement("script");encodeURIComponent(window.location.href.substring(window.location.protocol.length));o.setAttribute("id","lhc_finish_shr"),o.setAttribute("type","text/javascript"),o.setAttribute("src",t.attributes.LHC_API.args.lhc_base_url+"/cobrowse/finishsession/(sharemode)/chat/(hash)/"+t.sharehash),r.appendChild(o),t.cobrowser=null,t.attributes.eventEmitter.removeListener("screenshareCommand",n)})),this.attributes.storageHandler.setSessionStorage(this.attributes.prefixStorage+"_screenshare",1)}},{key:"setParams",value:function(e,t,r){var n=this;this.params=e,this.attributes=t,this.chatEvents=r;var o=this.attributes.userSession.getSessionAttributes();this.sharehash=o.id+"_"+o.hash,0==this.isSharing&&s.helperFunctions.makeRequest(this.attributes.LHC_API.args.lhc_base_url+"/widgetrestapi/screensharesettings",{},(function(e){if(n.params.auto_start||1==e.auto_share)n.initCoBrowsing(e);else{n.addCss(".lhc-modal {display: none; position: fixed; z-index: 1000001 !important;padding-top: 100px;left: 0;top: 0;  width: 100%;height: 100%; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4); }.lhc-modal-content {background-color: #fefefe; margin: auto; padding: 20px; border: 1px solid #888; width: 60%;border-radius:5px; }#lhc-close { color: #aaaaaa;    float: right;  font-size: 28px;    font-weight: bold;  }#lhc-close:hover,#lhc-close:focus {color: #000; text-decoration: none; cursor: pointer;}"),n.appendHTML('<div id="lhc-co-browsing-modal" style="display: block" class="lhc-modal"><div class="lhc-modal-content"><span id="lhc-close">&times;</span><p style="text-align: center"><button id="lhc-start-share-session" style="background-color: #4CAF50;  border: none;  color: white;  padding: 7px 16px;  text-align: center;border-radius:5px;  text-decoration: none;  display: inline-block;  font-size: 16px;  margin: 4px 2px;  cursor: pointer;">'+e.trans.start_share+'</button><button id="lhc-deny-share-session" style="background-color: #d2404a;  border: none;  color: white;  padding: 7px 16px;  text-align: center;border-radius:5px;  text-decoration: none;  display: inline-block;  font-size: 16px;  margin: 4px 2px;  cursor: pointer;">'+e.trans.deny+"</button></p></div></div>");var t=document.getElementById("lhc-close"),r=document.getElementById("lhc-deny-share-session"),s=document.getElementById("lhc-co-browsing-modal");r.onclick=t.onclick=function(){n.removeById("lhc-co-browsing-modal")},window.addEventListener("click",(function(e){e.target==s&&n.removeById("lhc-co-browsing-modal")})),document.getElementById("lhc-start-share-session").onclick=function(){n.removeById("lhc-co-browsing-modal"),n.initCoBrowsing(e)}}}))}},{key:"removeById",value:function(e){var t=null;return!!(t=document.getElementById(e))&&t.parentNode.removeChild(t)}},{key:"appendHTML",value:function(e){var t=document.createDocumentFragment(),r=document.createElement("div");for(r.innerHTML=e;r.firstChild;)t.appendChild(r.firstChild);document.body.insertBefore(t,document.body.childNodes[0])}},{key:"addCss",value:function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("style");if(r.type="text/css",r.styleSheet)r.styleSheet.cssText=e;else{var n=document.createTextNode(e);r.appendChild(n)}t.appendChild(r)}},{key:"initCoBrowsing",value:function(e){var t=this;if("undefined"==typeof TreeMirror){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e.cobrowser),r.appendChild(n),n.onreadystatechange=n.onload=function(){t.startCoBrowse(e)}}else this.startCoBrowse(e)}}]),e}());t.screenShare=o}}]);
//# sourceMappingURL=a77d7283e733bea17cce.js.map