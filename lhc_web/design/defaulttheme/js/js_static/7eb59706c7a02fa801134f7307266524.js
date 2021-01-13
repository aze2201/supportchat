
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;function r(t){var n=this,i=!1;return e(this).one(s.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||s.triggerTransitionEnd(n)}),t),this}var s={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),r=parseFloat(i);return o||r?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&s.isElement(r)?"element":null===(l=r)||"undefined"==typeof l?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var l},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?s.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};s.jQueryDetection(),e.fn.emulateTransitionEnd=r,e.event.special[s.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var a="alert",l=e.fn[a],c=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=s.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=s.getTransitionDurationFromElement(t);e(t).one(s.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',c._handleDismiss(new c)),e.fn[a]=c._jQueryInterface,e.fn[a].Constructor=c,e.fn[a].noConflict=function(){return e.fn[a]=l,c._jQueryInterface};var h=e.fn.button,u=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var r=i.querySelector(".active");r&&e(r).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();("LABEL"!==i.tagName||o&&"checkbox"!==o.type)&&u._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var r=0,s=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=u._jQueryInterface,e.fn.button.Constructor=u,e.fn.button.noConflict=function(){return e.fn.button=h,u._jQueryInterface};var f="carousel",d=".bs.carousel",p=e.fn[f],m={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},g={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},_={TOUCH:"touch",PEN:"pen"},v=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(d),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=o({},m,t),s.typeCheckConfig(f,t,g),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&_[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&_[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+("prev"===t?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),r=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(r),r},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,r,a=this,l=this._element.querySelector(".active.carousel-item"),c=this._getItemIndex(l),h=n||l&&this._getItemByDirection(t,l),u=this._getItemIndex(h),f=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",r="left"):(i="carousel-item-right",o="carousel-item-prev",r="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,r).isDefaultPrevented()&&l&&h){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(h);var d=e.Event("slid.bs.carousel",{relatedTarget:h,direction:r,from:c,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),s.reflow(h),e(l).addClass(i),e(h).addClass(i);var p=parseInt(h.getAttribute("data-interval"),10);p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval;var m=s.getTransitionDurationFromElement(l);e(l).one(s.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(l).removeClass("active "+o+" "+i),a._isSliding=!1,setTimeout((function(){return e(a._element).trigger(d)}),0)})).emulateTransitionEnd(m)}else e(l).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(d);f&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),r=o({},m,e(this).data());"object"==typeof n&&(r=o({},r,n));var s="string"==typeof n?n:r.slide;if(i||(i=new t(this,r),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else r.interval&&r.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=s.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass("carousel")){var a=o({},e(r).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),t._jQueryInterface.call(e(r),a),l&&e(r).data("bs.carousel").to(l),n.preventDefault()}}},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return m}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",v._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);v._jQueryInterface.call(o,o.data())}})),e.fn[f]=v._jQueryInterface,e.fn[f].Constructor=v,e.fn[f].noConflict=function(){return e.fn[f]=p,v._jQueryInterface};var b="collapse",y=e.fn[b],w={toggle:!0,parent:""},E={toggle:"boolean",parent:"(string|element)"},T=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var r=n[i],a=s.getSelectorFromElement(r),l=[].slice.call(document.querySelectorAll(a)).filter((function(e){return e===t}));null!==a&&l.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var r=e.Event("show.bs.collapse");if(e(this._element).trigger(r),!r.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var a=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[a]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var l="scroll"+(a[0].toUpperCase()+a.slice(1)),c=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(c),this._element.style[a]=this._element[l]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",s.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],l=s.getSelectorFromElement(a);if(null!==l)e([].slice.call(document.querySelectorAll(l))).hasClass("show")||e(a).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var c=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(c)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=o({},w,t)).toggle=Boolean(t.toggle),s.typeCheckConfig(b,t,E),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;s.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(n.querySelectorAll(o));return e(r).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=s.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),r=i.data("bs.collapse"),s=o({},w,i.data(),"object"==typeof n&&n?n:{});if(!r&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),r||(r=new t(this,s),i.data("bs.collapse",r)),"string"==typeof n){if("undefined"==typeof r[n])throw new TypeError('No method named "'+n+'"');r[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return w}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=s.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();T._jQueryInterface.call(t,i)}))})),e.fn[b]=T._jQueryInterface,e.fn[b].Constructor=T,e.fn[b].noConflict=function(){return e.fn[b]=y,T._jQueryInterface};var C="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,S=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(C&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();var D=C&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),S))}};function N(t){return t&&"[object Function]"==={}.toString.call(t)}function k(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function A(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function I(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=k(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:I(A(t))}function O(t){return t&&t.referenceNode?t.referenceNode:t}var x=C&&!(!window.MSInputMethodContext||!document.documentMode),j=C&&/MSIE 10/.test(navigator.userAgent);function L(t){return 11===t?x:10===t?j:x||j}function P(t){if(!t)return document.documentElement;for(var e=L(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===k(n,"position")?P(n):n:t?t.ownerDocument.documentElement:document.documentElement}function F(t){return null!==t.parentNode?F(t.parentNode):t}function R(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&P(s.firstElementChild)!==s?P(l):l;var c=F(t);return c.host?R(c.host,e):R(t,F(e).host)}function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=H(e,"top"),o=H(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function B(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function q(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],L(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function Q(t){var e=t.body,n=t.documentElement,i=L(10)&&getComputedStyle(n);return{height:q("Height",e,n,i),width:q("Width",e,n,i)}}var W=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),V=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function z(t){return Y({},t,{right:t.left+t.width,bottom:t.top+t.height})}function X(t){var e={};try{if(L(10)){e=t.getBoundingClientRect();var n=H(t,"top"),i=H(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?Q(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var h=k(t);l-=B(h,"x"),c-=B(h,"y"),o.width-=l,o.height-=c}return z(o)}function K(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=L(10),o="HTML"===e.nodeName,r=X(t),s=X(e),a=I(t),l=k(e),c=parseFloat(l.borderTopWidth),h=parseFloat(l.borderLeftWidth);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var u=z({top:r.top-s.top-c,left:r.left-s.left-h,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!i&&o){var f=parseFloat(l.marginTop),d=parseFloat(l.marginLeft);u.top-=c-f,u.bottom-=c-f,u.left-=h-d,u.right-=h-d,u.marginTop=f,u.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(u=M(u,e)),u}function G(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=K(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:H(n),a=e?0:H(n,"left"),l={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r};return z(l)}function $(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===k(t,"position"))return!0;var n=A(t);return!!n&&$(n)}function J(t){if(!t||!t.parentElement||L())return document.documentElement;for(var e=t.parentElement;e&&"none"===k(e,"transform");)e=e.parentElement;return e||document.documentElement}function Z(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?J(t):R(t,O(e));if("viewport"===i)r=G(s,o);else{var a=void 0;"scrollParent"===i?"BODY"===(a=I(A(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=K(a,s,o);if("HTML"!==a.nodeName||$(s))r=l;else{var c=Q(t.ownerDocument),h=c.height,u=c.width;r.top+=l.top-l.marginTop,r.bottom=h+l.top,r.left+=l.left-l.marginLeft,r.right=u+l.left}}var f="number"==typeof(n=n||0);return r.left+=f?n:n.left||0,r.top+=f?n:n.top||0,r.right-=f?n:n.right||0,r.bottom-=f?n:n.bottom||0,r}function tt(t){return t.width*t.height}function et(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Z(n,i,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map((function(t){return Y({key:t},a[t],{area:tt(a[t])})})).sort((function(t,e){return e.area-t.area})),c=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),h=c.length>0?c[0].key:l[0].key,u=t.split("-")[1];return h+(u?"-"+u:"")}function nt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?J(e):R(e,O(n));return K(n,o,i)}function it(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function ot(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function rt(t,e,n){n=n.split("-")[0];var i=it(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-i[l]/2,o[a]=n===a?e[a]-i[c]:e[ot(a)],o}function st(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function at(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var i=st(t,(function(t){return t[e]===n}));return t.indexOf(i)}(t,"name",n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&N(n)&&(e.offsets.popper=z(e.offsets.popper),e.offsets.reference=z(e.offsets.reference),e=n(e,t))})),e}function lt(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=nt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=et(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=rt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=at(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function ct(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}function ht(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function ut(){return this.state.isDestroyed=!0,ct(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ht("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function ft(t){var e=t.ownerDocument;return e?e.defaultView:window}function dt(t,e,n,i){n.updateBound=i,ft(t).addEventListener("resize",n.updateBound,{passive:!0});var o=I(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),r||t(I(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function pt(){this.state.eventsEnabled||(this.state=dt(this.reference,this.options,this.state,this.scheduleUpdate))}function mt(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ft(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function gt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function _t(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&gt(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var vt=C&&/Firefox/i.test(navigator.userAgent);function bt(t,e,n){var i=st(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var yt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],wt=yt.slice(3);function Et(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=wt.indexOf(t),i=wt.slice(n+1).concat(wt.slice(0,n));return e?i.reverse():i}var Tt="flip",Ct="clockwise",St="counterclockwise";function Dt(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=s.indexOf(st(s,(function(t){return-1!==t.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(c=c.map((function(t,i){var o=(1===i?!r:r)?"height":"width",s=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return z(a)[e]/100*r}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){gt(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}var Nt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:V({},l,r[l]),end:V({},l,r[l]+r[c]-s[c])};t.offsets.popper=Y({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=gt(+n)?[+n,0]:Dt(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||P(t.instance.popper);t.instance.reference===n&&(n=P(n));var i=ht("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[i];o.top="",o.left="",o[i]="";var l=Z(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=s,o[i]=a,e.boundaries=l;var c=e.priority,h=t.offsets.popper,u={primary:function(t){var n=h[t];return h[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(h[t],l[t])),V({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=h[n];return h[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(h[n],l[t]-("right"===t?h.width:h.height))),V({},n,i)}};return c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";h=Y({},h,u[e](t))})),t.offsets.popper=h,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(t.offsets.popper[l]=r(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!bt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=it(i)[c];a[d]-p<s[u]&&(t.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(t.offsets.popper[u]+=a[u]+p-s[d]),t.offsets.popper=z(t.offsets.popper);var m=a[u]+a[c]/2-p/2,g=k(t.instance.popper),_=parseFloat(g["margin"+h]),v=parseFloat(g["border"+h+"Width"]),b=m-t.offsets.popper[u]-_-v;return b=Math.max(Math.min(s[c]-p,b),0),t.arrowElement=i,t.offsets.arrow=(V(n={},u,Math.round(b)),V(n,f,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(ct(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=Z(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=ot(i),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case Tt:s=[i,o];break;case Ct:s=Et(i);break;case St:s=Et(i,!0);break;default:s=e.behavior}return s.forEach((function(a,l){if(i!==a||s.length===l+1)return t;i=t.placement.split("-")[0],o=ot(i);var c=t.offsets.popper,h=t.offsets.reference,u=Math.floor,f="left"===i&&u(c.right)>u(h.left)||"right"===i&&u(c.left)<u(h.right)||"top"===i&&u(c.bottom)>u(h.top)||"bottom"===i&&u(c.top)<u(h.bottom),d=u(c.left)<u(n.left),p=u(c.right)>u(n.right),m=u(c.top)<u(n.top),g=u(c.bottom)>u(n.bottom),_="left"===i&&d||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===r&&d||v&&"end"===r&&p||!v&&"start"===r&&m||!v&&"end"===r&&g),y=!!e.flipVariationsByContent&&(v&&"start"===r&&p||v&&"end"===r&&d||!v&&"start"===r&&g||!v&&"end"===r&&m),w=b||y;(f||_||w)&&(t.flipped=!0,(f||_)&&(i=s[l+1]),w&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=Y({},t.offsets.popper,rt(t.instance.popper,t.offsets.reference,t.placement)),t=at(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=ot(e),t.offsets.popper=z(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!bt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=st(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=st(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:e.gpuAcceleration,a=P(t.instance.popper),l=X(a),c={position:o.position},h=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,s=Math.floor,a=function(t){return t},l=r(o.width),c=r(i.width),h=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),f=e?h||u||l%2==c%2?r:s:a,d=e?r:a;return{left:f(l%2==1&&c%2==1&&!u&&e?i.left-1:i.left),top:d(i.top),bottom:d(i.bottom),right:f(i.right)}}(t,window.devicePixelRatio<2||!vt),u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=ht("transform"),p=void 0,m=void 0;if(m="bottom"===u?"HTML"===a.nodeName?-a.clientHeight+h.bottom:-l.height+h.bottom:h.top,p="right"===f?"HTML"===a.nodeName?-a.clientWidth+h.right:-l.width+h.right:h.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[u]=0,c[f]=0,c.willChange="transform";else{var g="bottom"===u?-1:1,_="right"===f?-1:1;c[u]=m*g,c[f]=p*_,c.willChange=u+", "+f}var v={"x-placement":t.placement};return t.attributes=Y({},v,t.attributes),t.styles=Y({},c,t.styles),t.arrowStyles=Y({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return _t(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&_t(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=nt(o,e,t,n.positionFixed),s=et(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),_t(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},kt=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};W(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=D(this.update.bind(this)),this.options=Y({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(Y({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=Y({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return Y({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&N(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return U(t,[{key:"update",value:function(){return lt.call(this)}},{key:"destroy",value:function(){return ut.call(this)}},{key:"enableEventListeners",value:function(){return pt.call(this)}},{key:"disableEventListeners",value:function(){return mt.call(this)}}]),t}();kt.Utils=("undefined"!=typeof window?window:global).PopperUtils,kt.placements=yt,kt.Defaults=Nt;var At="dropdown",It=e.fn[At],Ot=new RegExp("38|40|27"),xt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},jt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Lt=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var n=t.prototype;return n.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},n.show=function(n){if(void 0===n&&(n=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var i={relatedTarget:this._element},o=e.Event("show.bs.dropdown",i),r=t._getParentFromElement(this._element);if(e(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&n){if("undefined"==typeof kt)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:s.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new kt(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",i))}}},n.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},n.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},n.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},n._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},n._getConfig=function(t){return t=o({},this.constructor.Default,e(this._element).data(),t),s.typeCheckConfig(At,t,this.constructor.DefaultType),t},n._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},n._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},n._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},n._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},n._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),o({},t,this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,r=i.length;o<r;o++){var s=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(s).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(s,n.target))){var h=e.Event("hide.bs.dropdown",l);e(s).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=s.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!Ot.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var r=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==r.length){var s=r.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<r.length-1&&s++,s<0&&(s=0),r[s].focus()}}}},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return xt}},{key:"DefaultType",get:function(){return jt}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',Lt._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",Lt._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",Lt._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),Lt._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[At]=Lt._jQueryInterface,e.fn[At].Constructor=Lt,e.fn[At].noConflict=function(){return e.fn[At]=It,Lt._jQueryInterface};var Pt=e.fn.modal,Ft={backdrop:!0,keyboard:!0,focus:!0,show:!0},Rt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ht=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var r=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=o({},Ft,t),s.typeCheckConfig("modal",t,Rt),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;var i=this._element.scrollHeight>document.documentElement.clientHeight;i||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var o=s.getTransitionDurationFromElement(this._dialog);e(this._element).off(s.TRANSITION_END),e(this._element).one(s.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),i||e(t._element).one(s.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&s.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var r=e.Event("shown.bs.modal",{relatedTarget:t}),a=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};if(i){var l=s.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(s.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&s.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var r=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var a=s.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(s.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,r=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,r=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var r=e(this).data("bs.modal"),s=o({},Ft,e(this).data(),"object"==typeof n&&n?n:{});if(r||(r=new t(this,s),e(this).data("bs.modal",r)),"string"==typeof n){if("undefined"==typeof r[n])throw new TypeError('No method named "'+n+'"');r[n](i)}else s.show&&r.show(i)}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return Ft}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,r=s.getSelectorFromElement(this);r&&(n=document.querySelector(r));var a=e(n).data("bs.modal")?"toggle":o({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var l=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||l.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));Ht._jQueryInterface.call(e(n),a,this)})),e.fn.modal=Ht._jQueryInterface,e.fn.modal.Constructor=Ht,e.fn.modal.noConflict=function(){return e.fn.modal=Pt,Ht._jQueryInterface};var Mt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Bt={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},qt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Qt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Wt(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),s=function(t,n){var i=r[t],s=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[s]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Mt.indexOf(n)||Boolean(t.nodeValue.match(qt)||t.nodeValue.match(Qt));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=r.length;a<l;a++)s(a);return i.body.innerHTML}var Ut="tooltip",Vt=e.fn[Ut],Yt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),zt=["sanitize","whiteList","sanitizeFn"],Xt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Kt={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Gt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Bt,popperConfig:null},$t={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Jt=function(){function t(t,e){if("undefined"==typeof kt)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var n=t.prototype;return n.enable=function(){this._isEnabled=!0},n.disable=function(){this._isEnabled=!1},n.toggleEnabled=function(){this._isEnabled=!this._isEnabled},n.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},n.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},n.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var n=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n);var i=s.findShadowRoot(this.element),o=e.contains(null!==i?i:this.element.ownerDocument.documentElement,this.element);if(n.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=s.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,c=this._getAttachment(l);this.addAttachmentClass(c);var h=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(h),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new kt(this.element,r,this._getPopperConfig(c)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var u=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=s.getTransitionDurationFromElement(this.tip);e(this.tip).one(s.TRANSITION_END,u).emulateTransitionEnd(f)}else u()}},n.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),r=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var a=s.getTransitionDurationFromElement(i);e(i).one(s.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},n.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},n.isWithContent=function(){return Boolean(this.getTitle())},n.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},n.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},n.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},n.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=Wt(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},n.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},n._getPopperConfig=function(t){var e=this;return o({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},n._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=o({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},n._getContainer=function(){return!1===this.config.container?document.body:s.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},n._getAttachment=function(t){return Kt[t.toUpperCase()]},n._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},n._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},n._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},n._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},n._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},n._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==zt.indexOf(t)&&delete n[t]})),"number"==typeof(t=o({},this.constructor.Default,n,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),s.typeCheckConfig(Ut,t,this.constructor.DefaultType),t.sanitize&&(t.template=Wt(t.template,t.whiteList,t.sanitizeFn)),t},n._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},n._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Yt);null!==n&&n.length&&t.removeClass(n.join(""))},n._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},n._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return Gt}},{key:"NAME",get:function(){return Ut}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return $t}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Xt}}]),t}();e.fn[Ut]=Jt._jQueryInterface,e.fn[Ut].Constructor=Jt,e.fn[Ut].noConflict=function(){return e.fn[Ut]=Vt,Jt._jQueryInterface};var Zt="popover",te=e.fn[Zt],ee=new RegExp("(^|\\s)bs-popover\\S+","g"),ne=o({},Jt.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ie=o({},Jt.DefaultType,{content:"(string|element|function)"}),oe={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},re=function(t){var n,o;function r(){return t.apply(this,arguments)||this}o=t,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var s=r.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},s.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},s.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(ee);null!==n&&n.length>0&&t.removeClass(n.join(""))},r._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new r(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},i(r,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return ne}},{key:"NAME",get:function(){return Zt}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return oe}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return ie}}]),r}(Jt);e.fn[Zt]=re._jQueryInterface,e.fn[Zt].Constructor=re,e.fn[Zt].noConflict=function(){return e.fn[Zt]=te,re._jQueryInterface};var se="scrollspy",ae=e.fn[se],le={offset:10,method:"auto",target:""},ce={offset:"number",method:"string",target:"(string|element)"},he=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,r=s.getSelectorFromElement(t);if(r&&(n=document.querySelector(r)),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[i]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=o({},le,"object"==typeof t&&t?t:{})).target&&s.isElement(t.target)){var n=e(t.target).attr("id");n||(n=s.getUID(se),e(t.target).attr("id",n)),t.target="#"+n}return s.typeCheckConfig(se,t,ce),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"Default",get:function(){return le}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);he._jQueryInterface.call(i,i.data())}})),e.fn[se]=he._jQueryInterface,e.fn[se].Constructor=he,e.fn[se].noConflict=function(){return e.fn[se]=ae,he._jQueryInterface};var ue=e.fn.tab,fe=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],r=s.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(a)))[i.length-1]}var l=e.Event("hide.bs.tab",{relatedTarget:this._element}),c=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(l),e(this._element).trigger(c),!c.isDefaultPrevented()&&!l.isDefaultPrevented()){r&&(n=document.querySelector(r)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,r=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],a=i&&r&&e(r).hasClass("fade"),l=function(){return o._transitionComplete(t,r,i)};if(r&&a){var c=s.getTransitionDurationFromElement(r);e(r).removeClass("show").one(s.TRANSITION_END,l).emulateTransitionEnd(c)}else l()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),s.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var r=e(t).closest(".dropdown")[0];if(r){var a=[].slice.call(r.querySelectorAll(".dropdown-toggle"));e(a).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),fe._jQueryInterface.call(e(this),"show")})),e.fn.tab=fe._jQueryInterface,e.fn.tab.Constructor=fe,e.fn.tab.noConflict=function(){return e.fn.tab=ue,fe._jQueryInterface};var de=e.fn.toast,pe={animation:"boolean",autohide:"boolean",delay:"number"},me={animation:!0,autohide:!0,delay:500},ge=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),s.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=o({},me,e(this._element).data(),"object"==typeof t&&t?t:{}),s.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=s.getTransitionDurationFromElement(this._element);e(this._element).one(s.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},n._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},i(t,null,[{key:"VERSION",get:function(){return"4.5.2"}},{key:"DefaultType",get:function(){return pe}},{key:"Default",get:function(){return me}}]),t}();e.fn.toast=ge._jQueryInterface,e.fn.toast.Constructor=ge,e.fn.toast.noConflict=function(){return e.fn.toast=de,ge._jQueryInterface},t.Alert=c,t.Button=u,t.Carousel=v,t.Collapse=T,t.Dropdown=Lt,t.Modal=Ht,t.Popover=re,t.Scrollspy=he,t.Tab=fe,t.Toast=ge,t.Tooltip=Jt,t.Util=s,Object.defineProperty(t,"__esModule",{value:!0})}));
(function(e,i){if(typeof define=="function"&&define.amd){define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("jquery"))}else{e.jQueryBridget=i(e,e.jQuery)}})(window,function t(e,r){"use strict";var s=Array.prototype.slice;var i=e.console;var f=typeof i=="undefined"?function(){}:function(t){i.error(t)};function n(h,o,d){d=d||r||e.jQuery;if(!d){return}if(!o.prototype.option){o.prototype.option=function(t){if(!d.isPlainObject(t)){return}this.options=d.extend(true,this.options,t)}}d.fn[h]=function(t){if(typeof t=="string"){var e=s.call(arguments,1);return i(this,t,e)}n(this,t);return this};function i(t,r,s){var a;var u="$()."+h+'("'+r+'")';t.each(function(t,e){var i=d.data(e,h);if(!i){f(h+" not initialized. Cannot call methods, i.e. "+u);return}var n=i[r];if(!n||r.charAt(0)=="_"){f(u+" is not a valid method");return}var o=n.apply(i,s);a=a===undefined?o:a});return a!==undefined?a:t}function n(t,n){t.each(function(t,e){var i=d.data(e,h);if(i){i.option(n);i._init()}else{i=new o(e,n);d.data(e,h,i)}})}a(d)}function a(t){if(!t||t&&t.bridget){return}t.bridget=n}a(r||e.jQuery);return n});
(function(t,e){"use strict";if(typeof define=="function"&&define.amd){define("get-size/get-size",[],function(){return e()})}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.getSize=e()}})(window,function t(){"use strict";function m(t){var e=parseFloat(t);var i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}var i=typeof console=="undefined"?e:function(t){console.error(t)};var y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];var b=y.length;function E(){var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var e=0;e<b;e++){var i=y[e];t[i]=0}return t}function _(t){var e=getComputedStyle(t);if(!e){i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1")}return e}var n=false;var x;function P(){if(n){return}n=true;var t=document.createElement("div");t.style.width="200px";t.style.padding="1px 2px 3px 4px";t.style.borderStyle="solid";t.style.borderWidth="1px 2px 3px 4px";t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=_(t);o.isBoxSizeOuter=x=m(i.width)==200;e.removeChild(t)}function o(t){P();if(typeof t=="string"){t=document.querySelector(t)}if(!t||typeof t!="object"||!t.nodeType){return}var e=_(t);if(e.display=="none"){return E()}var i={};i.width=t.offsetWidth;i.height=t.offsetHeight;var n=i.isBorderBox=e.boxSizing=="border-box";for(var o=0;o<b;o++){var r=y[o];var s=e[r];var a=parseFloat(s);i[r]=!isNaN(a)?a:0}var u=i.paddingLeft+i.paddingRight;var h=i.paddingTop+i.paddingBottom;var d=i.marginLeft+i.marginRight;var f=i.marginTop+i.marginBottom;var p=i.borderLeftWidth+i.borderRightWidth;var c=i.borderTopWidth+i.borderBottomWidth;var v=n&&x;var l=m(e.width);if(l!==false){i.width=l+(v?0:u+p)}var g=m(e.height);if(g!==false){i.height=g+(v?0:h+c)}i.innerWidth=i.width-(u+p);i.innerHeight=i.height-(h+c);i.outerWidth=i.width+d;i.outerHeight=i.height+f;return i}return o});(function(t,e){if(typeof define=="function"&&define.amd){define("ev-emitter/ev-emitter",e)}else if(typeof module=="object"&&module.exports){module.exports=e()}else{t.EvEmitter=e()}})(typeof window!="undefined"?window:this,function(){function t(){}var e=t.prototype;e.on=function(t,e){if(!t||!e){return}var i=this._events=this._events||{};var n=i[t]=i[t]||[];if(n.indexOf(e)==-1){n.push(e)}return this};e.once=function(t,e){if(!t||!e){return}this.on(t,e);var i=this._onceEvents=this._onceEvents||{};var n=i[t]=i[t]||{};n[e]=true;return this};e.off=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}var n=i.indexOf(e);if(n!=-1){i.splice(n,1)}return this};e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(!i||!i.length){return}i=i.slice(0);e=e||[];var n=this._onceEvents&&this._onceEvents[t];for(var o=0;o<i.length;o++){var r=i[o];var s=n&&n[r];if(s){this.off(t,r);delete n[r]}r.apply(this,e)}return this};e.allOff=function(){delete this._events;delete this._onceEvents};return t});
(function(e,i){if(typeof define=="function"&&define.amd){define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("ev-emitter"))}else{e.Unipointer=i(e,e.EvEmitter)}})(window,function t(o,e){function i(){}function n(){}var r=n.prototype=Object.create(e.prototype);r.bindStartEvent=function(t){this._bindStartEvent(t,true)};r.unbindStartEvent=function(t){this._bindStartEvent(t,false)};r._bindStartEvent=function(t,e){e=e===undefined?true:e;var i=e?"addEventListener":"removeEventListener";var n="mousedown";if(o.PointerEvent){n="pointerdown"}else if("ontouchstart"in o){n="touchstart"}t[i](n,this)};r.handleEvent=function(t){var e="on"+t.type;if(this[e]){this[e](t)}};r.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier){return i}}};r.onmousedown=function(t){var e=t.button;if(e&&(e!==0&&e!==1)){return}this._pointerDown(t,t)};r.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])};r.onpointerdown=function(t){this._pointerDown(t,t)};r._pointerDown=function(t,e){if(t.button||this.isPointerDown){return}this.isPointerDown=true;this.pointerIdentifier=e.pointerId!==undefined?e.pointerId:e.identifier;this.pointerDown(t,e)};r.pointerDown=function(t,e){this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};r._bindPostStartEvents=function(t){if(!t){return}var e=s[t.type];e.forEach(function(t){o.addEventListener(t,this)},this);this._boundPointerEvents=e};r._unbindPostStartEvents=function(){if(!this._boundPointerEvents){return}this._boundPointerEvents.forEach(function(t){o.removeEventListener(t,this)},this);delete this._boundPointerEvents};r.onmousemove=function(t){this._pointerMove(t,t)};r.onpointermove=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerMove(t,t)}};r.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerMove(t,e)}};r._pointerMove=function(t,e){this.pointerMove(t,e)};r.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])};r.onmouseup=function(t){this._pointerUp(t,t)};r.onpointerup=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerUp(t,t)}};r.ontouchend=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerUp(t,e)}};r._pointerUp=function(t,e){this._pointerDone();this.pointerUp(t,e)};r.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])};r._pointerDone=function(){this._pointerReset();this._unbindPostStartEvents();this.pointerDone()};r._pointerReset=function(){this.isPointerDown=false;delete this.pointerIdentifier};r.pointerDone=i;r.onpointercancel=function(t){if(t.pointerId==this.pointerIdentifier){this._pointerCancel(t,t)}};r.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);if(e){this._pointerCancel(t,e)}};r._pointerCancel=function(t,e){this._pointerDone();this.pointerCancel(t,e)};r.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])};n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}};return n});
(function(e,i){if(typeof define=="function"&&define.amd){define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)})}else if(typeof module=="object"&&module.exports){module.exports=i(e,require("unipointer"))}else{e.Unidragger=i(e,e.Unipointer)}})(window,function t(r,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(true)};n.unbindHandles=function(){this._bindHandles(false)};n._bindHandles=function(t){t=t===undefined?true:t;var e=t?"addEventListener":"removeEventListener";var i=t?this._touchActionValue:"";for(var n=0;n<this.handles.length;n++){var o=this.handles[n];this._bindStartEvent(o,t);o[e]("click",this);if(r.PointerEvent){o.style.touchAction=i}}};n._touchActionValue="none";n.pointerDown=function(t,e){var i=this.okayPointerDown(t);if(!i){return}this.pointerDownPointer=e;t.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(t);this.emitEvent("pointerDown",[t,e])};var o={TEXTAREA:true,INPUT:true,SELECT:true,OPTION:true};var s={radio:true,checkbox:true,button:true,submit:true,image:true,file:true};n.okayPointerDown=function(t){var e=o[t.target.nodeName];var i=s[t.target.type];var n=!e||i;if(!n){this._pointerReset()}return n};n.pointerDownBlur=function(){var t=document.activeElement;var e=t&&t.blur&&t!=document.body;if(e){t.blur()}};n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]);this._dragMove(t,e,i)};n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};if(!this.isDragging&&this.hasDragStarted(i)){this._dragStart(t,e)}return i};n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3};n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]);this._dragPointerUp(t,e)};n._dragPointerUp=function(t,e){if(this.isDragging){this._dragEnd(t,e)}else{this._staticClick(t,e)}};n._dragStart=function(t,e){this.isDragging=true;this.isPreventingClicks=true;this.dragStart(t,e)};n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])};n._dragMove=function(t,e,i){if(!this.isDragging){return}this.dragMove(t,e,i)};n.dragMove=function(t,e,i){t.preventDefault();this.emitEvent("dragMove",[t,e,i])};n._dragEnd=function(t,e){this.isDragging=false;setTimeout(function(){delete this.isPreventingClicks}.bind(this));this.dragEnd(t,e)};n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])};n.onclick=function(t){if(this.isPreventingClicks){t.preventDefault()}};n._staticClick=function(t,e){if(this.isIgnoringMouseUp&&t.type=="mouseup"){return}this.staticClick(t,e);if(t.type!="mouseup"){this.isIgnoringMouseUp=true;setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)}};n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])};i.getPointerPoint=e.getPointerPoint;return i});
(function(i,n){if(typeof define=="function"&&define.amd){define(["get-size/get-size","unidragger/unidragger"],function(t,e){return n(i,t,e)})}else if(typeof module=="object"&&module.exports){module.exports=n(i,require("get-size"),require("unidragger"))}else{i.Draggabilly=n(i,i.getSize,i.Unidragger)}})(window,function t(r,u,e){function i(t,e){for(var i in e){t[i]=e[i]}return t}function n(){}var o=r.jQuery;function s(t,e){this.element=typeof t=="string"?document.querySelector(t):t;if(o){this.$element=o(this.element)}this.options=i({},this.constructor.defaults);this.option(e);this._create()}var a=s.prototype=Object.create(e.prototype);s.defaults={};a.option=function(t){i(this.options,t)};var h={relative:true,absolute:true,fixed:true};a._create=function(){this.position={};this._getPosition();this.startPoint={x:0,y:0};this.dragPoint={x:0,y:0};this.startPosition=i({},this.position);var t=getComputedStyle(this.element);if(!h[t.position]){this.element.style.position="relative"}this.on("pointerMove",this.onPointerMove);this.on("pointerUp",this.onPointerUp);this.enable();this.setHandles()};a.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];this.bindHandles()};a.dispatchEvent=function(t,e,i){var n=[e].concat(i);this.emitEvent(t,n);this.dispatchJQueryEvent(t,e,i)};a.dispatchJQueryEvent=function(t,e,i){var n=r.jQuery;if(!n||!this.$element){return}var o=n.Event(e);o.type=t;this.$element.trigger(o,i)};a._getPosition=function(){var t=getComputedStyle(this.element);var e=this._getPositionCoord(t.left,"width");var i=this._getPositionCoord(t.top,"height");this.position.x=isNaN(e)?0:e;this.position.y=isNaN(i)?0:i;this._addTransformPosition(t)};a._getPositionCoord=function(t,e){if(t.indexOf("%")!=-1){var i=u(this.element.parentNode);return!i?0:parseFloat(t)/100*i[e]}return parseInt(t,10)};a._addTransformPosition=function(t){var e=t.transform;if(e.indexOf("matrix")!==0){return}var i=e.split(",");var n=e.indexOf("matrix3d")===0?12:4;var o=parseInt(i[n],10);var r=parseInt(i[n+1],10);this.position.x+=o;this.position.y+=r};a.onPointerDown=function(t,e){this.element.classList.add("is-pointer-down");this.dispatchJQueryEvent("pointerDown",t,[e])};a.pointerDown=function(t,e){var i=this.okayPointerDown(t);if(!i||!this.isEnabled){this._pointerReset();return}this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY};t.preventDefault();this.pointerDownBlur();this._bindPostStartEvents(t);this.element.classList.add("is-pointer-down");this.dispatchEvent("pointerDown",t,[e])};a.dragStart=function(t,e){if(!this.isEnabled){return}this._getPosition();this.measureContainment();this.startPosition.x=this.position.x;this.startPosition.y=this.position.y;this.setLeftTop();this.dragPoint.x=0;this.dragPoint.y=0;this.element.classList.add("is-dragging");this.dispatchEvent("dragStart",t,[e]);this.animate()};a.measureContainment=function(){var t=this.getContainer();if(!t){return}var e=u(this.element);var i=u(t);var n=this.element.getBoundingClientRect();var o=t.getBoundingClientRect();var r=i.borderLeftWidth+i.borderRightWidth;var s=i.borderTopWidth+i.borderBottomWidth;var a=this.relativeStartPosition={x:n.left-(o.left+i.borderLeftWidth),y:n.top-(o.top+i.borderTopWidth)};this.containSize={width:i.width-r-a.x-e.width,height:i.height-s-a.y-e.height}};a.getContainer=function(){var t=this.options.containment;if(!t){return}var e=t instanceof HTMLElement;if(e){return t}if(typeof t=="string"){return document.querySelector(t)}return this.element.parentNode};a.onPointerMove=function(t,e,i){this.dispatchJQueryEvent("pointerMove",t,[e,i])};a.dragMove=function(t,e,i){if(!this.isEnabled){return}var n=i.x;var o=i.y;var r=this.options.grid;var s=r&&r[0];var a=r&&r[1];n=d(n,s);o=d(o,a);n=this.containDrag("x",n,s);o=this.containDrag("y",o,a);n=this.options.axis=="y"?0:n;o=this.options.axis=="x"?0:o;this.position.x=this.startPosition.x+n;this.position.y=this.startPosition.y+o;this.dragPoint.x=n;this.dragPoint.y=o;this.dispatchEvent("dragMove",t,[e,i])};function d(t,e,i){i=i||"round";return e?Math[i](t/e)*e:t}a.containDrag=function(t,e,i){if(!this.options.containment){return e}var n=t=="x"?"width":"height";var o=this.relativeStartPosition[t];var r=d(-o,i,"ceil");var s=this.containSize[n];s=d(s,i,"floor");return Math.max(r,Math.min(s,e))};a.onPointerUp=function(t,e){this.element.classList.remove("is-pointer-down");this.dispatchJQueryEvent("pointerUp",t,[e])};a.dragEnd=function(t,e){if(!this.isEnabled){return}this.element.style.transform="";this.setLeftTop();this.element.classList.remove("is-dragging");this.dispatchEvent("dragEnd",t,[e])};a.animate=function(){if(!this.isDragging){return}this.positionDrag();var e=this;requestAnimationFrame(function t(){e.animate()})};a.setLeftTop=function(){this.element.style.left=this.position.x+"px";this.element.style.top=this.position.y+"px"};a.positionDrag=function(){this.element.style.transform="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"};a.staticClick=function(t,e){this.dispatchEvent("staticClick",t,[e])};a.setPosition=function(t,e){this.position.x=t;this.position.y=e;this.setLeftTop()};a.enable=function(){this.isEnabled=true};a.disable=function(){this.isEnabled=false;if(this.isDragging){this.dragEnd()}};a.destroy=function(){this.disable();this.element.style.transform="";this.element.style.left="";this.element.style.top="";this.element.style.position="";this.unbindHandles();if(this.$element){this.$element.removeData("draggabilly")}};a._init=n;if(o&&o.bridget){o.bridget("draggabilly",s)}return s});


;window.Modernizr=function(a,b,c){function t(a){i.cssText=a}function u(a,b){return t(prefixes.join(a+";")+(b||""))}function v(a,b){return typeof a===b}function w(a,b){return!!~(""+a).indexOf(b)}function x(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:v(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l={},m={},n={},o=[],p=o.slice,q,r={}.hasOwnProperty,s;!v(r,"undefined")&&!v(r.call,"undefined")?s=function(a,b){return r.call(a,b)}:s=function(a,b){return b in a&&v(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=p.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(p.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(p.call(arguments)))};return e}),l.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var y in l)s(l,y)&&(q=y.toLowerCase(),e[q]=l[y](),o.push((e[q]?"":"no-")+q));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)s(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},t(""),h=j=null,e._version=d,e}(this,this.document);
var lhcError = {
log : function(message, filename, lineNumber, stack, column) {
var e;
e = {};
e.message = message || "";
e.location = location && location.href ? location.href : "";
e.message += "\n" + window.navigator.userAgent;
e.file = filename || "";
e.line = lineNumber || "";
e.column = column || "";
e.stack = stack ? JSON.stringify(stack) : "";
e.stack = e.stack.replace(/(\r\n|\n|\r)/gm, "");
var xhr = new XMLHttpRequest();
xhr.open( "POST", WWW_DIR_JAVASCRIPT + '/audit/logjserror', true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send( "data=" + encodeURIComponent( JSON.stringify(e) ) );
}
}
window.addEventListener('error', function(e) {
if (lhcError && (e.filename.indexOf('js_static') !== -1 || e.filename.indexOf('compiledtemplates') !== -1 || e.filename.indexOf('defaulttheme') !== -1)) {
lhcError.log(e.message, e.filename, e.lineNumber || e.lineno, e.error.stack, e.colno);
}
})
try {
function csrfSafeMethod(method) {
return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
};
$.ajaxSetup({
crossDomain: false, // obviates need for sameOrigin test
cache: false,
beforeSend: function(xhr, settings) {
if (!csrfSafeMethod(settings.type)) {
xhr.setRequestHeader("X-CSRFToken", confLH.csrf_token);
}
}
});
$.postJSON = function(url, data, callback) {
return $.post(url, data, callback, "json");
};
var LHCCallbacks = {};
function lh(){
this.wwwDir = WWW_DIR_JAVASCRIPT;
this.addmsgurl = "chat/addmsgadmin/";
this.addmsgurluser = "chat/addmsguser/";
this.addmsgurluserchatbox = "chatbox/addmsguser/";
this.syncuser = "chat/syncuser/";
this.syncadmin = "chat/syncadmin/";
this.closechatadmin = "chat/closechatadmin/";
this.deletechatadmin = "chat/deletechatadmin/";
this.checkchatstatus = "chat/checkchatstatus/";
this.syncadmininterfaceurl = "chat/syncadmininterface/";
this.accepttransfer = "chat/accepttransfer/";
this.trasnsferuser = "chat/transferuser/";
this.userclosechaturl = "chat/userclosechat/";
this.disableremember = false;
this.operatorTyping = false;
this.forceBottomScroll = false;
this.appendSyncArgument = '';
this.nodeJsMode = false;
this.previous_chat_id = 0;
this.gmaps_loaded = false;
this.disableSync = false;
this.chat_id = null;
this.hash = null;
this.soundIsPlaying = false;
this.soundPlayedTimes = 0;
this.last_message_id = 0;
this.isSinchronizing = false;
this.isWidgetMode = false;
this.isEmbedMode = false;
this.syncroRequestSend = false;
this.currentMessageText = '';
this.setWidgetMode = function(status) {
this.isWidgetMode = status;
};
this.setEmbedMode = function(status) {
this.isEmbedMode = status;
};
this.setSynchronizationRequestSend = function(status)
{
this.syncroRequestSend = status;
};
this.setSyncUserURL = function(url) {
this.syncuser = url;
};
this.chatsSynchronising = [];
this.chatsSynchronisingMsg = [];
this.notificationsArray = [];
this.speechHandler = false;
this.underMessageAdd = false;
this.closeWindowOnChatCloseDelete = false;
this.userTimeout = false;
this.lastOnlineSyncTimeout = false;
this.setLastUserMessageID = function(message_id) {
this.last_message_id = message_id;
};
this.setChatID = function (chat_id){
this.chat_id = chat_id;
};
this.setwwwDir = function (wwwdir){
this.wwwDir = wwwdir;
};
this.setCloseWindowOnEvent = function (value)
{
this.closeWindowOnChatCloseDelete = value;
};
this.setDisableRemember = function (value)
{
this.disableremember = value;
};
this.setSynchronizationStatus = function(status)
{
this.underMessageAdd = status;
};
this.tabIconContent = 'face';
this.tabIconClass = 'icon-user-status material-icons icon-user-online';
this.audio = typeof window.Audio !== "undefined" ? new Audio() : null;
if (this.audio !== null) {
this.audio.autoplay = 'autoplay';
}
this.reloadTab = function(chat_id, tabs, nick)
{
$('#ntab-chat-'+chat_id).text(nick);
if ($('#CSChatMessage-'+chat_id).length != 0){
$('#CSChatMessage-'+chat_id).unbind('keydown', function(){});
$('#CSChatMessage-'+chat_id).unbind('keyup', function(){});
}
this.removeSynchroChat(chat_id);
this.removeBackgroundChat(chat_id);
this.hideNotification(chat_id);
var inst = this;
$.get(this.wwwDir +'chat/adminchat/'+chat_id+'/(remember)/true', function(data) {
$('#chat-id-'+chat_id).html(data);
$('#CSChatMessage-'+chat_id).focus();
inst.rememberTab(chat_id);
inst.addQuateHandler(chat_id);
inst.loadMainData(chat_id);
ee.emitEvent('chatTabLoaded', [chat_id]);
ee.emitEvent('chatStartTab', [chat_id, {name: nick, focus: true}]);
});
}
this.loadMainData = function(chat_id) {
$.getJSON(this.wwwDir + 'chat/loadmaindata/' + chat_id, { }, function(data) {
$.each(data.items, function( index, dataElement ) {
var el = $(dataElement.selector);
if (typeof dataElement.attr !== 'undefined') {
$.each(dataElement.attr, function( attr, data ) {
if (attr == 'text') {
el.text(data);
} else {
el.attr(attr,data);
}
});
}
if (typeof dataElement.action !== 'undefined') {
if (dataElement.action == 'hide') {
el.hide();
} else if(dataElement.action == 'show') {
el.show();
} else if(dataElement.action == 'remove') {
el.remove();
} else if(dataElement.action == 'event') {
ee.emitEvent(dataElement.event_name, dataElement.event_value);
} else if(dataElement.action == 'click') {
el.attr('auto-scroll',1);
el.click();
}
}
});
ee.emitEvent('mainChatDataLoaded', [chat_id, data]);
}).fail(function() {
});
}
this.getSelectedText = function () {
var text = '';
var selection;
if (window.getSelection) {
selection = window.getSelection();
text = selection.toString();
} else if (document.selection && document.selection.type !== 'Control') {
selection = document.selection.createRange();
text = selection.text;
}
return {
selection: selection,
text: text
};
}
this.popoverShown = false;
this.popoverShownNow = false
this.selection = null;
this.mouseContextMenu = function(e) {
if (e.which == 3 && typeof $(this).attr('id') !== 'undefined') {
$('.popover-copy').popover('dispose');
var selected = e.data.that.getSelectedText();
var hasSelection = false;
if (selected.text.length && (e.data.that.selection === null || e.data.that.selection.text !== selected.text)) {
hasSelection = true;
e.data.that.selection = selected;
}
var msgId = $(this).attr('id').replace('msg-','');
var isOwner = $(this).attr('data-op-id') == confLH.user_id;
var quoteParams = {
placement:'right',
trigger:'manual',
animation:false,
html:true,
container:'#chat-id-'+e.data.chat_id,
template : '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
content:function(){
return '<a href="#" id="copy-popover-'+e.data.chat_id+'" ><i class="material-icons">&#xE244;</i>'+confLH.transLation.quote+'</a>'+ (isOwner ? '<br/><a href="#" id="edit-popover-'+e.data.chat_id+'" ><i class="material-icons">edit</i>'+confLH.transLation.edit+'</a>' : '') + '<br/><a href="#" id="ask-help-popover-'+e.data.chat_id+'" ><i class="material-icons">supervisor_account</i>'+confLH.transLation.ask_help+'</a>' + (hasSelection ? '<br/><a href="#" id="copy-text-popover-'+e.data.chat_id+'" ><i class="material-icons">content_copy</i>'+confLH.transLation.copy+' (Ctrl+C)</a>' : '') + (!hasSelection ? '<br/><a href="#" id="copy-all-text-popover-'+e.data.chat_id+'" ><i class="material-icons">content_copy</i>'+confLH.transLation.copy+' (Ctrl+C)</a><br/><a href="#" id="copy-group-text-popover-'+e.data.chat_id+'" ><i class="material-icons">content_copy</i>'+confLH.transLation.copy_group+'</a>' : '');
}
}
var containerPopover = $('#messagesBlock-'+e.data.chat_id+' > #msg-'+msgId+' > .msg-body');
if (containerPopover.length == 0) return ;
ee.emitEvent('quoteActionRight', [quoteParams, e.data.chat_id, msgId]);
containerPopover.popover(quoteParams).popover('show').addClass('popover-copy');
$('#copy-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function(data){
data.msg && e.data.that.insertTextToMessageArea(e.data.chat_id, data.msg);
e.data.that.hidePopover();
});
});
$('#ask-help-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function(data){
if (!$('#private-chat-tab-link-'+e.data.chat_id).attr('private-loaded')) {
$('#private-chat-tab-link-'+e.data.chat_id).attr('private-loaded',true).click();
ee.emitEvent('privateChatStart', [e.data.chat_id,{'default_message':data.msg}]);
} else {
$('#private-chat-tab-link-'+e.data.chat_id).attr('private-loaded',true).click();
ee.emitEvent('groupChatPrefillMessage', [e.data.chat_id,data.msg]);
}
e.data.that.hidePopover();
});
});
!hasSelection && $('#copy-all-text-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId, function(data){
var txtdom = $('#CSChatMessage-'+e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(data.msg);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
});
!hasSelection && $('#copy-group-text-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/quotemessage/' + msgId +'/(type)/group', function(data){
var txtdom = $('#CSChatMessage-'+e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(data.msg);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
});
isOwner && $('#edit-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
$.getJSON(e.data.that.wwwDir + 'chat/editprevious/' + e.data.chat_id + '/' + msgId, function(data){
if (data.error == 'f') {
var textArea = $('#CSChatMessage-'+e.data.chat_id);
textArea.val(data.msg).attr('data-msgid',data.id).addClass('edit-mode');
$('#msg-'+data.id).addClass('edit-mode');
textArea.focus();
} else {
alert(data.error);
}
});
e.data.that.hidePopover();
});
hasSelection && $('#copy-text-popover-'+e.data.chat_id).click(function(event){
event.stopPropagation();
event.preventDefault();
var textToCopy = e.data.that.getSelectedTextPlain();
var txtdom = $('#CSChatMessage-'+e.data.chat_id);
var originalAreaText = txtdom.val();
txtdom.val(textToCopy);
txtdom.select();
document.execCommand("copy");
txtdom.val(originalAreaText);
e.data.that.hidePopover();
});
e.data.that.popoverShown = true;
e.data.that.popoverShownNow = false;
return false;
}
}
this.insertTextToMessageArea = function (chat_id, msg) {
var textArea = $('#CSChatMessage-'+chat_id);
var textAreaVal = textArea.val().replace(/^\s*\n/g, "");
textArea.val((textAreaVal != '' ? textAreaVal + '[quote]' + msg + '[/quote]' : '[quote]'+msg+'[/quote]')+"\n").focus();
var ta = textArea[0];
var maxrows = 30;
var lh = ta.clientHeight / ta.rows;
while (ta.scrollHeight > ta.clientHeight && !window.opera && ta.rows < maxrows) {
ta.style.overflow = 'hidden';
ta.rows += 1;
}
if (ta.scrollHeight > ta.clientHeight) ta.style.overflow = 'auto';
}
this.mouseClicked = function (e) {
selected = e.data.that.getSelectedText();
$('.popover-copy').popover('dispose');
if (selected.text.length && (e.data.that.selection === null || e.data.that.selection.text !== selected.text)) {
e.data.that.selection = selected;
var quoteParams = {
placement:'right',
trigger:'manual',
animation:false,
html:true,
container:'#chat-id-'+e.data.chat_id,
template : '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>',
content:function(){return '<a href="#" id="copy-popover-'+e.data.chat_id+'" ><i class="material-icons">&#xE244;</i>'+confLH.transLation.quote+'</a>'; }
}
var placement = typeof $(this).attr('id') !== 'undefined' ? '#messagesBlock-'+e.data.chat_id+' > #msg-'+$(this).attr('id').replace('msg-','')+' > .msg-body' : this;
var containerPopover = $(placement);
if (containerPopover.length == 0) return ;
ee.emitEvent('quoteAction', [quoteParams,e.data.chat_id]);
containerPopover.popover(quoteParams).popover('show').addClass('popover-copy');
$('#copy-popover-'+e.data.chat_id).click(function(){
lhinst.quateSelection(e.data.chat_id);
});
e.data.that.popoverShown = true;
e.data.that.popoverShownNow = true;
} else {
e.data.that.selection = null;
}
}
this.addQuateHandler = function(chat_id)
{
this.popoverShown = false;
$('#messagesBlock-'+chat_id+' > .message-row:not([qt])')
.on('mouseup',{chat_id:chat_id, that : this}, lhinst.mouseClicked)
.on('contextmenu', {chat_id:chat_id, that : this}, lhinst.mouseContextMenu).attr('qt',1);
}
this.getSelectedTextPlain = function() {
var textToPaste = this.selection.text.replace(/[\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA]/g,'');
textToPaste = textToPaste.replace(/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.*)/gm,'');
textToPaste = textToPaste.replace(/^[0-9]{2}:[0-9]{2}:[0-9]{2}(.*)/gm,'');
textToPaste = textToPaste.replace(/^\s*\n/gm, "");
textToPaste = textToPaste.replace(/^ /gm, "");
return textToPaste;
}
this.quateSelection = function (chat_id) {
$('.popover-copy').popover('dispose');
var textToPaste = this.getSelectedTextPlain();
window.textreplace = textToPaste;
this.insertTextToMessageArea(chat_id, textToPaste);
this.popoverShown = false;
};
this.hidePopover = function () {
if (this.popoverShownNow === true) {
this.popoverShownNow = false;
} else {
if (this.popoverShown === true) {
this.popoverShown = false;
$('.popover-copy').popover('dispose');
}
}
};
this.addTab = function(tabs, url, name, chat_id, focusTab, position) {
if (tabs.find('#chat-tab-link-'+chat_id).length > 0) {
return ;
}
var hideTabs = confLH.new_dashboard && confLH.hide_tabs ? ' d-none' : '';
var contentLi = '<li role="presentation" id="chat-tab-li-'+chat_id+'" class="nav-item'+hideTabs+'"><a class="nav-link" href="#chat-id-'+chat_id+'" id="chat-tab-link-'+chat_id+'" aria-controls="chat-id-'+chat_id+'" role="tab" data-toggle="tab"><i id="msg-send-status-'+chat_id+'" class="material-icons send-status-icon icon-user-online">send</i><i id="user-chat-status-'+chat_id+'" class="'+this.tabIconClass+'">'+this.tabIconContent+'</i><span class="ntab" id="ntab-chat-'+chat_id+'">' + name.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span><span onclick="return lhinst.removeDialogTab('+chat_id+',$(\'#tabs\'),true)" class="material-icons icon-close-chat">close</span></a></li>';
if (typeof position === 'undefined' || parseInt(position) == 0) {
tabs.find('> ul').append(contentLi);
} else {
tabs.find('> ul > li:eq('+ (position - 1)+')').after(contentLi);
};
$('#chat-tab-link-'+chat_id).click(function() {
lhinst.previous_chat_id > 0 && $('#unread-separator-'+lhinst.previous_chat_id).remove();
lhinst.previous_chat_id = chat_id;
setTimeout(function() {
$('#CSChatMessage-' + chat_id).focus();
},2);
var inst = $(this);
setTimeout(function(){
inst.find('.msg-nm').remove();
var scrollNeeded = false;
if (inst.hasClass('has-pm')) {
scrollNeeded = true;
inst.removeClass('has-pm');
}
if (scrollNeeded == true) {
$('#messagesBlock-'+chat_id).prop('scrollTop',$('#messagesBlock-'+chat_id).prop('scrollHeight'));
}
},500);
ee.emitEvent('chatTabClicked', [chat_id, inst]);
});
var hash = window.location.hash.replace('#/','#');
var inst = this;
$.get(url, function(data) {
if (data == '') {
inst.removeDialogTab(chat_id,tabs,true);
return;
}
if (typeof focusTab === 'undefined' || focusTab === true || hash == '#chat-id-'+chat_id){
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > #chat-tab-li-'+chat_id+' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane active" id="chat-id-'+chat_id+'"></div>');
window.location.hash = '#/chat-id-'+chat_id;
} else {
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane" id="chat-id-'+chat_id+'"></div>');
}
$('#chat-id-'+chat_id).html(data);
$('#CSChatMessage-'+chat_id).focus();
if (inst.disableremember == false) {
inst.rememberTab(chat_id);
}
inst.addQuateHandler(chat_id);
inst.loadMainData(chat_id);
ee.emitEvent('chatTabLoaded', [chat_id]);
});
};
this.rememberTab = function(chat_id) {
if (localStorage) {
try{
chat_id = parseInt(chat_id);
var achat_id = localStorage.getItem('achat_id');
var achat_id_array = new Array();
if (achat_id !== null) {
var achat_id_array = achat_id.split(',').map(Number);
}
if (achat_id_array.indexOf(chat_id) === -1) {
achat_id_array.push(chat_id);
}
localStorage.setItem('achat_id',achat_id_array.join(','));
} catch (e) {
console.log(e);
}
}
};
this.forgetChat = function (chat_id,listId) {
if (localStorage) {
try {
chat_id = parseInt(chat_id);
var achat_id = localStorage.getItem(listId);
var achat_id_array = new Array();
if (achat_id !== null) {
achat_id_array = achat_id.split(',').map(Number);
}
if (achat_id_array.indexOf(chat_id) !== -1){
achat_id_array.splice(achat_id_array.indexOf(chat_id), 1);
}
localStorage.setItem(listId,achat_id_array.join(','));
} catch (e) {
console.log(e);
}
}
};
this.attachTabNavigator = function() {
$('#tabs > ul.nav > li > a').click(function(){
$(this).find('.msg-nm').remove();
$(this).removeClass('has-pm');
});
};
this.holdAction = function(chat_id, inst) {
var textArea = $("#CSChatMessage-"+chat_id);
if (textArea.is("[readonly]")) {
return;
}
var _this  = this;
$.postJSON(this.wwwDir + 'chat/holdaction/' + chat_id, function(data) {
if (data.error == false) {
if (data.hold == true) {
inst.addClass('btn-outline-info');
} else {
inst.removeClass('btn-outline-info');
}
if (data.msg != '') {
$('#messagesBlock-'+chat_id).append(data.msg).scrollTop($("#messagesBlock-"+chat_id).prop("scrollHeight"));
}
_this.syncadmincall();
} else {
alert(data.msg);
}
});
},
this.copyContent = function(inst){
var textArea = document.createElement("textarea");
textArea.value = inst.attr('data-copy');
textArea.style.top = "0";
textArea.style.left = "0";
textArea.style.position = "fixed";
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try {
var successful = document.execCommand('copy');
} catch (err) {
alert('Oops, unable to copy');
}
document.body.removeChild(textArea);
inst.tooltip({
trigger: 'click',
placement: 'top'
});
function setTooltip(message) {
inst.tooltip('hide')
.attr('data-original-title', message)
.tooltip('show');
}
function hideTooltip() {
setTimeout(function() {
inst.tooltip('hide');
}, 1000);
}
setTooltip(inst.attr('data-success'));
hideTooltip();
},
this.copyMessages = function(inst) {
$('#chat-copy-messages').select();
document.execCommand("copy");
inst.tooltip({
trigger: 'click',
placement: 'top'
});
function setTooltip(message) {
inst.tooltip('hide')
.attr('data-original-title', message)
.tooltip('show');
}
function hideTooltip() {
setTimeout(function() {
inst.tooltip('hide');
}, 3000);
}
setTooltip(inst.attr('data-success'));
hideTooltip();
return false;
},
this.removeDialogTabGroup = function(chat_id, tabs)
{
ee.emitEvent('unloadGroupChat', [chat_id]);
var location = this.smartTabFocus(tabs, chat_id);
};
this.addGroupTab = function(tabs, name, chat_id, background) {
if (tabs.find('#chat-tab-link-'+chat_id).length > 0) {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > li#chat-tab-li-'+chat_id+' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content > #chat-id-'+chat_id).addClass('active');
ee.emitEvent('groupChatTabClicked', [chat_id]);
return ;
}
var contentLi = '<li role="presentation" id="chat-tab-li-'+chat_id+'" class="nav-item"><a class="nav-link" href="#chat-id-'+chat_id+'" id="chat-tab-link-'+chat_id+'" aria-controls="chat-id-'+chat_id+'" role="tab" data-toggle="tab"><i id="msg-send-status-'+chat_id+'" class="material-icons send-status-icon icon-user-online">send</i><i class="whatshot blink-ani d-none text-warning material-icons">whatshot</i><i id="user-chat-status-'+chat_id+'" class="'+this.tabIconClass+'">group</i><span class="ntab" id="ntab-chat-'+chat_id+'">' + name.replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</span><span onclick="return lhinst.removeDialogTabGroup(\''+chat_id+'\',$(\'#tabs\'),true)" class="material-icons icon-close-chat">close</span></a></li>';
tabs.find('> ul').append(contentLi);
var hash = window.location.hash.replace('#/','#');
var inst = this;
if (background !== true) {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > #chat-tab-li-'+chat_id+' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane active" id="chat-id-'+chat_id+'"></div>');
} else {
tabs.find('> div.tab-content').append('<div role="tabpanel" class="tab-pane" id="chat-id-'+chat_id+'"></div>');
}
ee.emitEvent('groupChatTabLoaded', [chat_id]);
$('#chat-tab-link-'+chat_id).click(function() {
ee.emitEvent('groupChatTabClicked', [chat_id.replace('gc','')]);
});
};
this.startGroupChat = function (chat_id,tabs,name, background) {
this.addGroupTab(tabs, name, 'gc'+chat_id, background);
}
this.hideShowAction = function(options) {
var messagesBlock = $('#messagesBlock-' + options['chat_id']);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight')
var msg = $('#message-more-'+options['id']);
if (msg.hasClass('hide')) {
msg.removeClass('hide');
options['hide_show'] == false ? $('#hide-show-action-'+options['id']).remove() : $('#hide-show-action-'+options['id']).text(options['hide_text']);
} else {
msg.addClass('hide');
if (options['hide_show'] == true) {
$('#hide-show-action-'+options['id']).text(options['show_text']);
}
}
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
this.buttonAction = function(inst,payload) {
var row = inst.closest('.message-row');
$.getJSON(this.wwwDir + 'chat/abstractclick/' + row.attr('id').replace('msg-','') + '/' + payload, function(data) {
if (data.error) {
alert(data.error);
} else if (data.replace_id && data.html) {
var messagesBlock = $('#messagesBlock-' + data.chat_id);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight');
$(data.replace_id).html(data.html);
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
});
}
this.startChat = function (chat_id,tabs,name,focusTab,position) {
this.removeBackgroundChat(chat_id);
this.hideNotification(chat_id);
$('#sub-tabs').length > 0 && $('#sub-tabs a[href=\'#sub-tabs-open\']').tab('show');
if ( this.chatUnderSynchronization(chat_id) == false ) {
var focusTabAction = typeof focusTab !== 'undefined' ? focusTab : true;
var rememberAppend = this.disableremember == false ? '/(remember)/true' : '';
this.addTab(tabs, this.wwwDir +'chat/adminchat/'+chat_id+rememberAppend, name, chat_id, focusTabAction, position);
var inst = this;
setTimeout(function(){
inst.syncadmininterfacestatic();
},1000);
} else {
tabs.find('> ul > li > a.active').removeClass("active");
tabs.find('> ul > li#chat-tab-li-'+chat_id+' > a').addClass("active");
tabs.find('> div.tab-content > div.active').removeClass('active');
tabs.find('> div.tab-content > #chat-id-'+chat_id).addClass('active');
window.location.hash = '#/chat-id-'+chat_id;
}
ee.emitEvent('chatStartTab', [chat_id, {name: name, focus: (typeof focusTab !== 'undefined' ? focusTab : true), position: position}]);
};
this.backgroundChats = [];
this.startChatBackground = function (chat_id,tabs,name,backgroundType) {
if ( this.chatUnderSynchronization(chat_id) == false ) {
this.backgroundChats.push(parseInt(chat_id));
var rememberAppend = this.disableremember == false ? '/(remember)/true' : '';
if (!backgroundType) {
backgroundType = 'background';
}
this.addTab(tabs, this.wwwDir +'chat/adminchat/'+chat_id+rememberAppend+'/(arg)/'+backgroundType, name, chat_id, false);
ee.emitEvent('chatStartBackground', [chat_id,{name:name}]);
return true;
}
return false;
};
this.protectCSFR = function()
{
$('a.csfr-required').click(function(){
var inst = $(this);
if (!inst.attr('data-secured')){
inst.attr('href',inst.attr('href')+'/(csfr)/'+confLH.csrf_token);
inst.attr('data-secured',1);
}
});
};
this.setChatHash = function (hash)
{
this.hash = hash;
};
this.addSynchroChat = function (chat_id,message_id)
{
this.chatsSynchronising.push(chat_id);
this.chatsSynchronisingMsg.push(chat_id + ',' +message_id);
if (LHCCallbacks.addSynchroChat) {
LHCCallbacks.addSynchroChat(chat_id,message_id);
}
};
this.removeSynchroChat = function (chat_id)
{
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
this.chatsSynchronising.splice(j, 1);
this.chatsSynchronisingMsg.splice(j, 1);
} else { j++; }
};
this.forgetChat(chat_id,'achat_id');
ee.emitEvent('removeSynchroChat', [chat_id]);
if (LHCCallbacks.removeSynchroChat) {
LHCCallbacks.removeSynchroChat(chat_id);
}
};
this.is_typing = false;
this.typing_timeout = null;
this.operatorTypingCallback = function(chat_id)
{
var www_dir = this.wwwDir;
var inst = this;
if (inst.is_typing == false) {
inst.is_typing = true;
clearTimeout(inst.typing_timeout);
if (inst.nodeJsMode == true) {
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
ee.emitEvent('operatorTyping', [{'chat_id':chat_id,'status':true}]);
} else {
$.getJSON(www_dir + 'chat/operatortyping/' + chat_id+'/true',{ }, function(data){
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id,true);
}
}).fail(function(){
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
});
}
} else {
clearTimeout(inst.typing_timeout);
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
}
};
this.initTypingMonitoringAdmin = function(chat_id) {
var inst = this;
jQuery('#CSChatMessage-'+chat_id).bind('keyup', function (evt){
inst.operatorTypingCallback(chat_id);
});
};
this.remarksTimeout = null;
this.saveRemarks = function(chat_id) {
clearTimeout(this.remarksTimeout);
$('#remarks-status-'+chat_id).addClass('text-warning');
$('#main-user-info-remarks-'+chat_id+' .alert').remove();
var inst = this;
this.remarksTimeout = setTimeout(function(){
$.postJSON(inst.wwwDir + 'chat/saveremarks/' + chat_id,{'data':$('#ChatRemarks-'+chat_id).val()}, function(data){
if(data.error == 'false') {
$('#remarks-status-'+chat_id).removeClass('text-warning');
} else {
$('#main-user-info-remarks-'+chat_id).prepend(data.result);
}
});
},500);
};
this.saveNotes = function(chat_id) {
clearTimeout(this.remarksTimeout);
$('#remarks-status-online-'+chat_id).addClass('text-warning');
var inst = this;
this.remarksTimeout = setTimeout(function(){
$.postJSON(inst.wwwDir + 'chat/saveonlinenotes/' + chat_id,{'data':$('#OnlineRemarks-'+chat_id).val()}, function(data){
$('#remarks-status-online-'+chat_id).removeClass('text-warning');
});
},500);
};
this.surveyShowed = false;
this.closeWindow  = function() {
if (this.survey !== null && this.surveyShowed == false) {
this.surveyShowed = true;
this.chatClosed();
} else {
window.open('','_self','');
window.close();
}
};
this.typingStoppedOperator = function(chat_id) {
var inst = this;
if (inst.is_typing == true){
if (lhinst.nodeJsMode  == true) {
inst.is_typing = false;
ee.emitEvent('operatorTyping', [{'chat_id':chat_id,'status':false}]);
} else {
$.getJSON(this.wwwDir + 'chat/operatortyping/' + chat_id+'/false',{ }, function(data){
inst.is_typing = false;
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id,false);
};
}).fail(function(){
inst.is_typing = false;
});
}
}
};
this.sendemail = function(){
$.postJSON(this.wwwDir + 'chat/sendchat/' + this.chat_id+'/'+this.hash,{csfr_token:confLH.csrf_token, email:$('input[name="UserEmail"]').val()}, function(data){
if (data.error == 'false') {
$('#myModal').modal('hide');
} else {
$('#user-action .alert-box').remove();
$('#user-action').prepend(data.result);
}
});
};
this.reopenchat = function(inst){
$.postJSON(this.wwwDir + 'chat/reopenchat/' + inst.attr('data-id'), function(data){
if (data.error == 'true') {
alert(data.result);
} else {
$('#action-block-row-'+ inst.attr('data-id')).removeClass('hide');
$('#CSChatMessage-'+inst.attr('data-id')).removeAttr('readonly').focus();
$('#chat-status-text-'+inst.attr('data-id')).text(data.status);
inst.remove();
}
});
};
this.initTypingMonitoringUser = function(chat_id) {
var www_dir = this.wwwDir;
var inst = this;
try {
if (sessionStorage && sessionStorage.getItem('lhc_ttxt') && sessionStorage.getItem('lhc_ttxt') != '') {
jQuery('#CSChatMessage').val(sessionStorage.getItem('lhc_ttxt'));
}
} catch(e) {}
var hasMic = false;
if (jQuery('#CSChatMessage').val() != '') {
$('#lhc-send-icon').show();
$('#lhc-mic-icon').hide();
} else {
if ($('#lhc-mic-icon').length > 0){
$('#lhc-send-icon').hide();
$('#lhc-mic-icon').show();
hasMic = true;
}
}
jQuery('#CSChatMessage').bind('keyup', function (evt){
try {
if (sessionStorage) {
sessionStorage.setItem('lhc_ttxt',$(this).val());
};
} catch(e) {}
var element = $(this)[0];
element.style.height = "5px";
if (hasMic == true) {
if ($(this).val() != '') {
$('#lhc-send-icon').show();
$('#lhc-mic-icon').hide();
$('#voice-control-message').hide();
} else {
$('#lhc-send-icon').hide();
$('#lhc-mic-icon').show();
}
}
var heightScroll = ((element.scrollHeight)+3);
if (heightScroll > 48) {
heightScroll = heightScroll + 10;
if (heightScroll > 90) {
element.style.overflowY = 'auto';
} else {
element.style.overflowY = 'hidden';
}
}
element.style.height = heightScroll+"px";
if (inst.is_typing == false) {
clearTimeout(inst.typing_timeout);
if (LHCCallbacks.initTypingMonitoringUserInform) {
inst.typing_timeout = setTimeout(function(){
ee.emitEvent('visitorTypingStopped', [{'chat_id':chat_id,'hash':inst.hash}]);
},3000);
ee.emitEvent('visitorTyping', [{'chat_id':chat_id,'hash':inst.hash,'status':true,msg:$(this).val()}]);
} else {
inst.is_typing = true;
$.postJSON(www_dir + 'chat/usertyping/' + chat_id+'/'+inst.hash+'/true',{msg:$(this).val()}, function(data){
inst.typing_timeout = setTimeout(function(){inst.typingStoppedUser(chat_id);},3000);
if (LHCCallbacks.initTypingMonitoringUser) {
ee.emitEvent('initVisitorTyping', [chat_id,true]);
};
}).fail(function(){
inst.typing_timeout = setTimeout(function(){inst.typingStoppedUser(chat_id);},3000);
});
}
} else {
clearTimeout(inst.typing_timeout);
inst.typing_timeout = setTimeout(function(){inst.typingStoppedUser(chat_id);}, 3000);
var txtArea = $(this).val();
if (inst.currentMessageText != txtArea ) {
if ( Math.abs(inst.currentMessageText.length - txtArea.length) > 6) {
inst.currentMessageText = txtArea;
if (LHCCallbacks.initTypingMonitoringUserInform) {
ee.emitEvent('visitorTyping', [{'chat_id':chat_id,'hash':inst.hash,'status':true,msg:$(this).val()}]);
} else {
$.postJSON(www_dir + 'chat/usertyping/' + chat_id+'/'+inst.hash+'/true',{msg:txtArea}, function(data){
if (LHCCallbacks.initTypingMonitoringUser) {
ee.emitEvent('initVisitorTyping', [chat_id,true]);
};
});
}
}
}
}
});
};
this.typingStoppedUser = function(chat_id) {
var inst = this;
if (inst.is_typing == true){
if (LHCCallbacks.typingStoppedUserInform) {
inst.is_typing = false;
ee.emitEvent('visitorTypingStopped', [{'chat_id':chat_id,'hash':this.hash,'status':false}]);
} else {
$.getJSON(this.wwwDir + 'chat/usertyping/' + chat_id+'/'+this.hash+'/false',{ }, function(data){
inst.is_typing = false;
if (LHCCallbacks.initTypingMonitoringUser) {
ee.emitEvent('initVisitorTyping', [chat_id,false]);
};
}).fail(function(){
inst.is_typing = false;
});
}
}
};
this.refreshFootPrint = function(inst) {
inst.addClass('disabled');
$.get(this.wwwDir + 'chat/chatfootprint/' + inst.attr('rel'),{ }, function(data){
$('#footprint-'+inst.attr('rel')).html(data);
inst.removeClass('disabled');
});
};
this.makeAbstractRequest = function(chat_id, inst) {
$.get(inst.attr('href'), function(data) {
lhinst.syncadmininterfacestatic();
if (LHCCallbacks.userRedirectedSurvey) {
LHCCallbacks.userRedirectedSurvey(chat_id);
};
});
return false;
};
this.refreshOnlineUserInfo = function(inst) {
inst.addClass('disabled');
$.get(this.wwwDir + 'chat/refreshonlineinfo/' + inst.attr('rel'),{ }, function(data){
$('#online-user-info-'+inst.attr('rel')).html(data);
inst.removeClass('disabled');
});
};
this.processCollapse = function(chat_id)
{
if ($('#chat-main-column-'+chat_id+' .collapse-right').text() == 'chevron_right'){
$('#chat-right-column-'+chat_id).hide();
$('#chat-main-column-'+chat_id).removeClass('col-sm-7').addClass('col-sm-12');
$('#chat-main-column-'+chat_id+' .collapse-right').text('chevron_left');
try {
if (localStorage) {
localStorage.setItem('lhc_rch',1);
}
} catch(e) {}
} else {
$('#chat-right-column-'+chat_id).show();
$('#chat-main-column-'+chat_id).removeClass('col-sm-12').addClass('col-sm-7');
$('#chat-main-column-'+chat_id+' .collapse-right').text('chevron_right');
try {
if (localStorage) {
localStorage.removeItem('lhc_rch');
}
} catch(e) {}
};
};
this.chatUnderSynchronization = function(chat_id)
{
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
return true;
} else { j++; }
}
return false;
};
this.getChatIndex = function(chat_id)
{
var j = 0;
while (j < this.chatsSynchronising.length) {
if (this.chatsSynchronising[j] == chat_id) {
return j;
} else { j++; }
}
return false;
};
this.updateUserSyncInterface = function(inst,data)
{
try {
if (data.error == 'false')
{
if (data.blocked != 'true')
{
if (data.result != 'false' && data.status == 'true')
{
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
var isAtTheBottom = Math.abs((scrollHeight - messageBlock.prop("scrollTop")) - messageBlock.prop("clientHeight"));
scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.pending-storage').remove();
messageBlock.append(data.result);
messageBlock.find('.meta-auto-hide').hide();
messageBlock.find('.message-row').last().find('.meta-auto-hide').show();
if (isAtTheBottom < 20 || inst.forceBottomScroll == true) {
inst.forceBottomScroll = false;
messageBlock.scrollTop(scrollHeight+2000);
}
if ( confLH.new_message_sound_user_enabled == 1 && data.uw == 'false') {
inst.playNewMessageSound();
};
if (inst.last_message_id > 0) {
if ($('#msg-'+inst.last_message_id).attr('data-op-id') != data.msop || ($('#msg-'+inst.last_message_id+' > .usr-tit').text() !== $('#msg-'+data.message_id+' > .usr-tit').text())) {
$('#msg-'+inst.last_message_id).next().addClass('operator-changes');
}
}
inst.last_message_id = data.message_id;
if (data.uw == 'false' && inst.isWidgetMode && typeof(parent) !== 'undefined') {
parent.postMessage('lhc_newopmsg', '*');
}
} else {
if ( data.status != 'true') $('#status-chat').html(data.status);
}
inst.userTimeout = setTimeout(chatsyncuser,confLH.chat_message_sinterval);
if (data.cs == 't') {
inst.chatsyncuserpending();
}
if ( data.ott != '' && data.ott != 'f') {
var instStatus = $('#id-operator-typing');
instStatus.text(data.ott);
instStatus.css('visibility','visible');
inst.operatorTyping = true;
} else if (data.ott == 'f') {
inst.operatorTyping = false;
$('#id-operator-typing').css('visibility','hidden');
}
if (data.op != '') {
inst.executeRemoteCommands(data.op);
};
} else {
$('#status-chat').html(data.status);
$('#ChatMessageContainer').remove();
$('#ChatSendButtonContainer').remove();
$('#id-operator-typing').css('visibility','hidden');
inst.operatorTyping = false;
if (typeof data.op !== 'undefined' && data.op != '') {
inst.executeRemoteCommands(data.op);
};
if (data.closed && data.closed == true) {
ee.emitEvent('chatClosedSyncUser', [inst.chat_id]);
if (inst.isWidgetMode && typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
parent.postMessage('lhc_chat_closed' + (typeof data.closed_arg !== 'undefined' ? ':'+data.closed_arg : ''), '*');
} else {
if (typeof data.closed_arg !== 'undefined'){
inst.parseCloseArgs(data.closed_arg.split(':'));
};
inst.chatClosed();
}
}
}
};
} catch(err) {
inst.userTimeout = setTimeout(chatsyncuser,confLH.chat_message_sinterval);
};
inst.syncroRequestSend = false;
};
this.parseCloseArgs = function (args) {
var tt = args.length/2;
for (i = 0; i < tt; i++) {
var argument = args[i*2];
var value = args[(i*2)+1];
if (argument == 'survey_id') {
this.survey = value;
}
}
};
this.chatClosed = function() {
if (this.survey !== null) {
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
var operatorTyping = this.operatorTyping == true ? '/(ot)/t' : '';
var themeWindow = this.theme !== null ? '/(theme)/'+this.theme : '';
var modeEmbed = this.isEmbedMode == true ? '/(modeembed)/embed' : '';
var fillType = this.isWidgetMode == true ? 'fillwidget' : 'fill';
var explicitClose =  this.explicitClose == true ? '/(eclose)/t' : '';
document.location.replace(this.wwwDir + 'survey/'+fillType+'/(survey)/' + this.survey + '/(chatid)/' +this.chat_id + '/(hash)/'+ this.hash + modeWindow + operatorTyping + themeWindow + modeEmbed + explicitClose);
return true;
}
return false;
};
this.executeRemoteCommands = function(operations)
{
var inst = this;
$.each(operations,function(i,item) {
if (item.indexOf('lhinst.') != -1) { // Internal operation
try {
eval(item);
} catch (e) {
console.log(e);
}
} else if (item.indexOf('lhc_ui_refresh') != -1) { // This can happen only if operator enables files upload. To support legacy widget.
var option = item.split(':')[1];
if (option == 1) {
lhinst.enableFileUpload();
} else {
lhinst.disableFileUpload();
}
} else if (inst.isWidgetMode) {
parent.postMessage(item, '*');
} else if (window.opener) {
window.opener.postMessage(item, '*');
};
});
};
this.disableFileUpload = function () {
$('#fileupload').fileupload('destroy');
$('#ChatMessageContainer .dropdown-menu .flex-row .file-uploader').remove();
};
this.syncusercall = function()
{
var inst = this;
if (this.syncroRequestSend == false)
{
clearTimeout(this.userTimeout);
this.syncroRequestSend = true;
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
var operatorTyping = this.operatorTyping == true ? '/(ot)/t' : '';
var themeWindow = this.theme !== null ? '/(theme)/'+this.theme : '';
var modeEmbed = this.isEmbedMode == true ? '/(modeembed)/embed' : '';
$.getJSON(this.wwwDir + this.syncuser + this.chat_id + '/'+ this.last_message_id + '/' + this.hash + modeWindow + operatorTyping + themeWindow + modeEmbed ,{ }, function(data){
inst.updateUserSyncInterface(inst,data);
if (LHCCallbacks.syncusercall) {
LHCCallbacks.syncusercall(inst,data);
};
ee.emitEvent('syncUserCall', [inst,data]);
}).fail(function(){
inst.syncroRequestSend = false;
inst.userTimeout = setTimeout(chatsyncuser,confLH.chat_message_sinterval);
});
}
};
this.scheduleSync = function() {
this.syncroRequestSend = false;
clearTimeout(this.userTimeout);
this.userTimeout = setTimeout(chatsyncuser,confLH.chat_message_sinterval);
};
this.closeActiveChatDialog = function(chat_id, tabs, hidetab)
{
var that = this;
ee.emitEvent('angularSyncDisabled', [true]);
$.postJSON(this.wwwDir + this.closechatadmin + chat_id, function (data) {
ee.emitEvent('angularSyncDisabled', [false]);
if (data.error == false) {
ee.emitEvent('angularLoadChatList');
} else {
alert(data.result);
}
}).fail(function(jqXHR, textStatus, errorThrown) {
ee.emitEvent('angularSyncDisabled', [false]);
console.dir(jqXHR);
});
if ($('#CSChatMessage-'+chat_id).length != 0) {
$('#CSChatMessage-'+chat_id).unbind('keydown', function(){});
$('#CSChatMessage-'+chat_id).unbind('keyup', function(){});
};
if (!!window.postMessage && window.opener) {
window.opener.postMessage("lhc_ch:chatclosed:"+chat_id, '*');
};
that.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = that.smartTabFocus(tabs, chat_id);
setTimeout(function() {
window.location.hash =  location;
},500);
if (that.closeWindowOnChatCloseDelete == true)
{
window.close();
}
};
if (LHCCallbacks.chatClosedCallback) {
LHCCallbacks.chatClosedCallback(chat_id);
};
};
this.smartTabFocus = function(tabs, chat_id, params) {
var index = tabs.find('> ul > #chat-tab-li-'+chat_id).index();
if (!params) {params = {};}
var navigationDirection = (params.up == true || typeof params.up == 'undefined') ? 1 : -1;
if (!params['keep']) {
tabs.find('> ul > #chat-tab-li-'+chat_id).remove();
tabs.find('#chat-id-'+chat_id).remove();
} else {
tabs.find('> ul > li > a.active').removeClass('active');
}
var linkTab = tabs.find('> ul > li:eq('+ (index - navigationDirection)+')');
if (linkTab.attr('id') !== undefined){
var link = linkTab.find('> a');
} else {
linkTabRight = tabs.find('> ul > li:eq('+ (index)+')');
if (linkTabRight.length > 0) {
var link = linkTabRight.find('> a');
} else {
var link = linkTab.find('> a');
}
}
if (!tabs.find('> ul > li > a.active').length) {
link.tab('show');
if (link.attr('id') !== undefined) {
var new_chat_id = link.attr('href').replace('#chat-id-','');
this.removeBackgroundChat(new_chat_id);
this.hideNotification(new_chat_id);
if (!params['keep']) {
ee.emitEvent('chatTabFocused', [new_chat_id]);
}
}
}
if (link.attr('href') !== undefined) {
return link.attr('href').replace('#','#/');
} else {
return '#';
}
};
this.startChatCloseTabNewWindow = function(chat_id, tabs, name)
{
window.open(this.wwwDir + 'chat/single/'+chat_id,'chatwindow-chat-id-'+chat_id,"menubar=1,resizable=1,width=800,height=650");
this.smartTabFocus(tabs, chat_id);
if (this.closeWindowOnChatCloseDelete == true)
{
window.close();
};
this.removeSynchroChat(chat_id);
this.syncadmininterfacestatic();
return false;
};
this.removeDialogTab = function(chat_id, tabs, hidetab)
{
if ($('#CSChatMessage-'+chat_id).length != 0){
$('#CSChatMessage-'+chat_id).unbind('keydown', function(){});
$('#CSChatMessage-'+chat_id).unbind('keyup', function(){});
}
this.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = this.smartTabFocus(tabs, chat_id);
setTimeout(function() {
window.location.hash = location;
},500);
if (this.closeWindowOnChatCloseDelete == true)
{
window.close();
};
};
this.syncadmininterfacestatic();
};
this.removeActiveDialogTag = function(tabs) {
if (this.closeWindowOnChatCloseDelete == true)
{
window.close();
};
};
this.deleteChat = function(chat_id, tabs, hidetab)
{
if (confirm(confLH.transLation.delete_confirm)) {
var that = this;
$.postJSON(this.wwwDir + this.deletechatadmin + chat_id, function(data){
if (data.error == true) {
alert(data.result);
} else {
if ($('#CSChatMessage-'+chat_id).length != 0){
$('#CSChatMessage-'+chat_id).unbind('keydown', function(){});
$('#CSChatMessage-'+chat_id).unbind('keyup', function(){});
}
that.removeSynchroChat(chat_id);
if (hidetab == true) {
var location = that.smartTabFocus(tabs, chat_id);
setTimeout(function() {
window.location.hash = location;
},500);
if (that.closeWindowOnChatCloseDelete == true)
{
window.close();
}
};
if (LHCCallbacks.chatDeletedCallback) {
LHCCallbacks.chatDeletedCallback(chat_id);
};
that.syncadmininterfacestatic();
}
}).fail(function(jqXHR, textStatus, errorThrown) {
console.dir(jqXHR);
alert('getJSON request failed! ' + textStatus + ':' + errorThrown + ':' + jqXHR.responseText);
});
}
};
this.rejectPendingChat = function(chat_id, tabs)
{
var that = this;
$.postJSON(this.wwwDir + this.deletechatadmin + chat_id ,{}, function(data){
that.syncadmininterfacestatic();
}).fail(function(jqXHR, textStatus, errorThrown) {
console.dir(jqXHR);
alert('getJSON request failed! ' + textStatus + ':' + errorThrown + ':' + jqXHR.responseText);
});
};
this.startChatNewWindow = function(chat_id,name)
{
var popupWindow = window.open(this.wwwDir + 'chat/single/'+chat_id,'chatwindow-chat-id-'+chat_id,"menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
var inst = this;
setTimeout(function(){
inst.syncadmininterfacestatic();
},1000);
ee.emitEvent('chatStartOpenWindow', [chat_id]);
}
};
this.startChatNewWindowArchive = function(archive_id, chat_id,name)
{
var popupWindow = window.open(this.wwwDir + 'chatarchive/viewarchivedchat/' + archive_id + '/' + chat_id + '/(mode)/popup','chatwindow-chat-id-'+chat_id,"menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
ee.emitEvent('chatStartOpenWindowArchive', [archive_id, chat_id]);
}
};
this.startCoBrowse = function(chat_id)
{
popupWindow = window.open(this.wwwDir + 'cobrowse/browse/'+chat_id,'chatwindow-cobrowse-chat-id-'+chat_id,"menubar=1,resizable=1,width=800,height=650");
if (popupWindow !== null) {
popupWindow.focus();
}
return false;
};
this.speechToText = function(chat_id)
{
if (this.speechHandler == false)
{
this.speechHandler = new LHCSpeechToText();
}
this.speechHandler.listen({'chat_id':chat_id});
};
this.startChatTransfer = function(chat_id,tabs,name,transfer_id){
var inst = this;
$.getJSON(this.wwwDir + this.accepttransfer + transfer_id ,{}, function(data){
inst.startChat(chat_id,tabs,name);
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(chat_id);
};
}).fail(function(){
inst.startChat(chat_id,tabs,name);
});
};
this.startChatNewWindowTransfer = function(chat_id,name,transfer_id)
{
$.getJSON(this.wwwDir + this.accepttransfer + transfer_id ,{}, function(data){
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(chat_id);
};
});
return this.startChatNewWindow(chat_id,name);
};
this.startChatNewWindowTransferByTransfer = function(chat_id, nt)
{
var inst = this;
$.ajax({
type: "GET",
url: this.wwwDir + this.accepttransfer + chat_id+'/(mode)/chat',
cache: false,
dataType: 'json'
}).done(function(data){
if ($('#tabs').length > 0) {
window.focus();
inst.startChat(data.chat_id, $('#tabs'), nt);
} else {
inst.startChatNewWindow(data.chat_id,'');
}
if (LHCCallbacks.operatorAcceptedTransfer) {
LHCCallbacks.operatorAcceptedTransfer(data.chat_id);
};
});
this.syncadmininterfacestatic();
return false;
};
this.switchLang = function(form,lang){
var languageAppend = '<input type="hidden" value="'+lang+'" name="switchLang" />';
form.append(languageAppend);
form.submit();
return false;
};
this.sendLinkToMail = function( embed_code,file_id) {
var val = window.parent.$('#MailMessage').val();
window.parent.$('#MailMessage').val(((val != '') ? val+"\n" : val)+embed_code);
$('#embed-button-'+file_id).addClass('btn-success');
};
this.sendLinkToEditor = function(chat_id, embed_code,file_id) {
var val = window.parent.$('#CSChatMessage-'+chat_id).val();
window.parent.$('#CSChatMessage-'+chat_id).val(((val != '') ? val+"\n" : val)+embed_code);
$('#embed-button-'+file_id).addClass('btn-success');
};
this.sendLinkToGeneralEditor = function(embed_code,file_id) {
var editor = window.parent.$('.embed-into');
var val = editor.val();
editor.val(((val != '') ? val+"\n" : val)+embed_code);
$('#embed-button-'+file_id).addClass('btn-success');
};
this.hideTransferModal = function(chat_id)
{
var inst = this;
setTimeout(function(){
$('#myModal').modal('hide');
if ($('#tabs').length > 0) {
inst.removeDialogTab(chat_id,$('#tabs'),true)
}
},1000);
};
this.transferChat = function(chat_id)
{
var inst = this;
var user_id = $('[name=TransferTo'+chat_id+']:checked').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id ,{'type':'user'}, function(data){
if (data.error == 'false') {
$('#transfer-block-'+data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.changeOwner = function(chat_id) {
var inst = this;
var user_id = $('#id_new_user_id').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id, {'type':'change_owner'}, function(data){
if (data.error == 'false') {
$('#transfer-block-'+data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.chooseSurvey = function(chat_id)
{
var survey_id = $('[name=SurveyItem'+chat_id+']:checked').val();
$.postJSON(this.wwwDir + "survey/choosesurvey/" + chat_id + '/' + survey_id, function(data){
if (data.error == 'false') {
$('#survey-block-'+data.chat_id).html(data.result);
};
});
};
this.redirectContact = function(chat_id,message){
if (typeof message === 'undefined' || confirm(message)){
$.postJSON(this.wwwDir + 'chat/redirectcontact/' + chat_id, function(data){
lhinst.syncadmininterfacestatic();
if (LHCCallbacks.userRedirectedContact) {
LHCCallbacks.userRedirectedContact(chat_id);
};
});
}
};
this.redirectToURL = function(chat_id,trans) {
var url = prompt(trans, "");
if (url != null) {
lhinst.addRemoteCommand(chat_id,'lhc_chat_redirect:'+url.replace(new RegExp(':','g'),'__SPLIT__'));
}
};
this.redirectToURLOnline = function(online_user_id,trans) {
var url = prompt(trans, "");
if (url != null) {
lhinst.addRemoteOnlineCommand(online_user_id,'lhc_chat_redirect:'+url.replace(new RegExp(':','g'),'__SPLIT__'));
lhinst.addExecutionCommand(online_user_id,'lhc_cobrowse_multi_command__lhc_chat_redirect:'+url.replace(new RegExp(':','g'),'__SPLIT__'));
}
};
this.transferChatDep = function(chat_id)
{
var inst = this;
var user_id = $('[name=DepartamentID'+chat_id+']:checked').val();
$.postJSON(this.wwwDir + this.trasnsferuser + chat_id + '/' + user_id ,{'type':'dep'}, function(data){
if (data.error == 'false') {
$('#transfer-block-'+data.chat_id).html(data.result);
inst.hideTransferModal(chat_id);
};
});
};
this.chatTabsOpen = function ()
{
window.open(this.wwwDir + 'chat/chattabs/','chatwindows',"menubar=1,resizable=1,width=800,height=650");
return false;
};
this.userclosedchat = function()
{
if (LHCCallbacks.userleftchatNotification) {
LHCCallbacks.userleftchatNotification(this.chat_id);
};
$.ajax({
type: "GET",
url: this.wwwDir + this.userclosechaturl + this.chat_id + '/' + this.hash,
cache: false
});
};
this.userclosedchatembed = function()
{
if (!!window.postMessage && typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
parent.postMessage("lhc_chat_closed_explicit", '*');
} else {
if (this.chatClosed() == false) {
window.close();
}
}
};
this.continueChatFromSurvey = function(survey_id)
{
if (this.isWidgetMode && typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
$.postJSON(this.wwwDir + "survey/backtochat/" + this.chat_id + '/' + this.hash + '/' + survey_id , function(data){
parent.postMessage('lhc_continue_chat', '*');
});
} else {
this.chatClosed();
}
return false;
}
this.explicitClose = false;
this.explicitChatCloseByUser = function()
{
this.explicitClose = true;
if (this.isWidgetMode && typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
parent.postMessage('lhc_chat_closed_explicit', '*');
} else {
if (this.chatClosed() == false) {
window.close();
}
}
return false;
};
this.restoreWidget = function(hash){
if (!!window.postMessage && window.opener) {
window.opener.postMessage("lhc_ch:hash:"+hash, '*');
window.opener.postMessage("lhc_ch:hash_resume:"+hash, '*');
window.opener.postMessage("lhc_open_restore", '*');
window.close();
};
};
this.userclosedchatandbrowser = function()
{
if (LHCCallbacks.userleftchatNotification) {
LHCCallbacks.userleftchatNotification(this.chat_id);
};
$.get(this.wwwDir + this.userclosechaturl + this.chat_id + '/' + this.hash + '/(eclose)/t',function(data){
lhinst.closeWindow();
});
};
this.sendCannedMessage = function(chat_id,link_inst)
{
if ($('#id_CannedMessage-'+chat_id).val() > 0) {
link_inst.addClass('secondary');
var delayMiliseconds = parseInt($('#id_CannedMessage-'+chat_id).find(':selected').attr('data-delay'))*1000;
var www_dir = this.wwwDir;
var inst  = this;
if (inst.is_typing == false) {
inst.is_typing = true;
clearTimeout(inst.typing_timeout);
if (LHCCallbacks.initTypingMonitoringAdminInform) {
LHCCallbacks.initTypingMonitoringAdminInform({'chat_id':chat_id,'status':true});
};
$.getJSON(www_dir + 'chat/operatortyping/' + chat_id+'/true',{ }, function(data){
if (LHCCallbacks.initTypingMonitoringAdmin) {
LHCCallbacks.initTypingMonitoringAdmin(chat_id,true);
};
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);link_inst.removeClass('secondary');},(delayMiliseconds > 3000 ? delayMiliseconds : 3000));
}).fail(function(){
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
});
} else {
clearTimeout(inst.typing_timeout);
inst.typing_timeout = setTimeout(function(){inst.typingStoppedOperator(chat_id);},3000);
link_inst.removeClass('secondary');
};
if (delayMiliseconds > 0) {
setTimeout(function(){
var pdata = {
msg	: $('#id_CannedMessage-'+chat_id).find(':selected').attr('data-msg')
};
$('#CSChatMessage-'+chat_id).val('');
$.postJSON(www_dir + inst.addmsgurl + chat_id, pdata , function(data){
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.syncadmincall();
return true;
});
},delayMiliseconds);
} else {
var pdata = {
msg	: $('#id_CannedMessage-'+chat_id).find(':selected').attr('data-msg')
};
$('#CSChatMessage-'+chat_id).val('');
$.postJSON(this.wwwDir + this.addmsgurl + chat_id, pdata , function(data){
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.syncadmincall();
return true;
});
}
};
return false;
};
this.voteAction = function(inst) {
var chat_id = this.chat_id;
$.postJSON(this.wwwDir + 'chat/voteaction/' + this.chat_id + '/' + this.hash + '/' + inst.attr('data-id') ,{}, function(data){
if (data.error == 'false')
{
if (LHCCallbacks.uservoted) {
LHCCallbacks.uservoted(chat_id);
};
if (data.status == 0) {
$('.up-vote-action').removeClass('up-voted');
$('.down-vote-action').removeClass('down-voted');
} else if (data.status == 1) {
$('.up-vote-action').addClass('up-voted');
$('.down-vote-action').removeClass('down-voted');
} else if (data.status == 2) {
$('.up-vote-action').removeClass('up-voted');
$('.down-vote-action').addClass('down-voted');
}
}
});
};
this.theme = null;
this.checkChatStatusTimeout = null;
this.chatStatus = null;
this.chatsyncuserpending = function ()
{
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
var themeWindow = this.theme !== null ? '/(theme)/'+this.theme : '';
clearTimeout(this.checkChatStatusTimeout);
var inst = this;
$.getJSON(this.wwwDir + this.checkchatstatus + this.chat_id + '/' + this.hash + modeWindow + themeWindow,{}, function(data) {
ee.emitEvent('checkChatStatus', [inst.chat_id, data]);
inst.chatStatus = data.status;
if (data.error == 'false')
{
if (data.activated == 'false')
{
if (data.result != 'false')
{
$('#status-chat').html(data.result);
}
if (data.ru != '') {
document.location.replace(data.ru);
}
inst.checkChatStatusTimeout = setTimeout(chatsyncuserpending,confLH.chat_message_sinterval);
} else {
$('#status-chat').html(data.result);
if (data.closed && data.closed == true) {
ee.emitEvent('chatClosedCheckStatus', [inst.chat_id]);
if (inst.isWidgetMode && typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
parent.postMessage('lhc_chat_closed', '*');
} else {
inst.chatClosed();
}
}
}
}
}).fail(function(){
setTimeout(chatsyncuserpending,confLH.chat_message_sinterval);
});
};
this.setTheme = function(theme_id) {
this.theme = theme_id;
};
this.survey = null;
this.setSurvey = function(survey_id) {
this.survey = survey_id;
};
this.isBlinking = false;
this.startBlinking = function(){
if (this.isBlinking == false) {
var inst = this;
var newExcitingAlerts = (function () {
var oldTitle = document.title;
var msg = "!!! "+document.title;
var timeoutId;
var blink = function() { document.title = document.title == msg ? ' ' : msg; };
var clear = function() {
clearInterval(timeoutId);
document.title = oldTitle;
window.onmousemove = null;
timeoutId = null;
inst.isBlinking = false;
};
return function () {
if (!timeoutId) {
timeoutId = setInterval(blink, 1000);
window.onmousemove = clear;
}
};
}());
newExcitingAlerts();
this.isBlinking = true;
};
};
this.playNewMessageSound = function() {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/new_message.ogg?v=3' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/new_message.mp3?v=3' : WWW_DIR_JAVASCRIPT_FILES + '/new_message.wav?v=3';
this.audio.load();
};
if(!$("textarea[name=ChatMessage]").is(":focus")) {
this.startBlinking();
};
};
this.playInvitationSound = function() {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/invitation.ogg' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/invitation.mp3' : WWW_DIR_JAVASCRIPT_FILES + '/invitation.wav';
this.audio.load();
}
};
this.playPreloadSound = function() {
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/silence.ogg' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/silence.mp3' : WWW_DIR_JAVASCRIPT_FILES + '/silence.wav';
this.audio.load();
}
};
this.loadPreviousMessages = function (inst) {
$.getJSON(this.wwwDir + 'chat/loadpreviousmessages/' + inst.attr('chat-id') + '/' + inst.attr('message-id') + '/(initial)/' + inst.attr('data-initial'), function(data) {
if (data.error == false) {
inst.attr('data-initial',0);
var msg = $('#messagesBlock-'+inst.attr('chat-original-id'));
msg.prepend(data.result);
if (inst.attr('auto-scroll') == 1) {
inst.attr('auto-scroll',0);
msg.scrollTop(msg.prop('scrollHeight'));
}
if (data.has_messages == true) {
inst.attr('message-id', data.message_id);
inst.attr('chat-id',data.chat_id);
} else {
inst.remove();
}
}
});
};
this.hidenicknamesstatus = null;
this.syncadmincall = function()
{
if (this.chatsSynchronising.length > 0)
{
if (this.underMessageAdd == false && this.syncroRequestSend == false)
{
this.syncroRequestSend = true;
$.postJSON(this.wwwDir + this.syncadmin ,{ 'chats[]': this.chatsSynchronisingMsg }, function(data){
if (typeof data.error_url !== 'undefined') {
document.location.replace(data.error_url);
}
try {
if (data.error == 'false')
{
if (data.result != 'false')
{
var playSound = false
$.each(data.result,function(i,item) {
var messageBlock = $('#messagesBlock-'+item.chat_id);
var scrollHeight = messageBlock.prop("scrollHeight");
var isAtTheBottom = Math.abs((scrollHeight - messageBlock.prop("scrollTop")) - messageBlock.prop("clientHeight"));
messageBlock.find('.pending-storage').slice(0, item.mn).remove();
var mainElement = $('#chat-tab-link-'+item.chat_id);
var needUnreadSeparator = !focused;
if (!mainElement.hasClass('active')) {
if (mainElement.find('span.msg-nm').length > 0) {
var totalMsg = (parseInt(mainElement.find('span.msg-nm').attr('rel')) + item.mn);
mainElement.find('span.msg-nm').html(' (' + totalMsg + ')' ).attr('rel',totalMsg);
} else {
needUnreadSeparator = true;
mainElement.append('<span rel="'+item.mn+'" class="msg-nm"> ('+item.mn+')</span>');
mainElement.addClass('has-pm');
}
}
if (needUnreadSeparator == true && document.getElementById('unread-separator-'+item.chat_id) === null) {
item.content = item.content.replace('<span class="usr-tit','<div id="unread-separator-'+item.chat_id+'" class="new-msg-holder border-bottom border-danger text-center"><span class="new-msg bg-danger text-white d-inline-block fs12 rounded-top">'+confLH.transLation.new+'</span></div><span class="usr-tit');
}
messageBlock.append(item.content);
messageBlock.find('.pending-storage').appendTo(messageBlock);
lhinst.addQuateHandler(item.chat_id);
if (isAtTheBottom < 20) {
messageBlock.scrollTop(scrollHeight);
}
lhinst.updateChatLastMessageID(item.chat_id,item.message_id);
if (playSound == false && data.uw == 'false' && (typeof item.ignore === 'undefined' || typeof item.ignore === false))
{
playSound = true;
}
if ( confLH.new_message_browser_notification == 1 && data.uw == 'false' && (typeof item.ignore === 'undefined' || typeof item.ignore === false)) {
lhinst.showNewMessageNotification(item.chat_id,item.msg,item.nck);
};
if (item.msfrom > 0) {
if ($('#msg-'+item.msfrom).attr('data-op-id') != item.msop) {
$('#msg-'+item.msfrom).next().addClass('operator-changes');
}
}
ee.emitEvent('eventSyncAdmin', [item,i]);
});
if ( confLH.new_message_sound_admin_enabled == 1  && data.uw == 'false' && playSound == true) {
lhinst.playNewMessageSound();
};
};
if (data.result_status != 'false')
{
var groupTabs = $('#group-chats-status').hasClass('chat-active');
$.each(data.result_status,function(i,item) {
if (item.tp == 'true') {
$('#user-is-typing-'+item.chat_id).html(item.tx).css('visibility','visible');
} else {
if (lhinst.nodeJsMode == false) {
$('#user-is-typing-'+item.chat_id).css('visibility','hidden');
}
};
$('#last-msg-chat-'+item.chat_id).text(item.lmsg);
var userChatStatus = $('#user-chat-status-'+item.chat_id);
var wasOnline = userChatStatus.hasClass('icon-user-online');
$('#chat-duration-'+item.chat_id).text(item.cdur);
userChatStatus.removeClass('icon-user-online icon-user-away icon-user-pageview');
$('#msg-send-status-'+item.chat_id).removeClass('icon-user-online icon-user-offline');
if (item.us == 0) {
userChatStatus.addClass('icon-user-online');
} else if (item.us == 2) {
userChatStatus.addClass('icon-user-away');
} else if (item.us == 3) {
userChatStatus.addClass('icon-user-pageview');
}
if (groupTabs == true) {
if (wasOnline == true && item.us != 0 || (lhinst.hidenicknamesstatus != groupTabs && item.us != 0)) {
$('#ntab-chat-' + item.chat_id).hide();
} else if (wasOnline == false && item.us == 0 || (lhinst.hidenicknamesstatus != groupTabs && item.us == 0)) {
$('#ntab-chat-' + item.chat_id).show();
}
} else if (lhinst.hidenicknamesstatus != groupTabs) {
$('#ntab-chat-' + item.chat_id).show();
}
var statusel = $('#chat-id-'+item.chat_id +'-mds');
if (statusel.attr('data-chat-status') != item.cs || statusel.attr('data-chat-user') != item.co)
{
lhinst.updateVoteStatus(item.chat_id);
}
if (item.um == 1) {
statusel.addClass('chat-unread');
$('#msg-send-status-'+item.chat_id).addClass('icon-user-offline');
} else {
$('#msg-send-status-'+item.chat_id).addClass('icon-user-online');
statusel.removeClass('chat-unread');
}
if (item.lp !== false) {
statusel.attr('title',item.lp+' s.');
} else {
statusel.attr('title','');
}
if (typeof item.oad != 'undefined' && item.oad == 1) {
$('#lhc_sync_operation').remove();
var th = document.getElementsByTagName('head')[0];
var s = document.createElement('script');
s.setAttribute('id','lhc_sync_operation');
s.setAttribute('type','text/javascript');
s.setAttribute('src',WWW_DIR_JAVASCRIPT + 'chat/loadoperatorjs/(type)/chat/(id)/'+item.chat_id);
th.appendChild(s);
};
});
};
if (data.cg) {
$.each(data.cg,function(i,item) {
return lhinst.removeDialogTab(item,$('#tabs'),true);
});
}
lhinst.hidenicknamesstatus = groupTabs;
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin,confLH.chat_message_sinterval);
ee.emitEvent('chatAdminSync', [data]);
};
} catch (err) {
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin,confLH.chat_message_sinterval);
};
lhinst.setSynchronizationRequestSend(false);
if (LHCCallbacks.syncadmincall) {
LHCCallbacks.syncadmincall(lhinst,data);
};
}).fail(function(){
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin,confLH.chat_message_sinterval);
lhinst.setSynchronizationRequestSend(false);
});
} else {
clearTimeout(lhinst.userTimeout);
lhinst.userTimeout = setTimeout(chatsyncadmin,confLH.chat_message_sinterval);
}
} else {
this.isSinchronizing = false;
}
};
this.updateVoteStatus = function(chat_id) {
$.getJSON(this.wwwDir + 'chat/updatechatstatus/'+chat_id ,{ }, function(data){
$('#main-user-info-tab-'+chat_id).html(data.result);
$('#messagesBlock-'+chat_id+' span.vis-tit').each(function(i) {
var cache = $(this).children();
$(this).text(' '+data.nick).prepend(cache);
});
$('#ntab-chat-'+chat_id).text(data.nick);
ee.emitEvent('chatTabInfoReload', [chat_id]);
});
};
this.updateChatLastMessageID = function(chat_id,message_id)
{
this.chatsSynchronisingMsg[this.getChatIndex(chat_id)] = chat_id+','+message_id;
};
this.requestNotificationPermission = function() {
if (window.webkitNotifications) {
window.webkitNotifications.requestPermission();
} else if(window.Notification){
Notification.requestPermission(function(permission){});
} else {
alert('Notification API in your browser is not supported.');
}
};
this.playNewChatAudio = function(sound) {
clearTimeout(this.soundIsPlaying);
this.soundPlayedTimes++;
if (Modernizr.audio && this.audio !== null) {
this.audio.src = Modernizr.audio.ogg ? WWW_DIR_JAVASCRIPT_FILES + '/'+sound+'.ogg?v=3' :
Modernizr.audio.mp3 ? WWW_DIR_JAVASCRIPT_FILES + '/'+sound+'.mp3?v=3' : WWW_DIR_JAVASCRIPT_FILES + '/'+sound+'.wav?v=3';
this.audio.load();
if (confLH.repeat_sound > this.soundPlayedTimes) {
var inst = this;
this.soundIsPlaying = setTimeout(function(){inst.playNewChatAudio(sound);},confLH.repeat_sound_delay*1000);
}
};
};
this.focusChanged = function(status){
if (confLH.new_message_browser_notification == 1 && status == true){
if (window.webkitNotifications || window.Notification) {
var inst = this;
$.each(this.chatsSynchronising, function( index, chat_id ) {
if (typeof inst.notificationsArrayMessages[chat_id] !== 'undefined') {
if (window.webkitNotifications) {
inst.notificationsArrayMessages[chat_id].cancel();
} else {
inst.notificationsArrayMessages[chat_id].close();
}
delete inst.notificationsArrayMessages[chat_id];
}
});
}
}
if (parseInt(this.chat_id) > 0) {
this.scheduleSync();
}
};
this.notificationsArrayMessages = [];
this.showNewMessageNotification = function(chat_id,message,nick) {
try {
if (window.Notification && focused == false && window.Notification.permission == 'granted') {
if (typeof this.notificationsArrayMessages[chat_id] !== 'undefined') {
this.notificationsArrayMessages[chat_id].close();
delete this.notificationsArrayMessages[chat_id];
};
var notification = new Notification(nick, { icon: WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION + '/notification.png', body: message });
var _that = this;
notification.onclick = function () {
window.focus();
notification.close();
delete _that.notificationsArrayMessages[chat_id];
};
notification.onclose = function() {
if (typeof _that.notificationsArrayMessages[chat_id] !== 'undefined') {
delete _that.notificationsArrayMessages[chat_id];
};
};
this.notificationsArrayMessages[chat_id] = notification;
this.scheduleNewMessageClose(notification,chat_id);
}
} catch(err) {
console.log(err);
};
};
this.scheduleNewMessageClose = function(notification, chat_id) {
var _that = this;
setTimeout(function() {
if (window.webkitNotifications) {
notification.cancel();
} else {
notification.close();
};
if (typeof _that.notificationsArrayMessages[chat_id] !== 'undefined') {
delete _that.notificationsArrayMessages[chat_id];
};
},10*1000);
};
this.playSoundNewAction = function(identifier,chat_id,nick,message,nt) {
if (this.backgroundChats.indexOf(parseInt(chat_id)) != -1) {
return ;
}
if (confLH.new_chat_sound_enabled == 1 && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && (identifier == 'active_chats' || identifier == 'bot_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered')) {
this.soundPlayedTimes = 0;
this.playNewChatAudio(identifier == 'active_chats' ? 'alert' : 'new_chat');
};
if(!$("textarea[name=ChatMessage]").is(":focus") && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && (identifier == 'active_chats' || identifier == 'bot_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered')) {
this.startBlinking();
};
var inst = this;
if ( (identifier == 'active_chats' || identifier == 'pending_chat' || identifier == 'transfer_chat' || identifier == 'unread_chat' || identifier == 'bot_chats' || identifier == 'pending_transfered') && (confLH.sn_off == 1 || $('#online-offline-user').text() == 'flash_on') && window.Notification && window.Notification.permission == 'granted') {
var notification = new Notification(nick, { icon: WWW_DIR_JAVASCRIPT_FILES_NOTIFICATION + '/notification.png', body: message, requireInteraction : true });
notification.onclick = function () {
if (identifier == 'active_chats' || identifier == 'pending_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered' || identifier == 'bot_chats') {
if ($('#tabs').length > 0) {
window.focus();
inst.startChat(chat_id, $('#tabs'), nt);
} else {
inst.startChatNewWindow(chat_id,'ChatRequest');
}
} else {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
};
notification.close();
};
if (identifier != 'pending_transfered') {
if (this.notificationsArray[chat_id] !== 'undefined') {
notification.close();
}
this.notificationsArray[chat_id] = notification;
};
};
if (identifier == 'transfer_chat' && confLH.show_alert_transfer == 1) {
if (confirm(confLH.transLation.transfered + "\n\n" + message)) {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
}
}
if (confLH.show_alert == 1) {
if (confirm(confLH.transLation.new_chat+"\n\n"+message)) {
if (identifier == 'pending_chat' || identifier == 'unread_chat' || identifier == 'pending_transfered' || identifier == 'bot_chats') {
if ($('#tabs').length > 0) {
window.focus();
inst.startChat(chat_id, $('#tabs'), nt);
} else {
inst.startChatNewWindow(chat_id,'ChatRequest');
}
} else {
inst.startChatNewWindowTransferByTransfer(chat_id, nt);
};
};
};
};
this.syncadmininterfacestatic = function()
{
try {
ee.emitEvent('angularLoadChatList');
} catch(err) {
};
};
this.addingUserMessage = false;
this.addUserMessageQueue = [];
this.addDelayedTimeout = null;
this.addmsgadmin = function (chat_id, message)
{
$('#unread-separator-'+chat_id).remove();
var textArea = $("#CSChatMessage-"+chat_id);
if (textArea.is("[readonly]")) {
return;
}
var pdata = {
msg	: message || textArea.val()
};
if (pdata.msg == '') {
return;
}
if (this.speechHandler !== false) {
this.speechHandler.messageSend();
};
message || textArea.val('');
var placeholerOriginal = textArea.attr('placeholder');
textArea.attr('placeholder',confLH.transLation.sending || 'Sending...');
if (textArea.hasClass('edit-mode')) {
pdata.msgid = textArea.attr('data-msgid');
$.postJSON(this.wwwDir + 'chat/updatemsg/' + chat_id, pdata , function(data){
textArea.attr('placeholder',placeholerOriginal);
if (data.error == 'f') {
textArea.removeClass('edit-mode');
textArea.removeAttr('data-msgid');
$('#msg-'+pdata.msgid).replaceWith(data.msg);
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
lhinst.addQuateHandler(chat_id);
return true;
}
});
} else {
var inst = this;
var messagesBlock = $('#messagesBlock-'+chat_id);
message || messagesBlock.append("<div class=\"message-row message-admin pending-storage\"><div class=\"msg-body\"><span class=\"material-icons lhc-spin\">autorenew</span>" + $("<div>").text(pdata.msg).html() + "</div></div>");
messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
if (this.addingUserMessage == false)
{
this.addingUserMessage = true;
$.postJSON(this.wwwDir + this.addmsgurl + chat_id, pdata , function(data) {
textArea.removeAttr('readonly').attr('placeholder',placeholerOriginal);
if (data.error == 'false') {
if (LHCCallbacks.addmsgadmin) {
LHCCallbacks.addmsgadmin(chat_id);
};
ee.emitEvent('chatAddMsgAdmin', [chat_id]);
if (data.r != '') {
$('#messagesBlock-'+chat_id).append(data.r).scrollTop($("#messagesBlock-"+chat_id).prop("scrollHeight"));
};
if (data.hold_removed === true) {
$('#hold-action-'+chat_id).removeClass('btn-outline-info');
} else if (data.hold_added === true) {
$('#hold-action-'+chat_id).addClass('btn-outline-info');
}
lhinst.syncadmincall();
} else {
textArea.attr('placeholder',placeholerOriginal).val(textArea.val() + ' ' + pdata.msg);
$('.pending-storage').first().remove();
var escaped = '<div style="margin:10px 10px 30px 10px;" class="alert alert-warning" role="alert">' + $("<div>").text(data.r).html() + '</div>';
$('#messagesBlock-'+chat_id).append(escaped).scrollTop($("#messagesBlock-"+chat_id).prop("scrollHeight"));
}
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
var elementAdd = inst.addUserMessageQueue.shift()
inst.addmsgadmin(elementAdd.chat_id,elementAdd.msg);
}
return true;
}).fail(function(respose) {
textArea.attr('placeholder',placeholerOriginal).val(textArea.val() + ' ' + pdata.msg);
var escaped = '<div style="margin:10px 10px 30px 10px;" class="alert alert-warning" role="alert">' + $("<div>").text('You have weak internet connection or the server has problems. Try to refresh the page or send the message again.' + (typeof respose.status !== 'undefined' ? ' Error code ['+respose.status+']' : '') + (typeof respose.responseText !== 'undefined' ? respose.responseText : '')).html() + '</div>';
$('#messagesBlock-'+chat_id).append(escaped).scrollTop($("#messagesBlock-"+chat_id).prop("scrollHeight"));
$('.pending-storage').first().remove();
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
var elementAdd = inst.addUserMessageQueue.shift()
inst.addmsgadmin(elementAdd.chat_id,elementAdd.msg);
}
});
} else {
textArea.attr('placeholder', placeholerOriginal);
this.addUserMessageQueue.push({'chat_id':chat_id,'msg':pdata.msg});
}
}
};
this.editPrevious = function(chat_id) {
var textArea = $('#CSChatMessage-'+chat_id);
if (textArea.val() == '') {
$.getJSON(this.wwwDir + 'chat/editprevious/'+chat_id, function(data){
if (data.error == 'f') {
textArea.val(data.msg);
textArea.attr('data-msgid',data.id);
textArea.addClass('edit-mode');
$('#msg-'+data.id).addClass('edit-mode');
if (LHCCallbacks.editPrevious) {
LHCCallbacks.editPrevious(chat_id, data);
}
}
});
}
};
this.editPreviousUser = function() {
var textArea = $('#CSChatMessage');
if (textArea.val() == '') {
$.getJSON(this.wwwDir + 'chat/editprevioususer/'+this.chat_id + '/' + this.hash, function(data){
if (data.error == 'f'){
textArea.val(data.msg);
textArea.attr('data-msgid',data.id);
textArea.addClass('edit-mode');
$('#msg-'+data.id).addClass('edit-mode');
if (LHCCallbacks.editPreviousUser) {
LHCCallbacks.editPreviousUser(data);
}
}
});
}
};
this.afterAdminChatInit = function (chat_id) {
if (LHCCallbacks.afterAdminChatInit) {
LHCCallbacks.afterAdminChatInit(chat_id);
}
};
this.afterUserChatInit = function () {
if (LHCCallbacks.afterUserChatInit) {
LHCCallbacks.afterUserChatInit();
}
};
this.afterChatWidgetInit = function () {
if (LHCCallbacks.afterChatWidgetInit) {
LHCCallbacks.afterChatWidgetInit();
};
};
this.getInputSelection = function(elem) {
if (typeof elem != "undefined") {
s = elem[0].selectionStart;
e = elem[0].selectionEnd;
return elem.val().substring(s, e);
} else {
return '';
}
}
this.handleBBCode = function(inst) {
var str = $(inst.attr('data-selector')).val();
var selection = this.getInputSelection($(inst.attr('data-selector')));
var bbcodeend = typeof inst.attr("data-bbcode-end") !== 'undefined' ?  inst.attr("data-bbcode-end") : inst.attr("data-bbcode");
if (selection.length > 0) {
$(inst.attr('data-selector')).val(str.replace(selection, "[" + inst.attr("data-bbcode") + "]" + selection + "[/" + bbcodeend + "]"));
} else {
$(inst.attr('data-selector')).val(str + "[" + inst.attr("data-bbcode") + "]" + "[/" + bbcodeend + "]");
}
return false;
}
this.addAdminChatFinished = function(chat_id, last_message_id, arg) {
var _that = this;
var $textarea = jQuery('#CSChatMessage-'+chat_id);
var cannedMessageSuggest = new LHCCannedMessageAutoSuggest({'chat_id': chat_id,'uppercase_enabled': confLH.auto_uppercase});
var colorPickerDom = document.getElementById('color-picker-chat-' + chat_id);
if (colorPickerDom !== null) {
var colorP = new ColorPicker({
dom: document.getElementById('color-picker-chat-' + chat_id),
value: '#0F0'
});
colorP.addEventListener('change', function (colorItem) {
$('#color-apply-'+chat_id).attr('data-bbcode','color='+colorP.getValue('hex'));
});
$('.downdown-menu-color-'+chat_id).on('click', function (e) {
if ($(this).parent().is(".show")) {
var target = $(e.target);
if (target.hasClass("keepopen") || target.parents(".keepopen").length){
return false;
} else {
return true;
}
}
});
$('.downdown-menu-color-'+chat_id+' .color-item').on('click',function () {
colorP.setValue($(this).attr('data-color'));
});
}
$textarea.bind('keydown', 'return', function (evt){
_that.addmsgadmin(chat_id);
ee.emitEvent('afterAdminMessageSent',[chat_id]);
$textarea[0].rows = 2;
return false;
});
$textarea.bind('keyup', 'up', function (evt){
_that.editPrevious(chat_id);
});
$textarea.bind('keyup', function (evt){
if ($textarea.val() == '' && evt.altKey && (evt.which == 38 || evt.which == 40)) {
if (confLH.new_dashboard == true) {
ee.emitEvent('activateNextTab',[chat_id,(evt.which == 38 ? true : false)]);
} else {
if (evt.which == 38) {
var tab = lhinst.smartTabFocus($('#tabs'),chat_id,{keep:true,up:true});
} else {
var tab = lhinst.smartTabFocus($('#tabs'),chat_id,{keep:true,up:false});
}
var parts = tab.split('chat-id-');
if (parts[1] && !isNaN(parts[1])) {
$('#chat-tab-link-'+parts[1]).click();
}
}
return ;
}
var ta = $textarea[0];
var maxrows = 30;
var lh = ta.clientHeight / ta.rows;
while (ta.scrollHeight > ta.clientHeight && !window.opera && ta.rows < maxrows) {
ta.style.overflow = 'hidden';
ta.rows += 1;
}
if (ta.scrollHeight > ta.clientHeight) ta.style.overflow = 'auto';
});
$messageBlock = $('#messagesBlock-'+chat_id);
$messageBlock.css('height',this.getLocalValue('lhc_mheight',confLH.defaultm_hegiht));
$messageBlock.data('resized',false);
$messageBlock.data('y', $messageBlock.outerHeight());
$messageBlock.bind('mouseup mousemove',function(event) {
var $this = jQuery(this);
if ($this.outerHeight() != $this.data('y')) {
if ($this.data('resized') == false) {
$this.css('height','1px');
$this.data('resized',true)
}
if (this.resize_timeout) {
clearTimeout(this.resize_timeout);
}
this.resize_timeout = setTimeout(function(){
_that.setLocalValue('lhc_mheight', $this.outerHeight());
$this.data('y', $this.outerHeight());
},100);
}
});
this.initTypingMonitoringAdmin(chat_id);
this.afterAdminChatInit(chat_id);
this.addSynchroChat(chat_id,last_message_id);
$messageBlock.prop('scrollTop',$messageBlock.prop('scrollHeight'));
this.startSyncAdmin();
if (arg === null || typeof arg !== 'object' || arg.indexOf('background') === -1) {
this.hideNotification(chat_id);
} else {
$('#chat-tab-link-'+chat_id).click(function() {
_that.removeBackgroundChat(parseInt(chat_id));
_that.hideNotification(parseInt(chat_id));
});
}
try {
if (localStorage) {
if (localStorage.getItem('lhc_rch') == 1) {
this.processCollapse(chat_id);
}
}
} catch(e) {};
$('#chat-tab-items-' + chat_id+' > li > a').click(function(){
ee.emitEvent('adminChatTabSubtabClicked', [chat_id,$(this)]);
});
$('#chat-write-button-'+chat_id).click(function() {
$('#CSChatMessage-'+chat_id).show().focus();
$(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary');
$('#chat-preview-button-'+chat_id).removeClass('btn-outline-primary').addClass('btn-outline-secondary');
$('#chat-preview-container-'+chat_id).hide();
});
$('#chat-preview-button-'+chat_id).click(function(){
$('#chat-preview-container-'+chat_id).html('...').show();
$('#CSChatMessage-'+chat_id).hide();
$(this).removeClass('btn-outline-secondary').addClass('btn-outline-primary');
$('#chat-write-button-'+chat_id).removeClass('btn-outline-primary').addClass('btn-outline-secondary');
jQuery.post(WWW_DIR_JAVASCRIPT +'chat/previewmessage', {msg_body: true, 'msg' : $('#CSChatMessage-'+chat_id).val()}, function(data){
$('#chat-preview-container-'+chat_id).html(data);
});
});
ee.emitEvent('adminChatLoaded', [chat_id,last_message_id,arg]);
};
this.removeBackgroundChat = function(chat_id) {
var index = this.backgroundChats.indexOf(parseInt(chat_id));
if (index !== -1) {
delete this.backgroundChats[index];
};
};
this.getLocalValue = function(variable,defaultValue) {
try {
if (localStorage) {
var value = localStorage.getItem(variable);
if (value !== null) {
return value;
} else {
return defaultValue;
}
}
} catch(e) {}
return defaultValue;
};
this.executeExtension = function (extension, params) {
if (document.getElementById('ext-' + extension) === null) {
var th = document.getElementsByTagName('head')[0];
var s = document.createElement('script');
var date = new Date();
s.setAttribute('type','text/javascript');
s.setAttribute('src', WWW_DIR_LHC_WEBPACK_ADMIN.replace('/design/defaulttheme/js/admin/dist/','') + '/extension/' + extension + '/design/' + extension + 'theme/js/'  + extension + '.legacy.js?v=' + ("" + date.getFullYear() + date.getMonth() + date.getDate()) );
s.setAttribute('id','ext-' + extension);
th.appendChild(s);
s.onreadystatechange = s.onload = function() {
ee.emitEvent(extension + '.init', [params]);
};
} else {
ee.emitEvent(extension + '.init', [params]);
}
}
this.setLocalValue = function(key,val){
try {
if (localStorage) {
localStorage.setItem(key,val);
}
} catch(e) {}
};
this.hideNotification = function(chat_id)
{
chat_id = parseInt(chat_id);
if (typeof this.notificationsArray[chat_id] !== 'undefined' && this.backgroundChats.indexOf(chat_id) == -1) {
this.notificationsArray[chat_id].close();
delete this.notificationsArray[chat_id];
};
clearTimeout(this.soundIsPlaying);
}
this.showMyPermissions = function(user_id) {
$.get(this.wwwDir + 'permission/getpermissionsummary/'+user_id, function(data){
$('#permissions-summary').html(data);
});
};
this.addmsguserchatbox = function (chat_id)
{
var nickCurrent = false;
var pdata = {
msg	: $("#CSChatMessage").val(),
nick: $("#CSChatNick").val()
};
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
$('#CSChatMessage').val('');
var inst = this;
$.postJSON(this.wwwDir + this.addmsgurluserchatbox + this.chat_id + '/' + this.hash + modeWindow + this.appendSyncArgument, pdata , function(data) {
if (data.error == 'f') {
if (LHCCallbacks.addmsguserchatbox) {
LHCCallbacks.addmsguserchatbox(inst,{chat_id:inst.chat_id,data:data});
};
inst.syncusercall();
} else {
alert(data.or);
}
});
if (nickCurrent != $("#CSChatNick").val() && !!window.postMessage && parent) {
parent.postMessage('lhc_chb:nick:'+ $("#CSChatNick").val(), '*');
nickCurrent = $("#CSChatNick").val();
}
};
this.updateMessageRow = function(msgid){
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
$.getJSON(this.wwwDir + 'chat/getmessage/' + this.chat_id + '/' + this.hash + '/'+ msgid + modeWindow, function(data) {
if (data.error == 'f') {
$('#msg-'+msgid).replaceWith(data.msg);
$('#msg-'+msgid).addClass('bg-success');
setTimeout(function(){
$('#msg-'+msgid).removeClass('bg-success');
},2000);
}
});
};
this.updateMessageRowAdmin = function(chat_id, msgid){
$.getJSON(this.wwwDir + 'chat/getmessageadmin/' + chat_id + '/' + msgid, function(data) {
if (data.error == 'f') {
var messagesBlock = $('#messagesBlock-' + chat_id);
var needScroll = (messagesBlock.prop('scrollTop') + messagesBlock.height() + 30) > messagesBlock.prop('scrollHeight');
$('#msg-'+msgid).replaceWith(data.msg);
lhinst.addQuateHandler(chat_id);
$('#msg-'+msgid).addClass('bg-success');
setTimeout(function(){
$('#msg-'+msgid).removeClass('bg-success');
},2000);
needScroll && messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
}
});
};
this.addmsguser = function (focusArea)
{
if (LHCCallbacks.addmsguserbefore) {
LHCCallbacks.addmsguserbefore(this);
};
var textArea = $("#CSChatMessage");
var pdata = {
msg	: textArea.val()
};
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
textArea.val('');
var inst = this;
if ($('#lhc-mic-icon').length > 0){
$('#lhc-send-icon').hide();
$('#lhc-mic-icon').show();
$('#voice-control-message').hide();
}
try {
if (sessionStorage) {
sessionStorage.setItem('lhc_ttxt','');
};
} catch(e) {}
if (textArea.hasClass('edit-mode')) {
pdata.msgid = textArea.attr('data-msgid');
$.postJSON(this.wwwDir + 'chat/updatemsguser/' + this.chat_id + '/' + this.hash + modeWindow, pdata , function(data){
if (data.error == 'f') {
textArea.removeClass('edit-mode');
textArea.removeAttr('data-msgid');
$('#msg-'+pdata.msgid).replaceWith(data.msg);
return true;
}
});
} else {
var messagesBlock = $('#messagesBlock');
messagesBlock.append("<div class=\"message-row response pending-storage\"><div class=\"msg-body\">" + $("<div>").text(pdata.msg).html() + "</div></div>");
messagesBlock.scrollTop(messagesBlock.prop('scrollHeight'));
if (this.addingUserMessage == false && this.addUserMessageQueue.length == 0)
{
this.addingUserMessage = true;
$.postJSON(this.wwwDir + this.addmsgurluser + this.chat_id + '/' + this.hash + modeWindow, pdata , function(data) {
if (data.error == 'f') {
if (LHCCallbacks.addmsguser) {
LHCCallbacks.addmsguser(inst,data);
};
inst.syncusercall();
} else {
$('.pending-storage').remove();
$('#CSChatMessage').val(pdata.msg);
var instStatus = $('#id-operator-typing');
instStatus.html(data.r);
instStatus.css('visibility','visible');
setTimeout(function(){
if (inst.operatorTyping == false){
$('#id-operator-typing').css('visibility','hidden');
}
},3000);
}
inst.addingUserMessage = false;
}).fail(function(respose) {
$('#CSChatMessage').val(textArea.val() + ' ' + pdata.msg);
var instStatus = $('#id-operator-typing');
instStatus.html('You have weak internet connection or the server has problems. Try to send the message again.');
instStatus.css('visibility','visible');
setTimeout(function(){
if (inst.operatorTyping == false) {
$('#id-operator-typing').html('').css('visibility','hidden');
}
},5000);
$('.pending-storage').remove();
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
inst.addDelayedMessage();
}
});
} else {
this.addUserMessageQueue.push({'retries':0, 'pdata':pdata,'url':this.wwwDir + this.addmsgurluser + this.chat_id + '/' + this.hash + modeWindow});
clearTimeout(this.addDelayedTimeout);
this.addDelayedTimeout = setTimeout(function(){
inst.addDelayedMessage();
},50);
}
}
};
this.addMessagesToStore = function(messages)
{
var modeWindow = this.isWidgetMode == true ? '/(mode)/widget' : '';
var arrayLength = messages.length;
for (var i = 0; i < arrayLength; i++) {
this.addUserMessageQueue.push({'retries':0,'pdata':{msg : messages[i]},'url':this.wwwDir + this.addmsgurluser + this.chat_id + '/' + this.hash + modeWindow});
}
this.addDelayedMessage();
};
this.addDelayedMessage = function()
{
var inst = this;
if (this.addingUserMessage == false) {
if (this.addUserMessageQueue.length > 0)
{
var elementAdd = this.addUserMessageQueue.shift();
this.addingUserMessage = true;
var messagesData = [];
messagesData.push(elementAdd.pdata.msg);
var arrayLength = this.addUserMessageQueue.length;
for (var i = 0; i < arrayLength; i++) {
messagesData.push(this.addUserMessageQueue[i].pdata.msg);
};
this.addUserMessageQueue = [];
$.postJSON(elementAdd.url, {msg:messagesData.join("[[msgitm]]")} , function(data) {
if (data.error == 'f') {
if (LHCCallbacks.addmsguser) {
LHCCallbacks.addmsguser(inst,data);
};
inst.syncusercall();
}
inst.addingUserMessage = false;
if (inst.addUserMessageQueue.length > 0) {
clearTimeout(inst.addDelayedTimeout);
inst.addDelayedMessage();
}
}).fail(function () {
inst.addingUserMessage = false;
});
}
} else {
clearTimeout(this.addDelayedTimeout);
this.addDelayedTimeout = setTimeout(function(){
inst.addDelayedMessage();
},50);
}
}
this.startSyncAdmin = function()
{
if (this.isSinchronizing == false)
{
this.isSinchronizing = true;
this.syncadmincall();
}
};
this.disableChatSoundAdmin = function(inst)
{
if (inst.prop('tagName') != 'I') {
inst = inst.find('> i.material-icons');
}
if (inst.text() == 'volume_off'){
$.get(this.wwwDir+  'user/setsettingajax/chat_message/1');
confLH.new_message_sound_admin_enabled = 1;
inst.text('volume_up');
} else {
$.get(this.wwwDir+  'user/setsettingajax/chat_message/0');
confLH.new_message_sound_admin_enabled = 0;
inst.text('volume_off');
}
return false;
};
this.disableNewChatSoundAdmin = function(inst)
{
if (inst.prop('tagName') != 'I') {
inst = inst.find('> i.material-icons');
}
if (inst.text() == 'volume_off'){
$.get(this.wwwDir+  'user/setsettingajax/new_chat_sound/1');
confLH.new_chat_sound_enabled = 1;
inst.text('volume_up');
} else {
$.get(this.wwwDir+  'user/setsettingajax/new_chat_sound/0');
confLH.new_chat_sound_enabled = 0;
inst.text('volume_off');
}
return false;
};
this.changeUserSettings = function(attr,value){
$.get(this.wwwDir+  'user/setsettingajax/'+attr+'/'+value);
};
this.changeUserSettingsIndifferent = function(attr,value){
$.get(this.wwwDir+  'user/setsettingajax/'+attr+'/'+encodeURIComponent(value)+'/(indifferent)/true');
};
this.switchToOfflineForm = function(){
var form = $('#form-start-chat');
form.attr('action',$('#form-start-chat').attr('action')+'/(switchform)/true/(offline)/true/(leaveamessage)/true/(department)/'+$('#id_DepartamentID').val());
form.submit();
return false;
};
this.changeStatusAction = function(form,chat_id){
var inst = this;
$.postJSON(form.attr('action'),form.serialize(), function(data) {
if (data.error == 'false') {
$('#myModal').modal('hide');
inst.updateVoteStatus(chat_id);
if (data.is_owner === true) {
$('#CSChatMessage-'+chat_id).attr('placeholder','');
$('#CSChatMessage-'+chat_id).focus();
}
} else {
alert(data.result);
}
});
return false;
};
this.submitModalForm = function(form){
var inst = this;
$.post(form.attr('action'),form.serialize(), function(data) {
var styleOriginal = $('#myModal > .modal-dialog')[0].style.cssText;
$('#myModal').html(data);
$('#myModal > .modal-dialog')[0].style.cssText = styleOriginal;
});
return false;
};
this.disableChatSoundUser = function(inst)
{
if (inst.find('> i').text() == 'volume_off') {
$.get(this.wwwDir+  'user/setsettingajax/chat_message/1');
confLH.new_message_sound_user_enabled = 1;
inst.find('> i').text('volume_up');
} else {
$.get(this.wwwDir+  'user/setsettingajax/chat_message/0');
confLH.new_message_sound_user_enabled = 0;
inst.find('> i').text('volume_off');
};
if (!!window.postMessage && parent) {
if (inst.find('> i').text() == 'volume_off') {
parent.postMessage("lhc_ch:s:0", '*');
} else {
parent.postMessage("lhc_ch:s:1", '*');
}
};
return false;
};
this.pendingMessagesToStore = [];
this.prestartChat = function(timestamp,inst) {
if (inst.find('.form-protected').length == 0) {
if (inst.attr('lhc-captcha-submitted') != 1) {
inst.attr('lhc-captcha-submitted',1);
inst.find('input[type="submit"]').attr('disabled','disabled');
$.getJSON(this.wwwDir + 'captcha/captchastring/form/'+timestamp, function(data) {
inst.append('<input type="hidden" value="'+timestamp+'" name="captcha_'+data.result+'" /><input type="hidden" value="'+timestamp+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />');
inst.submit();
});
var keyUpStarted = inst.attr('key-up-started') == 1;
if (keyUpStarted == true) {
jQuery('<div/>', {
'class': 'message-row response',
text: $('#id_Question').val()
}).appendTo('#messagesBlock').prepend('<span class="usr-tit vis-tit">'+visitorTitle+'</span>');
$('#messagesBlock').scrollTop($('#messagesBlock').prop('scrollHeight'));
this.pendingMessagesToStore.push($('#id_Question').val());
$('#id_Question').val('');
}
} else {
if ($('#messagesBlock').length > 0) {
jQuery('<div/>', {
'class': 'message-row response',
text: $('#id_Question').val()
}).appendTo('#messagesBlock').prepend('<span class="usr-tit vis-tit">'+visitorTitle+'</span>');
$('#messagesBlock').scrollTop($('#messagesBlock').prop('scrollHeight'));
};
this.pendingMessagesToStore.push($('#id_Question').val());
$('#id_Question').val('');
}
return false;
} else {
if (inst.find('#hasFormExtraField').length == 1) {
return true;
}
if (inst.attr('lhc-form-submitted') != 1) { // Form is not submitted
inst.attr('lhc-form-submitted',1);
var instSelf = this;
var keyUpStarted = inst.attr('key-up-started') == 1;
if (keyUpStarted == true) {
inst.append('<input type="hidden" value="1" name="keyUpStarted" />');
}
$.post(inst.attr('action'),inst.serialize(), function (response) {
var valueQuestion = $('#id_Question').val();
try {
if (sessionStorage) {
sessionStorage.setItem('lhc_ttxt',valueQuestion);
};
} catch(e) {}
var scripts = $('head > script');
var headCurrent =  $('head');
var currentSripts = [];
$('head > script').each( function() {
var script = $(this);
if (script.attr('src') !== undefined) {
currentSripts.push(script.attr('src'));
}
});
$('<div>').html(response).find('> script').each(function(){
var script = $(this);
if (script.attr('src') === undefined) {
headCurrent.append(script);
} else {
if (currentSripts.indexOf(script.attr('src')) == -1) { // Add JS only if it's new
headCurrent.append("<script src=\""+script.attr('src')+"\"></script>");
}
}
});
paramsDocument = "<script>lhinst.addMessagesToStore("+JSON.stringify(instSelf.pendingMessagesToStore)+")</script>";
$('#widget-layout').html($('<div>').html(response).find('#widget-layout').html());
$('#widget-layout-js').html($('<div>').html(response).find('#widget-layout-js').html()+paramsDocument);
});
if (keyUpStarted == false) {
$('#id_Question').val('');
}
} else {
if ($('#messagesBlock').length > 0) {
jQuery('<div/>', {
'class': 'message-row response',
text: $('#id_Question').val()
}).appendTo('#messagesBlock').prepend('<span class="usr-tit vis-tit">'+visitorTitle+'</span>');
$('#messagesBlock').scrollTop($('#messagesBlock').prop('scrollHeight'));
};
this.pendingMessagesToStore.push($('#id_Question').val());
$('#id_Question').val('');
}
}
return false;
};
this.addCaptcha = function(timestamp,inst) {
if (inst.find('.form-protected').length == 0){
inst.find('input[type="submit"]').attr('disabled','disabled');
$.getJSON(this.wwwDir + 'captcha/captchastring/form/'+timestamp, function(data) {
inst.append('<input type="hidden" value="'+timestamp+'" name="captcha_'+data.result+'" /><input type="hidden" value="'+timestamp+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />');
inst.submit();
});
return false;
};
return true;
};
this.setSubject = function(inst, chat_id) {
$('#subject-message-'+chat_id).text('...');
$.postJSON(this.wwwDir + 'chat/subject/'+chat_id + '/(subject)/' + inst.val() + '/(status)/' + inst.is(':checked'),{'update': true}, function(data) {
lhinst.updateVoteStatus(chat_id);
$('#subject-message-'+chat_id).text(data.message);
});
}
this.addCaptchaSubmit = function(timestamp,inst) {
if (inst.find('.form-protected').length == 0) {
inst.find('input[type="submit"]').attr('disabled','disabled');
inst.find('#ChatSendButtonContainer').remove();
inst.find('#id_Question').attr('readonly','readonly');
if (typeof formSubmitted !== 'undefined') {
formSubmitted = true;
}
$.getJSON(this.wwwDir + 'captcha/captchastring/form/'+timestamp, function(data) {
inst.append('<input type="hidden" value="'+timestamp+'" name="captcha_'+data.result+'" /><input type="hidden" value="'+timestamp+'" name="tscaptcha" /><input type="hidden" class="form-protected" value="1" />');
if ( !! window.FormData) {
try {
var formData = new FormData(inst[0]);
var xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function (evt) {
var status, text, readyState;
try {
readyState = evt.target.readyState;
text = evt.target.responseText;
status = evt.target.status;
}
catch(e) {
return;
}
if (readyState == 4 && status == '200' && evt.target.responseText) {
var headers = xhr.getResponseHeader("Content-Type");
if (headers.indexOf('application/json') == -1) {
$('#widget-content-body').html(evt.target.responseText);
} else {
location.replace(jQuery.parseJSON(evt.target.responseText)['location']);
}
}
}, false);
var action = inst.attr('action');
if (action != '') {
xhr.open('POST', action + '/(ajaxmode)/true', true);
} else {
xhr.open('POST', document.location + '&ajaxmode=true', true);
}
xhr.send(formData);
} catch(e) {
return false;
}
} else {
inst.submit();
}
});
return false;
};
return false;
};
this.deleteChatfile = function(file_id){
$.postJSON(this.wwwDir + 'file/deletechatfile/' + file_id, function(data){
if (data.error == 'false') {
$('#file-id-'+file_id).remove();
} else {
alert(data.result);
}
});
};
this.chooseFile = function () {
if (document.getElementById('fileupload')) {
document.getElementById('fileupload').click();
}
}
this.enableFileUpload = function () {
$.getJSON(this.wwwDir + 'file/fileoptions/' + this.chat_id + '/' + this.hash, function(data){
$('#ChatMessageContainer .dropdown-menu .flex-row').prepend(data.html);
data.options.ft_us = new RegExp('(\.|\/)(' +data.options.ft_us + ')$','i');
lhinst.addFileUserUpload(data.options);
});
}
this.addFileUserUpload = function(data_config) {
$('#fileupload').fileupload({
url: this.wwwDir + 'file/uploadfile/'+data_config.chat_id+'/'+data_config.hash,
dataType: 'json',
add: function(e, data) {
var uploadErrors = [];
var acceptFileTypes = data_config.ft_us;
if (!(acceptFileTypes.test(data.originalFiles[0]['type']) || acceptFileTypes.test(data.originalFiles[0]['name']))) {
uploadErrors.push(data_config.ft_msg);
};
if(data.originalFiles[0]['size'] > data_config.fs) {
uploadErrors.push(data_config.fs_msg);
};
if(uploadErrors.length > 0) {
alert(uploadErrors.join("\n"));
} else {
data.submit();
};
},
done: function(e,data) {
var response = data.response();
if (response != undefined && response.result != undefined && response.result.error == 'true' && response.result.error_msg != undefined) {
alert(response.result.error_msg);
}
if (LHCCallbacks.addFileUserUpload) {
LHCCallbacks.addFileUserUpload(data_config.chat_id);
}
},
progressall: function (e, data) {
var progress = parseInt(data.loaded / data.total * 100, 10);
$('#id-operator-typing').css('visibility','visible');
$('#id-operator-typing').html(progress+'%');
}}).prop('disabled', !$.support.fileInput)
.parent().addClass($.support.fileInput ? undefined : 'disabled');
};
this.addFileUserUploadOnline = function(data_config,callback) {
var _this = this;
$('#fileuploadonline').fileupload({
url: this.wwwDir + 'file/uploadfileonline/'+data_config.online_user_vid,
dataType: 'json',
add: function(e, data) {
var uploadErrors = [];
var acceptFileTypes = data_config.ft_us;
if (!(acceptFileTypes.test(data.originalFiles[0]['type']) || acceptFileTypes.test(data.originalFiles[0]['name']))) {
uploadErrors.push(data_config.ft_msg);
};
if(data.originalFiles[0]['size'] > data_config.fs) {
uploadErrors.push(data_config.fs_msg);
};
if(uploadErrors.length > 0) {
alert(uploadErrors.join("\n"));
} else {
data.submit();
};
},
done: function(e,data) {
_this.updateOnlineFilesUser(data_config.online_user_vid);
if (callback) {
callback(data_config.online_user_vid);
};
},
progressall: function (e, data) {
var progress = parseInt(data.loaded / data.total * 100, 10);
$('#upload-status-user-online').html(progress+'%');
}}).prop('disabled', !$.support.fileInput)
.parent().addClass($.support.fileInput ? undefined : 'disabled');
};
this.updateChatFiles = function(chat_id) {
$.postJSON(this.wwwDir + 'file/chatfileslist/' + chat_id, function(data){
$('#chat-files-list-'+chat_id).html(data.result);
});
};
this.updateOnlineFiles = function(online_user_id) {
$.postJSON(this.wwwDir + 'file/onlinefileslist/' + online_user_id, function(data){
$('#online-user-files-list-'+online_user_id).html(data.result);
});
};
this.updateOnlineFilesUser = function(online_user_vid) {
$.postJSON(this.wwwDir + 'file/useronlinefileslist/' + online_user_vid, function(data){
$('#user-online-files-list').html(data.result);
});
};
this.addFileUpload = function(data_config) {
$('#fileupload-'+data_config.chat_id).fileupload({
url: this.wwwDir + 'file/uploadfileadmin/'+data_config.chat_id,
dataType: 'json',
add: function(e, data) {
var uploadErrors = [];
var acceptFileTypes = data_config.ft_op;
if(!(acceptFileTypes.test(data.originalFiles[0]['type']) || acceptFileTypes.test(data.originalFiles[0]['name']))) {
uploadErrors.push(data_config.ft_msg);
};
if(data.originalFiles[0]['size'] > data_config.fs) {
uploadErrors.push(data_config.fs_msg);
};
if(uploadErrors.length > 0) {
alert(uploadErrors.join("\n"));
} else {
data.submit();
};
},
done: function(e,data) {
var response = data.response();
if (response != undefined && response.result != undefined && response.result.error == 'true' && response.result.error_msg != undefined) {
alert(response.result.error_msg);
} else {
lhinst.updateChatFiles(data_config.chat_id);
var txtArea = $('#CSChatMessage-'+data_config.chat_id);
var txtValue = jQuery.trim(txtArea.val());
txtArea.val(txtValue + (txtValue != '' ? "\n" : "") + response.result.msg + "\n");
}
if (LHCCallbacks.addFileUpload) {
LHCCallbacks.addFileUpload(data_config.chat_id);
}
},
dropZone: $('#CSChatMessage-'+data_config.chat_id),
pasteZone: $('#CSChatMessage-'+data_config.chat_id),
progressall: function (e, data) {
var progress = parseInt(data.loaded / data.total * 100, 10);
$('#user-is-typing-'+data_config.chat_id).css('visibility','visible');
$('#user-is-typing-'+data_config.chat_id).html(progress+'%');
}}).prop('disabled', !$.support.fileInput)
.parent().addClass($.support.fileInput ? undefined : 'disabled');
};
this.addFileUploadOnlineUser = function(data_config, callbackUploaded) {
var _this = this;
$('#fileupload-online-user-'+data_config.online_user_id).fileupload({
url: this.wwwDir + 'file/uploadfileadminonlineuser/'+data_config.online_user_id,
dataType: 'json',
add: function(e, data) {
var uploadErrors = [];
var acceptFileTypes = data_config.ft_op;
if(!(acceptFileTypes.test(data.originalFiles[0]['type']) || acceptFileTypes.test(data.originalFiles[0]['name']))) {
uploadErrors.push(data_config.ft_msg);
};
if(data.originalFiles[0]['size'] > data_config.fs) {
uploadErrors.push(data_config.fs_msg);
};
if(uploadErrors.length > 0) {
alert(uploadErrors.join("\n"));
} else {
data.submit();
};
},
done: function(e,data) {
if (callbackUploaded) {
callbackUploaded(data_config.online_user_id);
};
_this.updateOnlineFiles(data_config.online_user_id);
},
dropZone: $('#drop-zone-online-user-'+data_config.online_user_id),
progressall: function (e, data) {
var progress = parseInt(data.loaded / data.total * 100, 10);
$('#upload-status-admin-'+data_config.online_user_id).html(progress+'%');
}}).prop('disabled', !$.support.fileInput)
.parent().addClass($.support.fileInput ? undefined : 'disabled');
};
this.addExecutionCommand = function(online_user_id,operation) {
$.postJSON(this.wwwDir + 'chat/addonlineoperation/' + online_user_id,{'operation':operation}, function(data){
if (LHCCallbacks.addExecutionCommand) {
LHCCallbacks.addExecutionCommand(online_user_id);
};
});
if (operation == 'lhc_screenshot') {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
var inst = this;
setTimeout(function(){
inst.updateScreenshotOnline(online_user_id);
},15000);
};
};
this.addRemoteCommand = function(chat_id,operation) {
$.postJSON(this.wwwDir + 'chat/addoperation/' + chat_id,{'operation':operation}, function(data){
if (LHCCallbacks.addRemoteCommand) {
LHCCallbacks.addRemoteCommand(chat_id);
};
if (data.error == 'true' && data.errors != null) {
alert(data.errors.join("\n"));
}
});
if (operation == 'lhc_screenshot') {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
var inst = this;
setTimeout(function(){
inst.updateScreenshot(chat_id);
},5000);
};
};
this.addRemoteOnlineCommand = function(online_user_id,operation) {
$.postJSON(this.wwwDir + 'chat/addonlineoperationiframe/' + online_user_id,{'operation':operation}, function(data){
if (LHCCallbacks.addRemoteOnlineCommand) {
LHCCallbacks.addRemoteOnlineCommand(online_user_id);
};
});
};
this.updateScreenshot = function(chat_id) {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
$.get(this.wwwDir + 'chat/checkscreenshot/' + chat_id,function(data){
$('#user-screenshot-container-'+chat_id).html(data);
$('#user-screenshot-container-'+chat_id).removeClass('screenshot-pending');
});
};
this.updateScreenshotOnline = function(online_id) {
$('#user-screenshot-container').html('').addClass('screenshot-pending');
$.get(this.wwwDir + 'chat/checkscreenshotonline/' + online_id,function(data){
$('#user-screenshot-container-'+online_id).html(data);
$('#user-screenshot-container-'+online_id).removeClass('screenshot-pending');
});
};
this.eNick = function() {
lhc.revealModal({'url':WWW_DIR_JAVASCRIPT+'chat/editnick/'+this.chat_id+'/'+this.hash})
}
this.enableVisitorEditor = function()
{
$('#ChatMessageContainer').removeClass('hide');
$('#CSChatMessage').focus();
}
this.disableVisitorEditor = function()
{
$('#ChatMessageContainer').addClass('hide');
}
this.buttonClicked = function(payload, id, btn, notHide) {
if (btn.attr("data-no-change") == undefined) {
btn.attr("disabled","disabled");
btn.prepend("<i class=\"material-icons lhc-spin\">loop</i>");
}
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
this.syncroRequestSend = true;
clearTimeout(this.userTimeout);
$.get(this.wwwDir + 'genericbot/buttonclicked/'+this.chat_id+'/'+this.hash,{payload: payload, id : id, processed : (typeof notHide === 'undefined' || notHide == false)},function(data){
if (typeof notHide === 'undefined' || notHide === false){
$('.meta-message-'+id).remove();
}
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.forceBottomScroll = true;
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
}).fail(function() {
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
});
lhinst.focusUserText();
}
this.editGenericStep = function(step, id) {
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
this.syncroRequestSend = true;
clearTimeout(this.userTimeout);
$.get(this.wwwDir + 'genericbot/buttonclicked/'+this.chat_id+'/'+this.hash+'/(type)/editgenericstep',{payload : step,id : id},function(data){
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.forceBottomScroll = true;
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
}).fail(function() {
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
});
lhinst.focusUserText();
}
this.updateTriggerClicked = function(payload, id, btn, notHide) {
if (btn.attr("data-no-change") == undefined) {
btn.attr("disabled","disabled");
btn.prepend("<i class=\"material-icons lhc-spin\">loop</i>");
}
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
this.syncroRequestSend = true;
clearTimeout(this.userTimeout);
$.get(this.wwwDir + 'genericbot/buttonclicked/'+this.chat_id+'/'+this.hash+'/(type)/triggerclicked',{payload: payload, id : id, processed : (typeof notHide === 'undefined' || notHide == false)},function(data) {
if (typeof notHide === 'undefined' || notHide === false){
$('.meta-message-'+id).remove();
}
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.forceBottomScroll = true;
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
}).fail(function() {
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
});
lhinst.focusUserText();
}
this.updateChatClicked = function(payload, id, btn, notHide) {
if (btn.attr("data-no-change") == undefined) {
btn.attr("disabled","disabled");
btn.prepend("<i class=\"material-icons lhc-spin\">loop</i>");
}
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.syncroRequestSend = true;
clearTimeout(this.userTimeout);
$.get(this.wwwDir + 'genericbot/updatebuttonclicked/'+this.chat_id+'/'+this.hash,{payload: payload, id : id, processed : (typeof notHide === 'undefined' || notHide == false) },function(data){
if (typeof notHide === 'undefined' || notHide === false){
$('.meta-message-'+id).remove();
}
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.forceBottomScroll = true;
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
}).fail(function() {
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
});
lhinst.focusUserText();
}
this.dropdownClicked = function(id, btn) {
if (btn.attr("data-no-change") == undefined) {
btn.attr("disabled","disabled");
btn.prepend("<i class=\"material-icons lhc-spin\">loop</i>");
}
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
if ($('#generic_list-'+id).val() != '') {
this.syncroRequestSend = true;
clearTimeout(this.userTimeout);
$.get(this.wwwDir + 'genericbot/buttonclicked/'+this.chat_id+'/'+this.hash+'/(type)/valueclicked',{payload: $('#id_generic_list-'+id).val(), id : id},function(data){
$('.meta-message-'+id).remove();
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.scrollTop(scrollHeight);
lhinst.forceBottomScroll = true;
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
}).fail(function() {
lhinst.syncroRequestSend = false;
lhinst.enableVisitorEditor();
lhinst.syncusercall();
});
lhinst.focusUserText();
} else {
alert('Please choose!');
}
}
this.focusUserText = function() {
$('#CSChatMessage').focus();
}
this.delayQueue = [];
this.delayed = false;
this.intervalPending = null;
this.setDelay = function(params) {
var id = params['id'];
var duration = params['duration'];
var delay = params['delay'];
var untillMessage = params['untill_message'];
if (delay > 0) {
$('#msg-'+id).addClass('hide');
}
if (untillMessage == true && $('#msg-'+id).nextUntil('message-admin').length > 0) {
return;
}
setTimeout(function () {
if (lhinst.delayed == false) {
if (untillMessage == true) {
clearInterval(lhinst.intervalPending);
lhinst.intervalPending = setInterval(function() {
if ($('#msg-'+id).nextUntil('message-admin').length > 0) {
lhinst.unhideDelayed(id);
$('#messagesBlock > #msg-'+id).remove();
clearInterval(lhinst.intervalPending);
} else {
if (!$('#msg-'+id).hasClass('meta-hider'))
{
$('#msg-'+id).addClass('meta-hider message-row-typing');
$('#msg-'+id).removeClass('hide');
$('#msg-'+id+' .msg-body').removeClass('hide');
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.meta-auto-hide').hide();
messageBlock.find('.message-row').last().find('.meta-auto-hide').show();
scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.pending-storage').remove();
messageBlock.scrollTop(scrollHeight + 2000);
}
}
},500);
} else {
lhinst.delayed = true;
$('#msg-'+id).addClass('meta-hider message-row-typing').nextUntil('meta-hider').addClass('hide');
setTimeout(function () {
lhinst.unhideDelayed(id);
}, duration * 1000);
$('#msg-'+id).removeClass('hide');
$('#msg-'+id+' .msg-body').removeClass('hide');
if (delay > 0) {
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.meta-auto-hide').hide();
messageBlock.find('.message-row').last().find('.meta-auto-hide').show();
scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.pending-storage').remove();
messageBlock.scrollTop(scrollHeight + 2000);
}
}
} else {
lhinst.delayQueue.push({'id' : id, 'delay' : duration});
}
},delay*1000);
}
this.sendHTML = function (id, options) {
if (typeof(parent) !== 'undefined' && window.location !== window.parent.location) {
parent.postMessage('lhc_html_snippet:' + id + ':' + options.type + '_' + options.id, '*');
}
}
this.unhideDelayed = function (id) {
var msg = $('#messagesBlock > #msg-'+id);
msg.nextUntil('.meta-hider').removeClass('hide');
msg.remove();
var messageBlock = $('#messagesBlock');
var scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.meta-auto-hide').hide();
messageBlock.find('.message-row').last().find('.meta-auto-hide').show();
scrollHeight = messageBlock.prop("scrollHeight");
messageBlock.find('.pending-storage').remove();
messageBlock.scrollTop(scrollHeight+2000);
if (this.delayQueue.length > 0) {
var data = lhinst.delayQueue.pop();
setTimeout(function () {
lhinst.unhideDelayed(data.id);
}, data.delay * 1000);
$('#msg-'+data.id).removeClass('hide');
$('#msg-' + data.id + ' .msg-body').removeClass('hide');
} else {
lhinst.delayed = false;
}
}
this.gmaps_loading = false;
this.queue_render = [];
this.showMessageLocation = function(id,lat,lon) {
var myLatLng = {lat: lat, lng: lon};
if (this.gmaps_loaded == true) {
var map = new google.maps.Map(document.getElementById('msg-location-' + id), {
zoom: 13,
center: myLatLng
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: lat+","+lon
});
} else {
if (this.gmaps_loading == false) {
this.gmaps_loading = true;
var po = document.createElement('script'); po.type = 'text/javascript';
po.async = true;
po.src = 'https://maps.googleapis.com/maps/api/js?key='+confLH.gmaps_api_key+"&callback=chatMapLoaded";
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(po, s);
lhinst.queue_render.push({'id':id,'lat':lat,'lon':lon});
} else {
lhinst.queue_render.push({'id':id,'lat':lat,'lon':lon});
}
}
}
}
function chatMapLoaded()
{
if (lhinst.queue_render.length > 0){
lhinst.gmaps_loaded = true;
var i = lhinst.queue_render.pop();
var myLatLng = {lat: i.lat, lng: i.lon};
var map = new google.maps.Map(document.getElementById('msg-location-' + i.id), {
zoom: 13,
center: myLatLng
});
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: i.lat+","+i.lon
});
if (lhinst.queue_render.length > 0) {
chatMapLoaded();
}
}
}
var lhinst = new lh();
lhinst.playPreloadSound();
function preloadSound() {
lhinst.playPreloadSound();
jQuery(document).off("click", preloadSound);
jQuery(document).off("touchstart", preloadSound);
}
jQuery(document).on("click", preloadSound);
jQuery(document).on("click", function(){
lhinst.hidePopover();
});
jQuery(document).on("touchstart", preloadSound);
function gMapsCallback(){
lhinst.gmaps_loaded = true;
var $mapCanvas = $('#map_canvas');
var map = new google.maps.Map($mapCanvas[0], {
zoom: GeoLocationData.zoom,
center: new google.maps.LatLng(GeoLocationData.lat, GeoLocationData.lng),
mapTypeId: google.maps.MapTypeId.ROADMAP,
disableDefaultUI: true,
options: {
zoomControl: true,
scrollwheel: true,
streetViewControl: true
}
});
var locationSet = false;
var processing = false;
var pendingProcess = false;
var pendingProcessTimeout = false;
google.maps.event.addListener(map, 'idle', showMarkers);
var mapTabSection = $('#map-activator');
function showMarkers() {
if ( processing == false) {
if (mapTabSection.hasClass('active')) {
processing = true;
$.ajax({
url : WWW_DIR_JAVASCRIPT + 'chat/jsononlineusers'+(parseInt($('#id_department_map_id').val()) > 0 ? '/(department)/'+parseInt($('#id_department_map_id').val()) : '' )+(parseInt($('#maxRows').val()) > 0 ? '/(maxrows)/'+parseInt($('#maxRows').val()) : '' )+(parseInt($('#userTimeout').val()) > 0 ? '/(timeout)/'+parseInt($('#userTimeout').val()) : '' ),
dataType: "json",
error:function(){
clearTimeout(pendingProcessTimeout);
pendingProcessTimeout = setTimeout(function(){
showMarkers();
},10000);
},
success : function(response) {
bindMarkers(response);
processing = false;
clearTimeout(pendingProcessTimeout);
if (pendingProcess == true) {
pendingProcess = false;
showMarkers();
} else {
pendingProcessTimeout = setTimeout(function(){
showMarkers();
},10000);
}
}
});
} else {
pendingProcessTimeout = setTimeout(function(){
showMarkers();
},10000);
}
} else {
pendingProcess = true;
}
};
var markers = [];
var markersObjects = [];
var infoWindow = new google.maps.InfoWindow({ content: 'Loading...' });
function bindMarkers(mapData) {
$(mapData.result).each(function(i, e) {
if ($.inArray(e.Id,markers) == -1) {
var latLng = new google.maps.LatLng(e.Latitude, e.Longitude);
var marker = new google.maps.Marker({ position: latLng, icon : e.icon, map : map });
google.maps.event.addListener(marker, 'click', function() {
lhc.revealModal({'url':WWW_DIR_JAVASCRIPT+'chat/getonlineuserinfo/'+e.Id})
});
marker.setVisible(true);
marker.setAnimation(google.maps.Animation.DROP);
markersObjects[e.Id] = marker;
markers.push(e.Id);
clearTimeout(markersObjects[e.Id].timeOutMarker);
markersObjects[e.Id].timeOutMarker = setTimeout(function(){
markers.splice($.inArray(e.Id,markers), 1);
google.maps.event.clearInstanceListeners(markersObjects[e.Id]);
markersObjects[e.Id].setMap(null);
markersObjects[e.Id] = null;
},parseInt($('#markerTimeout option:selected').val())*1000);
} else {
markersObjects[e.Id].setIcon(e.icon);
clearTimeout(markersObjects[e.Id].timeOutMarker);
markersObjects[e.Id].timeOutMarker = setTimeout(function(){
markers.splice($.inArray(e.Id,markers), 1);
google.maps.event.clearInstanceListeners(markersObjects[e.Id]);
markersObjects[e.Id].setMap(null);
markersObjects[e.Id] = null;
},parseInt($('#markerTimeout option:selected').val())*1000);
}
});
};
$('#id_department_map_id').change(function(){
showMarkers();
lhinst.changeUserSettingsIndifferent('omap_depid',$(this).val());
});
$('#markerTimeout').change(function(){
showMarkers();
lhinst.changeUserSettingsIndifferent('omap_mtimeout',$(this).val());
});
$('#map-activator').click(function(){
setTimeout(function(){
google.maps.event.trigger(map, 'resize');
if (locationSet == false) {
locationSet = true;
map.setCenter(new google.maps.LatLng(GeoLocationData.lat, GeoLocationData.lng));
}
},500);
showMarkers();
});
};
$.fn.makeDropdown = function() {
var filterInput = this.find('.btn-block-department-filter > input');
this.click(function(){
setTimeout(function(){
filterInput.focus();
},50);
})
this.on("click", "[data-stopPropagation]", function(e) {
e.stopPropagation();
})
var selectedItems = [];
var _this = this;
_this.each(function () {
var selectedItems = $(this).find('.selected-items-filter');
selectedItems.html('');
$(this).find('.btn-department-dropdown').attr('data-text',$(this).find('.btn-department-dropdown').text());
var itemsSelectedCount = 0;
$(this).find('li input:checked').each(function () {
selectedItems.prepend('<div class="fs12"><a data-stoppropagation="true" class="delete-item" data-value="'+$(this).val()+'"><i class="material-icons chat-unread">delete</i>' + $(this).parent().text() + "</a></div>");
itemsSelectedCount++;
})
if (itemsSelectedCount > 0) {
$(this).find('.btn-department-dropdown').text('['+itemsSelectedCount+'] '+$(this).find('.btn-department-dropdown').attr('data-text'));
}
var _thisItem = $(this);
_thisItem.find('li input').change(function() {
selectedItems.html('');
var itemsSelectedCount = 0;
_thisItem.find('li input:checked').each(function () {
selectedItems.prepend('<div class="fs12"><a data-stoppropagation="true" class="delete-item" data-value="'+$(this).val()+'"><i class="material-icons chat-unread">delete</i>' + $(this).parent().text() + "</a></div>");
itemsSelectedCount++;
})
if (itemsSelectedCount > 0) {
_thisItem.find('.btn-department-dropdown').text('['+itemsSelectedCount+'] '+_thisItem.find('.btn-department-dropdown').attr('data-text'));
} else {
_thisItem.find('.btn-department-dropdown').text(_thisItem.find('.btn-department-dropdown').attr('data-text'));
}
});
$(this).on('click','.delete-item',function () {
_thisItem.find('input[value='+$(this).attr('data-value')+']').prop('checked',false);
$(this).parent().remove();
var itemsSelectedCount = _thisItem.find('li input:checked').length;
if (itemsSelectedCount > 0) {
_thisItem.find('.btn-department-dropdown').text('['+itemsSelectedCount+'] '+_thisItem.find('.btn-department-dropdown').attr('data-text'));
} else {
_thisItem.find('.btn-department-dropdown').text(_thisItem.find('.btn-department-dropdown').attr('data-text'));
}
});
});
filterInput.keyup(function(){
var filter = $(this).val();
$(this).parent().parent().children('li').each(function(i) {
if (i > 0) {
if (!$(this).text().toLowerCase().includes(filter) && filter != ''){
$(this).hide();
} else {
$(this).show();
}
}
});
});
};
var focused = true;
window.onfocus = window.onblur = function(e) {
focused = (e || event).type === "focus";
lhinst.focusChanged(focused);
};
window.lhcSelector = null;
function chatsyncuser()
{
lhinst.syncusercall();
}
function chatsyncuserpending()
{
lhinst.chatsyncuserpending();
}
function chatsyncadmin()
{
lhinst.syncadmincall();
}
} catch (e) {
if (lhcError) lhcError.log(e.message, "lh.js", e.lineNumber || e.line, e.stack); else throw Error("lhc : " + e.message);
}
!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var a=e.handler,s=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var n="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],i=String.fromCharCode(e.which).toLowerCase(),r="",o={};t.each(["alt","ctrl","shift"],function(t,a){e[a+"Key"]&&n!==a&&(r+=a+"+")}),e.metaKey&&!e.ctrlKey&&"meta"!==n&&(r+="meta+"),e.metaKey&&"meta"!==n&&r.indexOf("alt+ctrl+shift+")>-1&&(r=r.replace("alt+ctrl+shift+","hyper+")),n?o[r+n]=!0:(o[r+i]=!0,o[r+t.hotkeys.shiftNums[i]]=!0,"shift+"===r&&(o[t.hotkeys.shiftNums[i]]=!0));for(var p=0,l=s.length;l>p;p++)if(o[s[p]])return a.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],function(){t.event.special[this]={add:e}})}(jQuery||this.jQuery||window.jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e,t){var i=0,n=Array.prototype.slice,r=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(e){}r(t)},e.widget=function(t,i,n){var r,o,s,a,l={},p=t.split(".")[0];t=t.split(".")[1],r=p+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[p]=e[p]||{},o=e[p][t],s=e[p][t]=function(e,t){if(!this._createWidget)return new s(e,t);arguments.length&&this._createWidget(e,t)},e.extend(s,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),(a=new i).options=e.widget.extend({},a.options),e.each(n,(function(t,n){var r,o;e.isFunction(n)?l[t]=(r=function(){return i.prototype[t].apply(this,arguments)},o=function(e){return i.prototype[t].apply(this,e)},function(){var e,t=this._super,i=this._superApply;return this._super=r,this._superApply=o,e=n.apply(this,arguments),this._super=t,this._superApply=i,e}):l[t]=n})),s.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix:t},l,{constructor:s,namespace:p,widgetName:t,widgetFullName:r}),o?(e.each(o._childConstructors,(function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,s,i._proto)})),delete o._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s)},e.widget.extend=function(i){for(var r,o,s=n.call(arguments,1),a=0,l=s.length;a<l;a++)for(r in s[a])o=s[a][r],s[a].hasOwnProperty(r)&&o!==t&&(e.isPlainObject(o)?i[r]=e.isPlainObject(i[r])?e.widget.extend({},i[r],o):e.widget.extend({},o):i[r]=o);return i},e.widget.bridge=function(i,r){var o=r.prototype.widgetFullName||i;e.fn[i]=function(s){var a="string"==typeof s,l=n.call(arguments,1),p=this;return s=!a&&l.length?e.widget.extend.apply(null,[s].concat(l)):s,a?this.each((function(){var n,r=e.data(this,o);return r?e.isFunction(r[s])&&"_"!==s.charAt(0)?(n=r[s].apply(r,l))!==r&&n!==t?(p=n&&n.jquery?p.pushStack(n.get()):n,!1):void 0:e.error("no such method '"+s+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")})):this.each((function(){var t=e.data(this,o);t?t.option(s||{})._init():e.data(this,o,new r(s,this))})),p}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var r,o,s,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},r=i.split("."),i=r.shift(),r.length){for(o=a[i]=e.widget.extend({},this.options[i]),s=0;s<r.length-1;s++)o[r[s]]=o[r[s]]||{},o=o[r[s]];if(i=r.pop(),n===t)return o[i]===t?null:o[i];o[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,n){var r,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=r=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),e.each(n,(function(n,s){function a(){if(t||!0!==o.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof s?o[s]:s).apply(o,arguments)}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),p=l[1]+o.eventNamespace,u=l[2];u?r.delegate(u,p,a):i.bind(p,a)}))},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){var i=this;return setTimeout((function(){return("string"==typeof e?i[e]:e).apply(i,arguments)}),t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var r,o,s=this.options[t];if(n=n||{},(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(r in o)r in i||(i[r]=o[r]);return this.element.trigger(i,n),!(e.isFunction(s)&&!1===s.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},(function(t,i){e.Widget.prototype["_"+t]=function(n,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?!0===r||"number"==typeof r?i:r.effect||i:t;"number"==typeof(r=r||{})&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&n.delay(r.delay),s&&e.effects&&e.effects.effect[a]?n[t](r):a!==t&&n[a]?n[a](r.duration,r.easing,o):n.queue((function(i){e(this)[t](),o&&o.call(n[0]),i()}))}}))})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}((function(e){"use strict";var t=0;e.ajaxTransport("iframe",(function(i){if(i.async){var n,r,o,s=i.initialIframeSrc||"javascript:false;";return{send:function(a,l){(n=e('<form style="display:none;"></form>')).attr("accept-charset",i.formAcceptCharset),o=/\?/.test(i.url)?"&":"?","DELETE"===i.type?(i.url=i.url+o+"_method=DELETE",i.type="POST"):"PUT"===i.type?(i.url=i.url+o+"_method=PUT",i.type="POST"):"PATCH"===i.type&&(i.url=i.url+o+"_method=PATCH",i.type="POST"),r=e('<iframe src="'+s+'" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",(function(){var t,o=e.isArray(i.paramName)?i.paramName:[i.paramName];r.unbind("load").bind("load",(function(){var t;try{if(!(t=r.contents()).length||!t[0].firstChild)throw new Error}catch(e){t=void 0}l(200,"success",{iframe:t}),e('<iframe src="'+s+'"></iframe>').appendTo(n),window.setTimeout((function(){n.remove()}),0)})),n.prop("target",r.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,(function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)})),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after((function(e){return t[e]})),i.paramName&&i.fileInput.each((function(t){e(this).prop("name",o[t]||i.paramName)})),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),t&&t.length&&i.fileInput.each((function(i,n){var r=e(t[i]);e(n).prop("name",r.prop("name")),r.replaceWith(n)}))})),n.append(r).appendTo(document.body)},abort:function(){r&&r.unbind("load").prop("src",s),n&&n.remove()}}}})),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var i=t&&t[0];return i&&e.isXMLDoc(i)?i:e.parseXML(i.XMLDocument&&i.XMLDocument.xml||e(i.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery.ui.widget"],e):e(window.jQuery)}((function(e){"use strict";e.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||e('<input type="file">').prop("disabled")),e.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:e(document),fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,i){return t=this.messages[t]||t.toString(),i&&e.each(i,(function(e,i){t=t.replace("{"+e+"}",i)})),t},formData:function(e){return e.serializeArray()},add:function(t,i){if(t.isDefaultPrevented())return!1;(i.autoUpload||!1!==i.autoUpload&&e(this).fileupload("option","autoUpload"))&&i.process().done((function(){i.submit()}))},processData:!1,contentType:!1,cache:!1},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:e.support.blobSlice&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,i){var n=e-this.timestamp;return(!this.bitrate||!i||n>i)&&(this.bitrate=(t-this.loaded)*(1e3/n)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var i;return"function"==typeof t.formData?t.formData(t.form):e.isArray(t.formData)?t.formData:"object"===e.type(t.formData)?(i=[],e.each(t.formData,(function(e,t){i.push({name:e,value:t})})),i):[]},_getTotal:function(t){var i=0;return e.each(t,(function(e,t){i+=t.size||1})),i},_initProgressObject:function(t){var i={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,i):t._progress=i},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(t,i){if(t.lengthComputable){var n,r=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&r-i._time<i.progressInterval&&t.loaded!==t.total)return;i._time=r,n=Math.floor(t.loaded/t.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=n-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=n,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(r,n,i.bitrateInterval),this._trigger("progress",e.Event("progress",{delegatedEvent:t}),i),this._trigger("progressall",e.Event("progressall",{delegatedEvent:t}),this._progress)}},_initProgressListener:function(t){var i=this,n=t.xhr?t.xhr():e.ajaxSettings.xhr();n.upload&&(e(n.upload).bind("progress",(function(e){var n=e.originalEvent;e.lengthComputable=n.lengthComputable,e.loaded=n.loaded,e.total=n.total,i._onProgress(e,t)})),t.xhr=function(){return n})},_isInstanceOf:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},_initXHRData:function(t){var i,n=this,r=t.files[0],o=t.multipart||!e.support.xhrFileUpload,s=t.paramName[0];t.headers=e.extend({},t.headers),t.contentRange&&(t.headers["Content-Range"]=t.contentRange),o&&!t.blob&&this._isInstanceOf("File",r)||(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"'),o?e.support.xhrFormDataFileUpload&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:s,value:t.blob}):e.each(t.files,(function(e,n){i.push({name:t.paramName[e]||s,value:n})}))):(n._isInstanceOf("FormData",t.formData)?i=t.formData:(i=new FormData,e.each(this._getFormData(t),(function(e,t){i.append(t.name,t.value)}))),t.blob?i.append(s,t.blob,r.name):e.each(t.files,(function(e,r){(n._isInstanceOf("File",r)||n._isInstanceOf("Blob",r))&&i.append(t.paramName[e]||s,r,r.name)}))),t.data=i):(t.contentType=r.type,t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){var i=e("<a></a>").prop("href",t.url).prop("host");t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&i&&i!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e)},_getParamName:function(t){var i=e(t.fileInput),n=t.paramName;return n?e.isArray(n)||(n=[n]):(n=[],i.each((function(){for(var t=e(this),i=t.prop("name")||"files[]",r=(t.prop("files")||[1]).length;r;)n.push(i),r-=1})),n.length||(n=[i.prop("name")||"files[]"])),n},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||"string"===e.type(t.form.prop("method"))&&t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,n){var r=e.Deferred(),o=r.promise();return i=i||this.options.context||o,!0===t?r.resolveWith(i,n):!1===t&&r.rejectWith(i,n),o.abort=r.promise,this._enhancePromise(o)},_addConvenienceMethods:function(t,i){var n=this,r=function(t){return e.Deferred().resolveWith(n,t).promise()};i.process=function(t,o){return(t||o)&&(i._processQueue=this._processQueue=(this._processQueue||r([this])).pipe((function(){return i.errorThrown?e.Deferred().rejectWith(n,[i]).promise():r(arguments)})).pipe(t,o)),this._processQueue||r([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=!1!==n._trigger("submit",e.Event("submit",{delegatedEvent:t}),this)&&n._onSend(t,this)),this.jqXHR||n._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",n._getXHRPromise())},i.state=function(){return this.jqXHR?n._getDeferredState(this.jqXHR):this._processQueue?n._getDeferredState(this._processQueue):void 0},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),i=t&&t.split("-"),n=i&&i.length>1&&parseInt(i[1],10);return n&&n+1},_chunkedUpload:function(t,i){t.uploadedBytes=t.uploadedBytes||0;var n,r,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes,p=t.maxChunkSize||a,u=this._blobSlice,d=e.Deferred(),c=d.promise();return!(!(this._isXHRUpload(t)&&u&&(l||p<a))||t.data)&&(!!i||(l>=a?(s.error=t.i18n("uploadedBytes"),this._getXHRPromise(!1,t.context,[null,"error",s.error])):(r=function(){var i=e.extend({},t),c=i._progress.loaded;i.blob=u.call(s,l,l+p,s.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,o._initXHRData(i),o._initProgressListener(i),n=(!1!==o._trigger("chunksend",null,i)&&e.ajax(i)||o._getXHRPromise(!1,i.context)).done((function(n,s,p){l=o._getUploadedBytes(p)||l+i.chunkSize,c+i.chunkSize-i._progress.loaded&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),t.uploadedBytes=i.uploadedBytes=l,i.result=n,i.textStatus=s,i.jqXHR=p,o._trigger("chunkdone",null,i),o._trigger("chunkalways",null,i),l<a?r():d.resolveWith(i.context,[n,s,p])})).fail((function(e,t,n){i.jqXHR=e,i.textStatus=t,i.errorThrown=n,o._trigger("chunkfail",null,i),o._trigger("chunkalways",null,i),d.rejectWith(i.context,[e,t,n])}))},this._enhancePromise(c),c.abort=function(){return n.abort()},r(),c)))},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,i,n,r){var o=r._progress.total,s=r._response;r._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),r),s.result=r.result=t,s.textStatus=r.textStatus=i,s.jqXHR=r.jqXHR=n,this._trigger("done",null,r)},_onFail:function(e,t,i,n){var r=n._response;n.recalculateProgress&&(this._progress.loaded-=n._progress.loaded,this._progress.total-=n._progress.total),r.jqXHR=n.jqXHR=e,r.textStatus=n.textStatus=t,r.errorThrown=n.errorThrown=i,this._trigger("fail",null,n)},_onAlways:function(e,t,i,n){this._trigger("always",null,n)},_onSend:function(t,i){i.submit||this._addConvenienceMethods(t,i);var n,r,o,s,a=this,l=a._getAJAXSettings(i),p=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,n=n||((r||!1===a._trigger("send",e.Event("send",{delegatedEvent:t}),l))&&a._getXHRPromise(!1,l.context,r)||a._chunkedUpload(l)||e.ajax(l)).done((function(e,t,i){a._onDone(e,t,i,l)})).fail((function(e,t,i){a._onFail(e,t,i,l)})).always((function(e,t,i){if(a._onAlways(e,t,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var n=a._slots.shift();n;){if("pending"===a._getDeferredState(n)){n.resolve();break}n=a._slots.shift()}0===a._active&&a._trigger("stop")}))};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.pipe(p)):(this._sequence=this._sequence.pipe(p,p),s=this._sequence),s.abort=function(){return r=[void 0,"abort","abort"],n?n.abort():(o&&o.rejectWith(l.context,r),p())},this._enhancePromise(s)):p()},_onAdd:function(t,i){var n,r,o,s,a=this,l=!0,p=e.extend({},this.options,i),u=p.limitMultiFileUploads,d=this._getParamName(p);if((p.singleFileUploads||u)&&this._isXHRUpload(p))if(!p.singleFileUploads&&u)for(o=[],n=[],s=0;s<i.files.length;s+=u)o.push(i.files.slice(s,s+u)),(r=d.slice(s,s+u)).length||(r=d),n.push(r);else n=d;else o=[i.files],n=[d];return i.originalFiles=i.files,e.each(o||i.files,(function(r,s){var p=e.extend({},i);return p.files=o?s:[s],p.paramName=n[r],a._initResponseObject(p),a._initProgressObject(p),a._addConvenienceMethods(t,p),l=a._trigger("add",e.Event("add",{delegatedEvent:t}),p)})),l},_replaceFileInput:function(t){var i=t.clone(!0);e("<form></form>").append(i)[0].reset(),t.after(i).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map((function(e,n){return n===t[0]?i[0]:n})),t[0]===this.element[0]&&(this.element=i)},_handleFileTreeEntry:function(t,i){var n=this,r=e.Deferred(),o=function(e){e&&!e.entry&&(e.entry=t),r.resolve([e])};return i=i||"",t.isFile?t._file?(t._file.relativePath=i,r.resolve(t._file)):t.file((function(e){e.relativePath=i,r.resolve(e)}),o):t.isDirectory?t.createReader().readEntries((function(e){n._handleFileTreeEntries(e,i+t.name+"/").done((function(e){r.resolve(e)})).fail(o)}),o):r.resolve([]),r.promise()},_handleFileTreeEntries:function(t,i){var n=this;return e.when.apply(e,e.map(t,(function(e){return n._handleFileTreeEntry(e,i)}))).pipe((function(){return Array.prototype.concat.apply([],arguments)}))},_getDroppedFiles:function(t){var i=(t=t||{}).items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(e.map(i,(function(e){var t;return e.webkitGetAsEntry?((t=e.webkitGetAsEntry())&&(t._file=e.getAsFile()),t):e.getAsEntry()}))):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){var i,n,r=(t=e(t)).prop("webkitEntries")||t.prop("entries");if(r&&r.length)return this._handleFileTreeEntries(r);if((i=e.makeArray(t.prop("files"))).length)void 0===i[0].name&&i[0].fileName&&e.each(i,(function(e,t){t.name=t.fileName,t.size=t.fileSize}));else{if(!(n=t.prop("value")))return e.Deferred().resolve([]).promise();i=[{name:n.replace(/^.*\\/,"")}]}return e.Deferred().resolve(i).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).pipe((function(){return Array.prototype.concat.apply([],arguments)})):this._getSingleFileInputFiles(t)},_onChange:function(t){var i=this,n={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(n.fileInput).always((function(r){n.files=r,i.options.replaceFileInput&&i._replaceFileInput(n.fileInput),!1!==i._trigger("change",e.Event("change",{delegatedEvent:t}),n)&&i._onAdd(t,n)}))},_onPaste:function(t){var i=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,n={files:[]};i&&i.length&&(e.each(i,(function(e,t){var i=t.getAsFile&&t.getAsFile();i&&n.files.push(i)})),!1!==this._trigger("paste",e.Event("paste",{delegatedEvent:t}),n)&&this._onAdd(t,n))},_onDrop:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=this,n=t.dataTransfer,r={};n&&n.files&&n.files.length&&(t.preventDefault(),this._getDroppedFiles(n).always((function(n){r.files=n,!1!==i._trigger("drop",e.Event("drop",{delegatedEvent:t}),r)&&i._onAdd(t,r)})))},_onDragOver:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=t.dataTransfer;i&&-1!==e.inArray("Files",i.types)&&!1!==this._trigger("dragover",e.Event("dragover",{delegatedEvent:t}))&&(t.preventDefault(),i.dropEffect="copy")},_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop}),this._on(this.options.pasteZone,{paste:this._onPaste})),e.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_setOption:function(t,i){var n=-1!==e.inArray(t,this._specialOptions);n&&this._destroyEventHandlers(),this._super(t,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_getRegExp:function(e){var t=e.split("/"),i=t.pop();return t.shift(),new RegExp(t.join("/"),i)},_isRegExpOption:function(t,i){return"url"!==t&&"string"===e.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var t=this,i=this.options;e.each(e(this.element[0].cloneNode(!1)).data(),(function(e,n){t._isRegExpOption(e,n)&&(n=t._getRegExp(n)),i[e]=n}))},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){var i=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always((function(e){t.files=e,i._onAdd(null,t)})):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var i,n,r=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return n=!0,i?i.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always((function(e){n||(e.length?(t.files=e,i=r._onSend(null,t).then((function(e,t,i){o.resolve(e,t,i)}),(function(e,t,i){o.reject(e,t,i)}))):o.reject())})),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})}));
!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,l=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);l.length;)l.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({}[e]||e)+"-"+{1:"4cde51f5c23f1f9849d0",2:"e8e16fea4dff9209fdce"}[e]+".js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;o(o.s=0)}([function(e,t,n){(function(e){n.p=window.WWW_DIR_LHC_WEBPACK,e.lhc={previewChat:function(e){this.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/previewchat/"+e})},previewChatArchive:function(e,t){this.revealModal({url:WWW_DIR_JAVASCRIPT+"chatarchive/previewchat/"+e+"/"+t})},revealModal:function(e){n.e(2).then(function(){var t=n(2);t.initializeModal(),t.revealModal(e)}.bind(null,n)).catch(n.oe)},methodCall:function(e,t,r){n.e(1).then((function(){(function(){n(3)("./"+e+".js")[t](r)}).apply(null,[])})).catch(n.oe)}}}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);

!function(e){"use strict";function t(){}function n(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function r(e){return function(){return this[e].apply(this,arguments)}}function i(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!=typeof e)&&i(e.listener)}var s=t.prototype,o=e.EventEmitter;s.getListeners=function(e){var t,n,r=this._getEvents();if(e instanceof RegExp){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},s.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},s.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},s.addListener=function(e,t){if(!i(t))throw new TypeError("listener must be a function");var r,s=this.getListenersAsObject(e),o="object"==typeof t;for(r in s)s.hasOwnProperty(r)&&-1===n(s[r],t)&&s[r].push(o?t:{listener:t,once:!1});return this},s.on=r("addListener"),s.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},s.once=r("addOnceListener"),s.defineEvent=function(e){return this.getListeners(e),this},s.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},s.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&-1!==(r=n(s[i],t))&&s[i].splice(r,1);return this},s.off=r("removeListener"),s.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},s.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},s.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},s.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if(e instanceof RegExp)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},s.removeAllListeners=r("removeEvent"),s.emitEvent=function(e,t){var n,r,i,s,o=this.getListenersAsObject(e);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].slice(0),i=0;i<n.length;i++)r=n[i],!0===r.once&&this.removeListener(e,r.listener),r.listener.apply(this,t||[])===this._getOnceReturnValue()&&this.removeListener(e,r.listener);return this},s.trigger=r("emitEvent"),s.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},s.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},s._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return e.EventEmitter=o,t},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.EventEmitter=t}("undefined"!=typeof window?window:this||{});
var ee = new EventEmitter();
var notificationsLHC = {
sendNotification : function() {
if (!!window.postMessage && typeof(parent) !== 'undefined') {
parent.postMessage('lhc_notification:just_testing', '*');
}
}
}
