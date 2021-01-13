
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
var LHCCannedMessageAutoSuggest=function(){function e(e){this.chat_id=e.chat_id,this.suggesting=!1,this.cannedMode=!1,this.currentText=null,this.currentKeword=null,this.nextUppercase=!1,this.nextUppercasePos=0,this.nextUppercaseCallback=null,this.nextUppercaseEnabled=void 0===e.uppercase_enabled||1==e.uppercase_enabled,this.currentRequest=null,this.cacheCanned={},this.htmlPreviewTimeout=null;var t=this;this.textarea=jQuery("#CSChatMessage-"+this.chat_id),this.textarea.bind("keyup",(function(e){if(1==t.nextUppercaseEnabled&&(1==t.nextUppercase?(clearTimeout(t.nextUppercaseCallback),t.nextUppercaseCallback=setTimeout((function(){t.capitalizeSentences(e)}),50)):t.capitalizeSentences(e)),"#"==e.key||51==e.keyCode||222==e.keyCode)t.currentText=t.textarea.val(),t.showSuggester();else if(32==e.keyCode&&1==t.suggesting)t.stopSuggesting();else if(1==t.suggesting&&38!=e.keyCode&&40!=e.keyCode&&39!=e.keyCode&&37!=e.keyCode&&13!=e.keyCode)t.currentText!==t.textarea.val()&&(t.showSuggester(),t.currentText=t.textarea.val());else if(1!=t.suggesting||37!=e.keyCode&&39!=e.keyCode||!1!==t.cannedMode)0!=t.suggesting||39!=e.keyCode&&37!=e.keyCode&&8!=e.keyCode||null!==t.extractKeyword()&&t.showSuggester();else{t.currentKeword!==t.extractKeyword()&&t.showSuggester()}})),this.textarea.bind("keydown",(function(e){if(1==t.suggesting)if(38==e.keyCode)t.moveAction("up"),e.preventDefault(),e.stopImmediatePropagation();else if(40==e.keyCode)t.moveAction("down"),e.preventDefault();else if(39!=e.keyCode&&37!=e.keyCode||!0!==t.cannedMode){if(39==e.keyCode||13==e.keyCode){var n=null;null!==(n=!1===t.cannedMode?$("#canned-hash-"+t.chat_id+" > li.current-item a"):$("#canned-hash-current-"+t.chat_id+" li.current-item > span.canned-msg"))&&n.length>0&&(n.trigger("click"),e.preventDefault(),e.stopImmediatePropagation())}}else{var r=$("#canned-hash-current-"+t.chat_id+" li.current-item").parent().parent().index();0==r&&37==e.keyCode&&($("#canned-hash-current-"+t.chat_id+" li.current-item > span.left-return").trigger("click"),e.preventDefault(),e.stopImmediatePropagation());var a=$("#canned-hash-current-"+t.chat_id+" .list-sub-items > li").length;if(0==a)$("#canned-hash-current-"+t.chat_id+" li.current-item > span.canned-msg").trigger("click");else{var i=$("#canned-hash-current-"+t.chat_id+" li.current-item").index();if($("#canned-hash-current-"+t.chat_id+" li.current-item").removeClass("current-item"),39==e.keyCode){var s=0;a-1>=r+1&&(s=r+1);var c=$("#canned-hash-current-"+t.chat_id+" > ul > li:eq("+s+") > ul"),h=0;c.find("> li").length-1>=i&&(h=i),t.renderPreview(c.find(" > li:eq("+h+")").addClass("current-item"))}else 37==e.keyCode&&t.renderPreview($("#canned-hash-current-"+t.chat_id+" > ul > li:eq("+(r-1)+") > ul > li:eq("+i+")").addClass("current-item"))}e.preventDefault(),e.stopImmediatePropagation()}}))}return e.prototype.capitalizeSentences=function(e){var t=this.textarea.val(),n=t,r=this.textarea[0].selectionStart;if(8!=e.keyCode&&46!=e.keyCode){if(t.length<=3&&(n=n.replace(n.charAt(0),n.charAt(0).toUpperCase())),1==this.nextUppercase&&(n=n.substr(0,this.nextUppercasePos)+n.charAt(this.nextUppercasePos).toUpperCase()+n.substr(this.nextUppercasePos+1))," "!=t.charAt(r-1)||"."!=t.charAt(r-2)&&"?"!=t.charAt(r-2)&&"!"!=t.charAt(r-2)||t.length!=r?1==this.nextUppercase&&(this.nextUppercase=!1):(this.nextUppercase=!0,this.nextUppercasePos=r),"en"==confLH.content_language&&(n=n.replace(/\si\s/g," I ")),n!=t)if(this.textarea.val(n),"selectionStart"in this.textarea[0])this.textarea[0].selectionStart=r,this.textarea[0].selectionEnd=r;else if(this.textarea[0].setSelectionRange)this.textarea[0].setSelectionRange(r,r);else if(this.textarea[0].createTextRange){var a=this.textarea[0].createTextRange();a.collapse(!0),a.moveEnd("character",r),a.moveStart("character",r),a.select()}}else this.nextUppercase=!1},e.prototype.moveAction=function(e){if(!1===this.cannedMode)var t=$("#canned-hash-"+this.chat_id+" > li.current-item");else t=$("#canned-hash-current-"+this.chat_id+" li.current-item");if(0!=t.length){if("up"==e){var n=t.prev();n.is("li")?(t.removeClass("current-item"),t=n.addClass("current-item")):t=t.removeClass("current-item").parent().find(" > li").last().addClass("current-item")}else if("down"==e){var r=t.next();r.is("li")?(t.removeClass("current-item"),t=r.addClass("current-item")):t=t.removeClass("current-item").parent().find(" > li").first().addClass("current-item")}!0===this.cannedMode&&this.renderPreview(t)}},e.prototype.isVisible=function(e,t,n){return e.height()+e.offset().top>=t.offset().top+n.threshold&&t.offset().top>e.offset().top-n.threshold},e.prototype.renderPreview=function(e){var t=e.find("> .canned-msg").attr("data-msg");clearTimeout(this.htmlPreviewTimeout);var n=this;void 0!==t?(this.isVisible($("#canned-hash-current-"+this.chat_id),e,{threshold:10})||e[0].scrollIntoView(),0==(e=$("#canned-hash-current-"+this.chat_id).parent().find(".canned-msg-preview")).length&&($("#canned-hash-current-"+this.chat_id).parent().prepend('<div class="canned-msg-preview"></div>'),e=$("#canned-hash-current-"+this.chat_id).parent().find(".canned-msg-preview")),e.html(t),this.htmlPreviewTimeout=setTimeout((function(){$.post(WWW_DIR_JAVASCRIPT+"chat/previewmessage/"+n.chat_id,{msg_body:!0,msg:t},(function(t){e.html(t),setTimeout((function(){n.adjustHeight()}),500)}))}),300),this.adjustHeight()):$("#canned-hash-current-"+this.chat_id).parent().find(".canned-msg-preview").remove()},e.prototype.adjustHeight=function(){var e=$("#chat-main-column-"+this.chat_id+" .canned-suggester");e.height()>$("#CSChatMessage-"+this.chat_id).offset().top&&$("#canned-hash-current-"+this.chat_id).css("max-height",$("#CSChatMessage-"+this.chat_id).offset().top-e.find(".canned-msg-preview").height()-10)},e.prototype.stopSuggesting=function(){this.textarea.parent().find(".canned-suggester").remove(),this.suggesting=!1,this.cannedMode=!1,this.currentText=null,this.currentKeword=null},e.prototype.extractKeyword=function(){var e=this.textarea[0].selectionStart;currentValue=this.textarea.val();var t="";for(i=e;i>0;i--){if(char=currentValue.substring(i-1,i)," "==char)return this.currentKeword=null,null;if("#"==char)return this.currentKeword=t,t;t=char+t}return this.currentKeword=null,null},this.timeoutRequest=null,e.prototype.showSuggester=function(){var e=this;this.extractKeyword(),this.cannedMode=!1,clearTimeout(this.timeoutRequest),null!==this.currentKeword?(this.suggesting=!0,this.timeoutRequest=setTimeout((function(){if(null!=e.currentRequest&&(e.currentRequest.abort(),e.currentRequest=null),"string"==typeof e.currentKeword){var t=!1,n=null;e.currentKeword.length<3&&(t=!0,void 0!==e.cacheCanned[e.currentKeword]&&(n=e.cacheCanned[e.currentKeword])),null!==n?(e.textarea.parent().find(".canned-suggester").remove(),e.textarea.before(n),e.initSuggester()):e.currentRequest=$.getJSON(WWW_DIR_JAVASCRIPT+"cannedmsg/showsuggester/"+e.chat_id,{keyword:e.currentKeword},(function(n){e.textarea.parent().find(".canned-suggester").remove(),e.textarea.before(n.result),e.initSuggester(),1==t&&(e.cacheCanned[e.currentKeword]=n.result)}))}}),130)):this.stopSuggesting()},e.prototype.initSuggester=function(){var e=this,t=$("#canned-hash-"+this.chat_id+" > li:last-child");t.length>0?(t.addClass("current-item"),this.textarea.parent().find(".canned-suggester").css("bottom",e.textarea.height()+16),$("#canned-hash-"+this.chat_id+" > li > a").click((function(){e.cannedMode=!0;var t=$("#canned-hash-current-"+e.chat_id);t.html("").show(),$(this).parent().find("ul.list-sub-items").clone().appendTo(t),e.renderPreview(t.find("ul > li:first-child > ul > li:first-child").addClass("current-item"));var n=$(this).parent().parent();n.hide(),t.find("span.canned-msg").mouseover((function(){e.renderPreview($(this).parent()),$("#canned-hash-current-"+e.chat_id+" li.current-item").removeClass("current-item"),$(this).parent().addClass("current-item")})),t.find("span.canned-msg").click((function(){var t=e.textarea[0].selectionStart,n=e.textarea.val(),r=$(this).attr("data-msg"),a=n.substring(0,t),i=a.lastIndexOf("#");if(a=a.substring(0,i)+r,e.textarea.val(a+n.substring(t)),"selectionStart"in e.textarea[0])e.textarea[0].selectionStart=a.length,e.textarea[0].selectionEnd=a.length;else if(e.textarea[0].setSelectionRange)e.textarea[0].setSelectionRange(a.length,a.length);else if(e.textarea[0].createTextRange){var s=e.textarea[0].createTextRange();s.collapse(!0),s.moveEnd("character",a.length),s.moveStart("character",a.length),s.select()}e.textarea[0].focus(),e.stopSuggesting()})),t.find("span.left-return").click((function(){n.show(),t.html("").hide(),t.parent().find(".canned-msg-preview").remove(),e.cannedMode=!1}))})),1==$("#canned-hash-"+this.chat_id+" > li").length?$("#canned-hash-"+this.chat_id+" > li > a").trigger("click"):this.renderPreview(t)):this.stopSuggesting()},e}();
!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var a=e.handler,s=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var n="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],i=String.fromCharCode(e.which).toLowerCase(),r="",o={};t.each(["alt","ctrl","shift"],function(t,a){e[a+"Key"]&&n!==a&&(r+=a+"+")}),e.metaKey&&!e.ctrlKey&&"meta"!==n&&(r+="meta+"),e.metaKey&&"meta"!==n&&r.indexOf("alt+ctrl+shift+")>-1&&(r=r.replace("alt+ctrl+shift+","hyper+")),n?o[r+n]=!0:(o[r+i]=!0,o[r+t.hotkeys.shiftNums[i]]=!0,"shift+"===r&&(o[t.hotkeys.shiftNums[i]]=!0));for(var p=0,l=s.length;l>p;p++)if(o[s[p]])return a.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],function(){t.event.special[this]={add:e}})}(jQuery||this.jQuery||window.jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e,t){var i=0,n=Array.prototype.slice,r=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(e){}r(t)},e.widget=function(t,i,n){var r,o,s,a,l={},p=t.split(".")[0];t=t.split(".")[1],r=p+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[p]=e[p]||{},o=e[p][t],s=e[p][t]=function(e,t){if(!this._createWidget)return new s(e,t);arguments.length&&this._createWidget(e,t)},e.extend(s,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),(a=new i).options=e.widget.extend({},a.options),e.each(n,(function(t,n){var r,o;e.isFunction(n)?l[t]=(r=function(){return i.prototype[t].apply(this,arguments)},o=function(e){return i.prototype[t].apply(this,e)},function(){var e,t=this._super,i=this._superApply;return this._super=r,this._superApply=o,e=n.apply(this,arguments),this._super=t,this._superApply=i,e}):l[t]=n})),s.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix:t},l,{constructor:s,namespace:p,widgetName:t,widgetFullName:r}),o?(e.each(o._childConstructors,(function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,s,i._proto)})),delete o._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s)},e.widget.extend=function(i){for(var r,o,s=n.call(arguments,1),a=0,l=s.length;a<l;a++)for(r in s[a])o=s[a][r],s[a].hasOwnProperty(r)&&o!==t&&(e.isPlainObject(o)?i[r]=e.isPlainObject(i[r])?e.widget.extend({},i[r],o):e.widget.extend({},o):i[r]=o);return i},e.widget.bridge=function(i,r){var o=r.prototype.widgetFullName||i;e.fn[i]=function(s){var a="string"==typeof s,l=n.call(arguments,1),p=this;return s=!a&&l.length?e.widget.extend.apply(null,[s].concat(l)):s,a?this.each((function(){var n,r=e.data(this,o);return r?e.isFunction(r[s])&&"_"!==s.charAt(0)?(n=r[s].apply(r,l))!==r&&n!==t?(p=n&&n.jquery?p.pushStack(n.get()):n,!1):void 0:e.error("no such method '"+s+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; attempted to call method '"+s+"'")})):this.each((function(){var t=e.data(this,o);t?t.option(s||{})._init():e.data(this,o,new r(s,this))})),p}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var r,o,s,a=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(a={},r=i.split("."),i=r.shift(),r.length){for(o=a[i]=e.widget.extend({},this.options[i]),s=0;s<r.length-1;s++)o[r[s]]=o[r[s]]||{},o=o[r[s]];if(i=r.pop(),n===t)return o[i]===t?null:o[i];o[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];a[i]=n}return this._setOptions(a),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,i,n){var r,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=r=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),e.each(n,(function(n,s){function a(){if(t||!0!==o.options.disabled&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof s?o[s]:s).apply(o,arguments)}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),p=l[1]+o.eventNamespace,u=l[2];u?r.delegate(u,p,a):i.bind(p,a)}))},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){var i=this;return setTimeout((function(){return("string"==typeof e?i[e]:e).apply(i,arguments)}),t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var r,o,s=this.options[t];if(n=n||{},(i=e.Event(i)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(r in o)r in i||(i[r]=o[r]);return this.element.trigger(i,n),!(e.isFunction(s)&&!1===s.apply(this.element[0],[i].concat(n))||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},(function(t,i){e.Widget.prototype["_"+t]=function(n,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?!0===r||"number"==typeof r?i:r.effect||i:t;"number"==typeof(r=r||{})&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&n.delay(r.delay),s&&e.effects&&e.effects.effect[a]?n[t](r):a!==t&&n[a]?n[a](r.duration,r.easing,o):n.queue((function(i){e(this)[t](),o&&o.call(n[0]),i()}))}}))})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery)}((function(e){"use strict";var t=0;e.ajaxTransport("iframe",(function(i){if(i.async){var n,r,o,s=i.initialIframeSrc||"javascript:false;";return{send:function(a,l){(n=e('<form style="display:none;"></form>')).attr("accept-charset",i.formAcceptCharset),o=/\?/.test(i.url)?"&":"?","DELETE"===i.type?(i.url=i.url+o+"_method=DELETE",i.type="POST"):"PUT"===i.type?(i.url=i.url+o+"_method=PUT",i.type="POST"):"PATCH"===i.type&&(i.url=i.url+o+"_method=PATCH",i.type="POST"),r=e('<iframe src="'+s+'" name="iframe-transport-'+(t+=1)+'"></iframe>').bind("load",(function(){var t,o=e.isArray(i.paramName)?i.paramName:[i.paramName];r.unbind("load").bind("load",(function(){var t;try{if(!(t=r.contents()).length||!t[0].firstChild)throw new Error}catch(e){t=void 0}l(200,"success",{iframe:t}),e('<iframe src="'+s+'"></iframe>').appendTo(n),window.setTimeout((function(){n.remove()}),0)})),n.prop("target",r.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,(function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)})),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after((function(e){return t[e]})),i.paramName&&i.fileInput.each((function(t){e(this).prop("name",o[t]||i.paramName)})),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data")),n.submit(),t&&t.length&&i.fileInput.each((function(i,n){var r=e(t[i]);e(n).prop("name",r.prop("name")),r.replaceWith(n)}))})),n.append(r).appendTo(document.body)},abort:function(){r&&r.unbind("load").prop("src",s),n&&n.remove()}}}})),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var i=t&&t[0];return i&&e.isXMLDoc(i)?i:e.parseXML(i.XMLDocument&&i.XMLDocument.xml||e(i.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})})),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery.ui.widget"],e):e(window.jQuery)}((function(e){"use strict";e.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||e('<input type="file">').prop("disabled")),e.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:e(document),fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,i){return t=this.messages[t]||t.toString(),i&&e.each(i,(function(e,i){t=t.replace("{"+e+"}",i)})),t},formData:function(e){return e.serializeArray()},add:function(t,i){if(t.isDefaultPrevented())return!1;(i.autoUpload||!1!==i.autoUpload&&e(this).fileupload("option","autoUpload"))&&i.process().done((function(){i.submit()}))},processData:!1,contentType:!1,cache:!1},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:e.support.blobSlice&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,i){var n=e-this.timestamp;return(!this.bitrate||!i||n>i)&&(this.bitrate=(t-this.loaded)*(1e3/n)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var i;return"function"==typeof t.formData?t.formData(t.form):e.isArray(t.formData)?t.formData:"object"===e.type(t.formData)?(i=[],e.each(t.formData,(function(e,t){i.push({name:e,value:t})})),i):[]},_getTotal:function(t){var i=0;return e.each(t,(function(e,t){i+=t.size||1})),i},_initProgressObject:function(t){var i={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,i):t._progress=i},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(t,i){if(t.lengthComputable){var n,r=Date.now?Date.now():(new Date).getTime();if(i._time&&i.progressInterval&&r-i._time<i.progressInterval&&t.loaded!==t.total)return;i._time=r,n=Math.floor(t.loaded/t.total*(i.chunkSize||i._progress.total))+(i.uploadedBytes||0),this._progress.loaded+=n-i._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,i.bitrateInterval),i._progress.loaded=i.loaded=n,i._progress.bitrate=i.bitrate=i._bitrateTimer.getBitrate(r,n,i.bitrateInterval),this._trigger("progress",e.Event("progress",{delegatedEvent:t}),i),this._trigger("progressall",e.Event("progressall",{delegatedEvent:t}),this._progress)}},_initProgressListener:function(t){var i=this,n=t.xhr?t.xhr():e.ajaxSettings.xhr();n.upload&&(e(n.upload).bind("progress",(function(e){var n=e.originalEvent;e.lengthComputable=n.lengthComputable,e.loaded=n.loaded,e.total=n.total,i._onProgress(e,t)})),t.xhr=function(){return n})},_isInstanceOf:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},_initXHRData:function(t){var i,n=this,r=t.files[0],o=t.multipart||!e.support.xhrFileUpload,s=t.paramName[0];t.headers=e.extend({},t.headers),t.contentRange&&(t.headers["Content-Range"]=t.contentRange),o&&!t.blob&&this._isInstanceOf("File",r)||(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"'),o?e.support.xhrFormDataFileUpload&&(t.postMessage?(i=this._getFormData(t),t.blob?i.push({name:s,value:t.blob}):e.each(t.files,(function(e,n){i.push({name:t.paramName[e]||s,value:n})}))):(n._isInstanceOf("FormData",t.formData)?i=t.formData:(i=new FormData,e.each(this._getFormData(t),(function(e,t){i.append(t.name,t.value)}))),t.blob?i.append(s,t.blob,r.name):e.each(t.files,(function(e,r){(n._isInstanceOf("File",r)||n._isInstanceOf("Blob",r))&&i.append(t.paramName[e]||s,r,r.name)}))),t.data=i):(t.contentType=r.type,t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){var i=e("<a></a>").prop("href",t.url).prop("host");t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&i&&i!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e)},_getParamName:function(t){var i=e(t.fileInput),n=t.paramName;return n?e.isArray(n)||(n=[n]):(n=[],i.each((function(){for(var t=e(this),i=t.prop("name")||"files[]",r=(t.prop("files")||[1]).length;r;)n.push(i),r-=1})),n.length||(n=[i.prop("name")||"files[]"])),n},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||"string"===e.type(t.form.prop("method"))&&t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var i=e.extend({},this.options,t);return this._initFormSettings(i),this._initDataSettings(i),i},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,i,n){var r=e.Deferred(),o=r.promise();return i=i||this.options.context||o,!0===t?r.resolveWith(i,n):!1===t&&r.rejectWith(i,n),o.abort=r.promise,this._enhancePromise(o)},_addConvenienceMethods:function(t,i){var n=this,r=function(t){return e.Deferred().resolveWith(n,t).promise()};i.process=function(t,o){return(t||o)&&(i._processQueue=this._processQueue=(this._processQueue||r([this])).pipe((function(){return i.errorThrown?e.Deferred().rejectWith(n,[i]).promise():r(arguments)})).pipe(t,o)),this._processQueue||r([this])},i.submit=function(){return"pending"!==this.state()&&(i.jqXHR=this.jqXHR=!1!==n._trigger("submit",e.Event("submit",{delegatedEvent:t}),this)&&n._onSend(t,this)),this.jqXHR||n._getXHRPromise()},i.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",n._getXHRPromise())},i.state=function(){return this.jqXHR?n._getDeferredState(this.jqXHR):this._processQueue?n._getDeferredState(this._processQueue):void 0},i.progress=function(){return this._progress},i.response=function(){return this._response}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),i=t&&t.split("-"),n=i&&i.length>1&&parseInt(i[1],10);return n&&n+1},_chunkedUpload:function(t,i){t.uploadedBytes=t.uploadedBytes||0;var n,r,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes,p=t.maxChunkSize||a,u=this._blobSlice,d=e.Deferred(),c=d.promise();return!(!(this._isXHRUpload(t)&&u&&(l||p<a))||t.data)&&(!!i||(l>=a?(s.error=t.i18n("uploadedBytes"),this._getXHRPromise(!1,t.context,[null,"error",s.error])):(r=function(){var i=e.extend({},t),c=i._progress.loaded;i.blob=u.call(s,l,l+p,s.type),i.chunkSize=i.blob.size,i.contentRange="bytes "+l+"-"+(l+i.chunkSize-1)+"/"+a,o._initXHRData(i),o._initProgressListener(i),n=(!1!==o._trigger("chunksend",null,i)&&e.ajax(i)||o._getXHRPromise(!1,i.context)).done((function(n,s,p){l=o._getUploadedBytes(p)||l+i.chunkSize,c+i.chunkSize-i._progress.loaded&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-i.uploadedBytes,total:l-i.uploadedBytes}),i),t.uploadedBytes=i.uploadedBytes=l,i.result=n,i.textStatus=s,i.jqXHR=p,o._trigger("chunkdone",null,i),o._trigger("chunkalways",null,i),l<a?r():d.resolveWith(i.context,[n,s,p])})).fail((function(e,t,n){i.jqXHR=e,i.textStatus=t,i.errorThrown=n,o._trigger("chunkfail",null,i),o._trigger("chunkalways",null,i),d.rejectWith(i.context,[e,t,n])}))},this._enhancePromise(c),c.abort=function(){return n.abort()},r(),c)))},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,i,n,r){var o=r._progress.total,s=r._response;r._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),r),s.result=r.result=t,s.textStatus=r.textStatus=i,s.jqXHR=r.jqXHR=n,this._trigger("done",null,r)},_onFail:function(e,t,i,n){var r=n._response;n.recalculateProgress&&(this._progress.loaded-=n._progress.loaded,this._progress.total-=n._progress.total),r.jqXHR=n.jqXHR=e,r.textStatus=n.textStatus=t,r.errorThrown=n.errorThrown=i,this._trigger("fail",null,n)},_onAlways:function(e,t,i,n){this._trigger("always",null,n)},_onSend:function(t,i){i.submit||this._addConvenienceMethods(t,i);var n,r,o,s,a=this,l=a._getAJAXSettings(i),p=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,n=n||((r||!1===a._trigger("send",e.Event("send",{delegatedEvent:t}),l))&&a._getXHRPromise(!1,l.context,r)||a._chunkedUpload(l)||e.ajax(l)).done((function(e,t,i){a._onDone(e,t,i,l)})).fail((function(e,t,i){a._onFail(e,t,i,l)})).always((function(e,t,i){if(a._onAlways(e,t,i,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var n=a._slots.shift();n;){if("pending"===a._getDeferredState(n)){n.resolve();break}n=a._slots.shift()}0===a._active&&a._trigger("stop")}))};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.pipe(p)):(this._sequence=this._sequence.pipe(p,p),s=this._sequence),s.abort=function(){return r=[void 0,"abort","abort"],n?n.abort():(o&&o.rejectWith(l.context,r),p())},this._enhancePromise(s)):p()},_onAdd:function(t,i){var n,r,o,s,a=this,l=!0,p=e.extend({},this.options,i),u=p.limitMultiFileUploads,d=this._getParamName(p);if((p.singleFileUploads||u)&&this._isXHRUpload(p))if(!p.singleFileUploads&&u)for(o=[],n=[],s=0;s<i.files.length;s+=u)o.push(i.files.slice(s,s+u)),(r=d.slice(s,s+u)).length||(r=d),n.push(r);else n=d;else o=[i.files],n=[d];return i.originalFiles=i.files,e.each(o||i.files,(function(r,s){var p=e.extend({},i);return p.files=o?s:[s],p.paramName=n[r],a._initResponseObject(p),a._initProgressObject(p),a._addConvenienceMethods(t,p),l=a._trigger("add",e.Event("add",{delegatedEvent:t}),p)})),l},_replaceFileInput:function(t){var i=t.clone(!0);e("<form></form>").append(i)[0].reset(),t.after(i).detach(),e.cleanData(t.unbind("remove")),this.options.fileInput=this.options.fileInput.map((function(e,n){return n===t[0]?i[0]:n})),t[0]===this.element[0]&&(this.element=i)},_handleFileTreeEntry:function(t,i){var n=this,r=e.Deferred(),o=function(e){e&&!e.entry&&(e.entry=t),r.resolve([e])};return i=i||"",t.isFile?t._file?(t._file.relativePath=i,r.resolve(t._file)):t.file((function(e){e.relativePath=i,r.resolve(e)}),o):t.isDirectory?t.createReader().readEntries((function(e){n._handleFileTreeEntries(e,i+t.name+"/").done((function(e){r.resolve(e)})).fail(o)}),o):r.resolve([]),r.promise()},_handleFileTreeEntries:function(t,i){var n=this;return e.when.apply(e,e.map(t,(function(e){return n._handleFileTreeEntry(e,i)}))).pipe((function(){return Array.prototype.concat.apply([],arguments)}))},_getDroppedFiles:function(t){var i=(t=t||{}).items;return i&&i.length&&(i[0].webkitGetAsEntry||i[0].getAsEntry)?this._handleFileTreeEntries(e.map(i,(function(e){var t;return e.webkitGetAsEntry?((t=e.webkitGetAsEntry())&&(t._file=e.getAsFile()),t):e.getAsEntry()}))):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){var i,n,r=(t=e(t)).prop("webkitEntries")||t.prop("entries");if(r&&r.length)return this._handleFileTreeEntries(r);if((i=e.makeArray(t.prop("files"))).length)void 0===i[0].name&&i[0].fileName&&e.each(i,(function(e,t){t.name=t.fileName,t.size=t.fileSize}));else{if(!(n=t.prop("value")))return e.Deferred().resolve([]).promise();i=[{name:n.replace(/^.*\\/,"")}]}return e.Deferred().resolve(i).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).pipe((function(){return Array.prototype.concat.apply([],arguments)})):this._getSingleFileInputFiles(t)},_onChange:function(t){var i=this,n={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(n.fileInput).always((function(r){n.files=r,i.options.replaceFileInput&&i._replaceFileInput(n.fileInput),!1!==i._trigger("change",e.Event("change",{delegatedEvent:t}),n)&&i._onAdd(t,n)}))},_onPaste:function(t){var i=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,n={files:[]};i&&i.length&&(e.each(i,(function(e,t){var i=t.getAsFile&&t.getAsFile();i&&n.files.push(i)})),!1!==this._trigger("paste",e.Event("paste",{delegatedEvent:t}),n)&&this._onAdd(t,n))},_onDrop:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=this,n=t.dataTransfer,r={};n&&n.files&&n.files.length&&(t.preventDefault(),this._getDroppedFiles(n).always((function(n){r.files=n,!1!==i._trigger("drop",e.Event("drop",{delegatedEvent:t}),r)&&i._onAdd(t,r)})))},_onDragOver:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var i=t.dataTransfer;i&&-1!==e.inArray("Files",i.types)&&!1!==this._trigger("dragover",e.Event("dragover",{delegatedEvent:t}))&&(t.preventDefault(),i.dropEffect="copy")},_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop}),this._on(this.options.pasteZone,{paste:this._onPaste})),e.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_setOption:function(t,i){var n=-1!==e.inArray(t,this._specialOptions);n&&this._destroyEventHandlers(),this._super(t,i),n&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_getRegExp:function(e){var t=e.split("/"),i=t.pop();return t.shift(),new RegExp(t.join("/"),i)},_isRegExpOption:function(t,i){return"url"!==t&&"string"===e.type(i)&&/^\/.*\/[igm]{0,3}$/.test(i)},_initDataAttributes:function(){var t=this,i=this.options;e.each(e(this.element[0].cloneNode(!1)).data(),(function(e,n){t._isRegExpOption(e,n)&&(n=t._getRegExp(n)),i[e]=n}))},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){var i=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always((function(e){t.files=e,i._onAdd(null,t)})):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var i,n,r=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return n=!0,i?i.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always((function(e){n||(e.length?(t.files=e,i=r._onSend(null,t).then((function(e,t,i){o.resolve(e,t,i)}),(function(e,t,i){o.reject(e,t,i)}))):o.reject())})),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})}));

(function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,m,l,r,s,f=o(t).css("position"),h=o(n);return t.style.position=/(absolute|fixed)/.test(f)?f:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=o(t).outerWidth(),u=o(t).outerHeight(),n===t?(m=c,a=u):(m=h.outerWidth(),a=h.outerHeight()),l=(e.width-c)/m,r=(e.height-u)/a,s=h.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,m),0),e.style.left=t*-l+"px",e.style.top=n*-r+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e,i=o.extend({},t,n||{}),u=i.target||this,c=this,a=o(c),m=document.createElement("img"),l=o(m),r="mousemove.zoom",s=!1,f=!1;(i.url||(e=a.find("img"),e[0]&&(i.url=e.data("src")||e.attr("src")),i.url))&&(function(){var o=u.style.position,t=u.style.overflow;a.one("zoom.destroy",function(){a.off(".zoom"),u.style.position=o,u.style.overflow=t,l.remove()})}(),m.onload=function(){function t(t){e.init(),e.move(t),l.stop().fadeTo(o.support.opacity?i.duration:0,1,o.isFunction(i.onZoomIn)?i.onZoomIn.call(m):!1)}function n(){l.stop().fadeTo(i.duration,0,o.isFunction(i.onZoomOut)?i.onZoomOut.call(m):!1)}var e=o.zoom(u,c,m,i.magnify);"grab"===i.on?a.on("mousedown.zoom",function(i){1===i.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(r,e.move)}),t(i),o(document).on(r,e.move),i.preventDefault())}):"click"===i.on?a.on("click.zoom",function(i){return s?void 0:(s=!0,t(i),o(document).on(r,e.move),o(document).one("click.zoom",function(){n(),s=!1,o(document).off(r,e.move)}),!1)}):"toggle"===i.on?a.on("click.zoom",function(o){s?n():t(o),s=!s}):"mouseover"===i.on&&(e.init(),a.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(r,e.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),f?(f=!1,n()):(f=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),e.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),o.isFunction(i.callback)&&i.callback.call(m)},m.src=i.url)})},o.fn.zoom.defaults=t})(window.jQuery);
!function(t){function e(){return new Date(Date.UTC.apply(Date,arguments))}var a=function(e,a){var n=this;switch(this.element=t(e),this.closeButton=a.closeButton,this.language=a.language||this.element.data("date-language")||"en",this.language=this.language in i?this.language:this.language.split("-")[0],this.language=this.language in i?this.language:"en",this.isRTL=i[this.language].rtl||!1,this.format=s.parseFormat(a.format||this.element.data("date-format")||i[this.language].format||"mm/dd/yyyy"),this.isInline=!1,this.isInput=this.element.is("input"),this.component=!!this.element.is(".date")&&this.element.find(".prefix, .postfix"),this.hasInput=this.component&&this.element.find("input").length,this.onRender=a.onRender||function(){},this.component&&0===this.component.length&&(this.component=!1),this._attachEvents(),this.forceParse=!0,"forceParse"in a?this.forceParse=a.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),this.picker=t(s.template).appendTo(this.isInline?this.element:"body").on({click:t.proxy(this.click,this),mousedown:t.proxy(this.mousedown,this)}),this.closeButton&&this.picker.find("a.datepicker-close").show(),this.isInline?this.picker.addClass("datepicker-inline"):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.isRTL&&(this.picker.addClass("datepicker-rtl"),this.picker.find(".prev i, .next i").toggleClass("fa fa-chevron-left fa-chevron-right").toggleClass("fa-chevron-left fa-chevron-right")),t(document).on("mousedown",(function(e){0===t(e.target).closest(".datepicker.datepicker-inline, .datepicker.datepicker-dropdown").length&&n.hide()})),this.autoclose=!0,"autoclose"in a?this.autoclose=a.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in a?this.keyboardNavigation=a.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),this.viewMode=this.startViewMode=0,a.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1}this.todayBtn=a.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=a.todayHighlight||this.element.data("date-today-highlight")||!1,this.calendarWeeks=!1,"calendarWeeks"in a?this.calendarWeeks=a.calendarWeeks:"dateCalendarWeeks"in this.element.data()&&(this.calendarWeeks=this.element.data("date-calendar-weeks")),this.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",(function(t,e){return parseInt(e)+1})),this.weekStart=(a.weekStart||this.element.data("date-weekstart")||i[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-1/0,this.endDate=1/0,this.daysOfWeekDisabled=[],this.setStartDate(a.startDate||this.element.data("date-startdate")),this.setEndDate(a.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(a.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode(),this.isInline&&this.show()};a.prototype={constructor:a,_events:[],_attachEvents:function(){this._detachEvents(),this.isInput?this._events=[[this.element,{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this),keydown:t.proxy(this.keydown,this)}],[this.component,{click:t.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:t.proxy(this.show,this)}]];for(var e,a,i=0;i<this._events.length;i++)e=this._events[i][0],a=this._events[i][1],e.on(a)},_detachEvents:function(){for(var t,e,a=0;a<this._events.length;a++)t=this._events[a][0],e=this._events[a][1],t.off(e);this._events=[]},show:function(e){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.update(),this.place(),t(window).on("resize",t.proxy(this.place,this)),e&&(e.stopPropagation(),e.preventDefault()),this.element.trigger({type:"show",date:this.date})},hide:function(e){this.isInline||this.picker.is(":visible")&&(this.picker.hide(),t(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||t(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.element.trigger({type:"hide",date:this.date}))},remove:function(){this._detachEvents(),this.picker.remove(),delete this.element.data().datepicker},getDate:function(){var t=this.getUTCDate();return new Date(t.getTime()+6e4*t.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(t){this.setUTCDate(new Date(t.getTime()-6e4*t.getTimezoneOffset()))},setUTCDate:function(t){this.date=t,this.setValue()},setValue:function(){var t=this.getFormattedDate();this.isInput?this.element.val(t):(this.component&&this.element.find("input").val(t),this.element.data("date",t))},getFormattedDate:function(t){return void 0===t&&(t=this.format),s.formatDate(this.date,t,this.language)},setStartDate:function(t){this.startDate=t||-1/0,this.startDate!==-1/0&&(this.startDate=s.parseDate(this.startDate,this.format,this.language)),this.update(),this.updateNavArrows()},setEndDate:function(t){this.endDate=t||1/0,this.endDate!==1/0&&(this.endDate=s.parseDate(this.endDate,this.format,this.language)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this.daysOfWeekDisabled=e||[],t.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=t.map(this.daysOfWeekDisabled,(function(t){return parseInt(t,10)})),this.update(),this.updateNavArrows()},place:function(){if(!this.isInline){var e=parseInt(this.element.parents().filter((function(){return"auto"!=t(this).css("z-index")})).first().css("z-index"))+10,a=this.component?this.component:this.element,i=a.offset(),s=a.outerHeight()+parseInt(a.css("margin-top")),n=a.outerWidth()+parseInt(a.css("margin-left")),h=i.top+s,r=i.left;h+this.picker.height()>=t(window).scrollTop()+t(window).height()&&(h=i.top-s-this.picker.height()),i.left+this.picker.width()>=t(window).width()&&(r=i.left+n-this.picker.width()),this.picker.css({top:h,left:r,zIndex:e})}},update:function(){var t,e=!1;arguments&&arguments.length&&("string"==typeof arguments[0]||arguments[0]instanceof Date)?(t=arguments[0],e=!0):t=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),this.date=s.parseDate(t,this.format,this.language),e&&this.setValue(),this.date<this.startDate?this.viewDate=new Date(this.startDate.valueOf()):this.date>this.endDate?this.viewDate=new Date(this.endDate.valueOf()):this.viewDate=new Date(this.date.valueOf()),this.fill()},fillDow:function(){var t=this.weekStart,e="<tr>";if(this.calendarWeeks){var a='<th class="cw">&nbsp;</th>';e+=a,this.picker.find(".datepicker-days thead tr:first-child").prepend(a)}for(;t<this.weekStart+7;)e+='<th class="dow">'+i[this.language].daysMin[t++%7]+"</th>";e+="</tr>",this.picker.find(".datepicker-days thead").append(e)},fillMonths:function(){for(var t="",e=0;e<12;)t+='<span class="month">'+i[this.language].monthsShort[e++]+"</span>";this.picker.find(".datepicker-months td").html(t)},fill:function(){var a=new Date(this.viewDate.valueOf()),n=a.getUTCFullYear(),h=a.getUTCMonth(),r=this.startDate!==-1/0?this.startDate.getUTCFullYear():-1/0,o=this.startDate!==-1/0?this.startDate.getUTCMonth():-1/0,d=this.endDate!==1/0?this.endDate.getUTCFullYear():1/0,l=this.endDate!==1/0?this.endDate.getUTCMonth():1/0,c=this.date&&this.date.valueOf(),u=new Date;this.picker.find(".datepicker-days thead th.date-switch").text(i[this.language].months[h]+" "+n),this.picker.find("tfoot th.today").text(i[this.language].today).toggle(!1!==this.todayBtn),this.updateNavArrows(),this.fillMonths();var p=e(n,h-1,28,0,0,0,0),f=s.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(f),p.setUTCDate(f-(p.getUTCDay()-this.weekStart+7)%7);var g=new Date(p.valueOf());g.setUTCDate(g.getUTCDate()+42),g=g.valueOf();for(var v,m=[];p.valueOf()<g;){if(p.getUTCDay()==this.weekStart&&(m.push("<tr>"),this.calendarWeeks)){var D=new Date(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()-p.getDay()+10-(this.weekStart&&this.weekStart%7<5&&7)),y=new Date(D.getFullYear(),0,4),w=~~((D-y)/864e5/7+1.5);m.push('<td class="cw">'+w+"</td>")}v=" "+this.onRender(p)+" ",p.getUTCFullYear()<n||p.getUTCFullYear()==n&&p.getUTCMonth()<h?v+=" old":(p.getUTCFullYear()>n||p.getUTCFullYear()==n&&p.getUTCMonth()>h)&&(v+=" new"),this.todayHighlight&&p.getUTCFullYear()==u.getFullYear()&&p.getUTCMonth()==u.getMonth()&&p.getUTCDate()==u.getDate()&&(v+=" today"),c&&p.valueOf()==c&&(v+=" active"),(p.valueOf()<this.startDate||p.valueOf()>this.endDate||-1!==t.inArray(p.getUTCDay(),this.daysOfWeekDisabled))&&(v+=" disabled"),m.push('<td class="day'+v+'">'+p.getUTCDate()+"</td>"),p.getUTCDay()==this.weekEnd&&m.push("</tr>"),p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(m.join(""));var k=this.date&&this.date.getUTCFullYear(),M=this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");k&&k==n&&M.eq(this.date.getUTCMonth()).addClass("active"),(n<r||n>d)&&M.addClass("disabled"),n==r&&M.slice(0,o).addClass("disabled"),n==d&&M.slice(l+1).addClass("disabled"),m="",n=10*parseInt(n/10,10);var T=this.picker.find(".datepicker-years").find("th:eq(1)").text(n+"-"+(n+9)).end().find("td");n-=1;for(var b=-1;b<11;b++)m+='<span class="year'+(-1==b||10==b?" old":"")+(k==n?" active":"")+(n<r||n>d?" disabled":"")+'">'+n+"</span>",n+=1;T.html(m)},updateNavArrows:function(){var t=new Date(this.viewDate.valueOf()),e=t.getUTCFullYear(),a=t.getUTCMonth();switch(this.viewMode){case 0:this.startDate!==-1/0&&e<=this.startDate.getUTCFullYear()&&a<=this.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==1/0&&e>=this.endDate.getUTCFullYear()&&a>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.startDate!==-1/0&&e<=this.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.endDate!==1/0&&e>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},click:function(a){a.stopPropagation(),a.preventDefault(),t(a.target).hasClass("datepicker-close")&&this.hide();var i=t(a.target).closest("span, td, th");if(1==i.length)switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"date-switch":this.showMode(1);break;case"prev":case"next":var n=s.modes[this.viewMode].navStep*("prev"==i[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,n);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,n)}this.fill();break;case"today":var h=new Date;h=e(h.getFullYear(),h.getMonth(),h.getDate(),0,0,0),this.showMode(-2);var r="linked"==this.todayBtn?null:"view";this._setDate(h,r)}break;case"span":if(!i.is(".disabled")){if(this.viewDate.setUTCDate(1),i.is(".month")){var o=i.parent().find("span").index(i);this.viewDate.setUTCMonth(o),this.element.trigger({type:"changeMonth",date:this.viewDate})}else{var d=parseInt(i.text(),10)||0;this.viewDate.setUTCFullYear(d),this.element.trigger({type:"changeYear",date:this.viewDate})}this.showMode(-1),this.fill()}break;case"td":if(i.is(".day")&&!i.is(".disabled")){var l=parseInt(i.text(),10)||1;d=this.viewDate.getUTCFullYear(),o=this.viewDate.getUTCMonth();i.is(".old")?0===o?(o=11,d-=1):o-=1:i.is(".new")&&(11==o?(o=0,d+=1):o+=1),this._setDate(e(d,o,l,0,0,0,0))}}},_setDate:function(t,e){var a;e&&"date"!=e||(this.date=t),e&&"view"!=e||(this.viewDate=t),this.fill(),this.setValue(),this.element.trigger({type:"changeDate",date:this.date}),this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&(a.change(),!this.autoclose||e&&"date"!=e||this.hide())},moveMonth:function(t,e){if(!e)return t;var a,i,s=new Date(t.valueOf()),n=s.getUTCDate(),h=s.getUTCMonth(),r=Math.abs(e);if(e=e>0?1:-1,1==r)i=-1==e?function(){return s.getUTCMonth()==h}:function(){return s.getUTCMonth()!=a},a=h+e,s.setUTCMonth(a),(a<0||a>11)&&(a=(a+12)%12);else{for(var o=0;o<r;o++)s=this.moveMonth(s,e);a=s.getUTCMonth(),s.setUTCDate(n),i=function(){return a!=s.getUTCMonth()}}for(;i();)s.setUTCDate(--n),s.setUTCMonth(a);return s},moveYear:function(t,e){return this.moveMonth(t,12*e)},dateWithinRange:function(t){return t>=this.startDate&&t<=this.endDate},keydown:function(t){if(this.picker.is(":not(:visible)"))27==t.keyCode&&this.show();else{var e,a,i,s,n=!1;switch(t.keyCode){case 27:this.hide(),t.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;e=37==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):((a=new Date(this.date.valueOf())).setUTCDate(this.date.getUTCDate()+e),(i=new Date(this.viewDate.valueOf())).setUTCDate(this.viewDate.getUTCDate()+e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),n=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;e=38==t.keyCode?-1:1,t.ctrlKey?(a=this.moveYear(this.date,e),i=this.moveYear(this.viewDate,e)):t.shiftKey?(a=this.moveMonth(this.date,e),i=this.moveMonth(this.viewDate,e)):((a=new Date(this.date.valueOf())).setUTCDate(this.date.getUTCDate()+7*e),(i=new Date(this.viewDate.valueOf())).setUTCDate(this.viewDate.getUTCDate()+7*e)),this.dateWithinRange(a)&&(this.date=a,this.viewDate=i,this.setValue(),this.update(),t.preventDefault(),n=!0);break;case 13:this.hide(),t.preventDefault();break;case 9:this.hide()}if(n)this.element.trigger({type:"changeDate",date:this.date}),this.isInput?s=this.element:this.component&&(s=this.element.find("input")),s&&s.change()}},showMode:function(t){t&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+t))),this.picker.find(">div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}},t.fn.fdatepicker=function(e){var i=Array.apply(null,arguments);return i.shift(),this.each((function(){var s=t(this),n=s.data("datepicker"),h="object"==typeof e&&e;n||s.data("datepicker",n=new a(this,t.extend({},t.fn.fdatepicker.defaults,h))),"string"==typeof e&&"function"==typeof n[e]&&n[e].apply(n,i)}))},t.fn.fdatepicker.defaults={onRender:function(t){return""}},t.fn.fdatepicker.Constructor=a;var i=t.fn.fdatepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"},pl:{days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"],daysShort:["Nie","Pon","Wt","Śr","Czw","Pt","Sob","Nie"],daysMin:["Nd","Po","Wt","Śr","Czw","Pt","So","Nd"],months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthsShort:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lit","Gru"],today:"Dzisiaj"},es:{days:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],daysShort:["Dom","Lun","Mar","Mie","Jue","Vie","Sab","Dom"],daysMin:["Do","Lu","Ma","Mi","Ju","Vi","Sa","Do"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"],monthsShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],today:"Hoy"},pt:{days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo"],daysShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb","Dom"],daysMin:["Do","Se","Te","Qu","Qu","Se","Sá","Do"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthsShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],today:"Hoje"},it:{days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],daysShort:["Dom","Lun","Mar","Mer","Gio","Veb","Sab","Dom"],daysMin:["Do","Lu","Ma","Me","Gi","Ve","Sa","Do"],months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],monthsShort:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],today:"Oggi"}},s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(t){return t%4==0&&t%100!=0||t%400==0},getDaysInMonth:function(t,e){return[31,s.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(t){var e=t.replace(this.validParts,"\0").split("\0"),a=t.match(this.validParts);if(!e||!e.length||!a||0===a.length)throw new Error("Invalid date format.");return{separators:e,parts:a}},parseDate:function(s,n,h){if(s instanceof Date)return s;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(s)){var r,o=/([\-+]\d+)([dmwy])/,d=s.match(/([\-+]\d+)([dmwy])/g);s=new Date;for(var l=0;l<d.length;l++)switch(p=o.exec(d[l]),r=parseInt(p[1]),p[2]){case"d":s.setUTCDate(s.getUTCDate()+r);break;case"m":s=a.prototype.moveMonth.call(a.prototype,s,r);break;case"w":s.setUTCDate(s.getUTCDate()+7*r);break;case"y":s=a.prototype.moveYear.call(a.prototype,s,r)}return e(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate(),0,0,0)}d=s&&s.match(this.nonpunctuation)||[],s=new Date;var c,u,p,f={},g=["yyyy","yy","M","MM","m","mm","d","dd"],v={yyyy:function(t,e){return t.setUTCFullYear(e)},yy:function(t,e){return t.setUTCFullYear(2e3+e)},m:function(t,e){for(e-=1;e<0;)e+=12;for(e%=12,t.setUTCMonth(e);t.getUTCMonth()!=e;)t.setUTCDate(t.getUTCDate()-1);return t},d:function(t,e){return t.setUTCDate(e)}};v.M=v.MM=v.mm=v.m,v.dd=v.d,s=e(s.getFullYear(),s.getMonth(),s.getDate(),0,0,0);var m=n.parts.slice();if(d.length!=m.length&&(m=t(m).filter((function(e,a){return-1!==t.inArray(a,g)})).toArray()),d.length==m.length){l=0;for(var D=m.length;l<D;l++){if(c=parseInt(d[l],10),p=m[l],isNaN(c))switch(p){case"MM":u=t(i[h].months).filter((function(){var t=this.slice(0,d[l].length);return t==d[l].slice(0,t.length)})),c=t.inArray(u[0],i[h].months)+1;break;case"M":u=t(i[h].monthsShort).filter((function(){var t=this.slice(0,d[l].length);return t==d[l].slice(0,t.length)})),c=t.inArray(u[0],i[h].monthsShort)+1}f[p]=c}var y;for(l=0;l<g.length;l++)(y=g[l])in f&&!isNaN(f[y])&&v[y](s,f[y])}return s},formatDate:function(e,a,s){var n={d:e.getUTCDate(),D:i[s].daysShort[e.getUTCDay()],DD:i[s].days[e.getUTCDay()],m:e.getUTCMonth()+1,M:i[s].monthsShort[e.getUTCMonth()],MM:i[s].months[e.getUTCMonth()],yy:e.getUTCFullYear().toString().substring(2),yyyy:e.getUTCFullYear()};n.dd=(n.d<10?"0":"")+n.d,n.mm=(n.m<10?"0":"")+n.m;e=[];for(var h=t.extend([],a.separators),r=0,o=a.parts.length;r<o;r++)h.length&&e.push(h.shift()),e.push(n[a.parts[r]]);return e.join("")},headTemplate:'<thead><tr><th class="prev"><i class="fa fa-chevron-left fa-chevron-left"/></th><th colspan="5" class="date-switch"></th><th class="next"><i class="fa fa-chevron-right fa-chevron-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};s.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+s.headTemplate+"<tbody></tbody>"+s.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><a class="button datepicker-close small alert right" style="width:auto;"><i class="fa fa-remove fa-times"></i></a></div>',t.fn.fdatepicker.DPGlobal=s}(window.jQuery);
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
"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}!function(){var addClassName=function(node,str){0===node.className.split(" ").filter((function(s){return s===str})).length&&(node.className+=" ".concat(str))},removeClassName=function(node,str){node.className=node.className.split(" ").filter((function(s){return s!==str})).join(" ")},numberBorder=function(num,max,min){return Math.max(Math.min(num,max),min)},rgbToHsb=function(hex){var hsb={h:0,s:0,b:0};if(0===hex.indexOf("#")&&(hex=hex.substring(1)),3===hex.length&&(hex=hex.split("").map((function(s){return s+s})).join("")),6!==hex.length)return!1;var rgb_r=(hex=[hex.substr(0,2),hex.substr(2,2),hex.substr(4,2)].map((function(s){return parseInt(s,16)})))[0],rgb_g=hex[1],rgb_b=hex[2],MAX=Math.max.apply(Math,_toConsumableArray(hex)),MIN=Math.min.apply(Math,_toConsumableArray(hex));return MAX===MIN?hsb.h=0:MAX===rgb_r&&rgb_g>=rgb_b?hsb.h=60*(rgb_g-rgb_b)/(MAX-MIN)+0:MAX===rgb_r&&rgb_g<rgb_b?hsb.h=60*(rgb_g-rgb_b)/(MAX-MIN)+360:MAX===rgb_g?hsb.h=60*(rgb_b-rgb_r)/(MAX-MIN)+120:MAX===rgb_b&&(hsb.h=60*(rgb_r-rgb_g)/(MAX-MIN)+240),hsb.s=0===MAX?0:1-MIN/MAX,hsb.b=MAX/255,hsb},heightToRgb=function(heightPercent){var rgb={r:void 0,g:void 0,b:void 0},percentInEach=6*(heightPercent=1-heightPercent);return Object.entries(rgb).reduce((function(lastObj,nowArr,index){return Object.assign(lastObj,_defineProperty({},nowArr[0],Math.floor(function(){var left=(index+1)%3*2,differenceL=percentInEach-left,differenceR=left+2-percentInEach;if(differenceL>=0&&differenceR>=0)return 0;var distance=Math.min(Math.abs(differenceL),Math.abs(differenceR),Math.abs(6-differenceL),Math.abs(6-differenceR));return Math.min(255,255*distance)}())))}),{})},heightAddLAndT_ToRGB=function(height,left,top){var rgb=heightToRgb(height);for(var key in rgb)rgb[key]=(255-rgb[key])*(1-left)+rgb[key],rgb[key]=rgb[key]*(1-top);return rgb},rgbToHex=function(rgb){var r=rgb.r,g=rgb.g,b=rgb.b;return Math.floor(r).toString(16).padStart(2,"0")+Math.floor(g).toString(16).padStart(2,"0")+Math.floor(b).toString(16).padStart(2,"0")},hexToRgb=function(hex){return{r:parseInt(hex.substr(0,2),16),g:parseInt(hex.substr(2,2),16),b:parseInt(hex.substr(4,2),16)}},cE=function(str){return document.createElement(str)},ColorPicker=function(){function ColorPicker(){var _this=this,_ref=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_ref$dom=_ref.dom,dom=void 0===_ref$dom?cE("div"):_ref$dom,_ref$value=(_ref.input,_ref.value),value=void 0===_ref$value?"FFF":_ref$value;_classCallCheck(this,ColorPicker),this.dom=dom;var thisClass=this;Array.prototype.forEach.call(this.getDOM().children,(function(node){node.remove()})),addClassName(dom,"color-picker");var rightBar=cE("div");rightBar.className="color-picker-right-bar";var rightBarPicker=cE("div");rightBarPicker.className="color-picker-right-bar-picker",rightBar.appendChild(rightBarPicker);var colorBlock=cE("div");colorBlock.className="color-picker-color-block";var gradientColor=cE("div");gradientColor.className="color-picker-gradients color-picker-gradient-color";var gradientBlack=cE("div");gradientBlack.className="color-picker-gradients color-picker-gradient-black",gradientColor.style.background="linear-gradient(to right,#FFFFFF,#FF0000)";var gradientCircle=cE("div");gradientCircle.className="color-picker-circle",gradientBlack.appendChild(gradientCircle);var textInput=cE("input"),textInputBox=cE("div");textInputBox.className="color-picker-input",textInput.maxLength=6,textInput.style.width="100%",textInput.style.height="100%",textInputBox.appendChild(textInput),this.getDOM().appendChild(rightBar),this.getDOM().appendChild(colorBlock),this.getDOM().appendChild(textInputBox),this.getDOM().appendChild(gradientColor),this.getDOM().appendChild(gradientBlack),textInput.addEventListener("change",(function(){_this.setValue(textInput.value,!0),_this.onchange(),_this.updatePicker()})),this.textInput=textInput,this._gradientBlack=gradientBlack,this._gradientColor=gradientColor,this._rightBar=rightBar,this._rightBarPicker=rightBarPicker,this._colorBlock=colorBlock,this._gradientCircle=gradientCircle,this._height=0,this._mouseX=0,this._mouseY=0,this.setValue(value,!0),this._lastValue=this.value,this.updatePicker();var mouseMoveFun=function mouseMoveFun(e){window.addEventListener("mouseup",(function mouseUpFun(){thisClass.getDOM().style.userSelect="text",window.removeEventListener("mousemove",mouseMoveFun),window.removeEventListener("mouseup",mouseUpFun)}));var bbox=thisClass._gradientBlack.getBoundingClientRect();_this._mouseX=e.clientX-bbox.left,_this._mouseY=e.clientY-bbox.top,_this.mouseBorder(),_this.setValue(heightAddLAndT_ToRGB(_this.height,_this.position.x,_this.position.y)),_this.updatePicker()},mouseMoveFunBar=function mouseMoveFunBar(e){window.addEventListener("mouseup",(function mouseUpFunBar(){thisClass.getDOM().style.userSelect="text",window.removeEventListener("mousemove",mouseMoveFunBar),window.removeEventListener("mouseup",mouseUpFunBar)}));var bbox=thisClass._rightBar.getBoundingClientRect();_this._height=e.clientY-bbox.top,_this.mouseBorderBar(),_this.setValue(heightAddLAndT_ToRGB(_this.height,_this.position.x,_this.position.y)),_this.updatePicker()};if(this._gradientBlack.addEventListener("mousedown",(function(e){_this.getDOM().style.userSelect="none",mouseMoveFun(e),window.addEventListener("mousemove",mouseMoveFun)})),this._rightBar.addEventListener("mousedown",(function(e){_this.getDOM().style.userSelect="none",mouseMoveFunBar(e),window.addEventListener("mousemove",mouseMoveFunBar)})),"ontouchstart"in window){var touchFun=function(e){e.preventDefault(),e=e.touches[0];var bbox=thisClass._gradientBlack.getBoundingClientRect();_this._mouseX=e.clientX-bbox.left,_this._mouseY=e.clientY-bbox.top,_this.mouseBorder(),_this.setValue(heightAddLAndT_ToRGB(_this.height,_this.position.x,_this.position.y)),_this.updatePicker()},touchFunBar=function(e){e.preventDefault(),e=e.touches[0];var bbox=_this._rightBar.getBoundingClientRect();_this._height=e.clientY-bbox.top,_this.mouseBorderBar(),_this.setValue(heightAddLAndT_ToRGB(_this.height,_this.position.x,_this.position.y)),_this.updatePicker()};this._gradientBlack.addEventListener("touchmove",touchFun),this._gradientBlack.addEventListener("touchstart",touchFun),this._rightBar.addEventListener("touchmove",touchFunBar),this._rightBar.addEventListener("touchstart",touchFunBar)}this._changeFunctions=[]}return _createClass(ColorPicker,[{key:"onchange",value:function(){var _this2=this;this._changeFunctions.forEach((function(fun){return fun({target:_this2,type:"change",timeStamp:performance.now()})}))}},{key:"addEventListener",value:function(type,fun){if("function"==typeof fun)switch(type){case"change":this._changeFunctions.push(fun)}}},{key:"getValue",value:function(){var mode=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value";switch(mode){case"hex":return this._value;case"rgb":return hexToRgb(this.getValue("hex"));case"hsb":return rgbToHsb(this.getValue("hex"));case"value":default:return"#"+this._value}}},{key:"getBrightness",value:function(){var _this$getValue=this.getValue("rgb");return.299*_this$getValue.r+.587*_this$getValue.g+.114*_this$getValue.b}},{key:"setValue",value:function(value){var rgb,resetPosition=arguments.length>1&&void 0!==arguments[1]&&arguments[1],hex="";switch(_typeof(value)){case"string":0===value.indexOf("#")&&(value=value.substring(1)),3===value.length&&(value=value.split("").map((function(s){return s+s})).join("")),6!==value.length&&(value="FFFFFF"),hex=value;break;case"object":hex=rgbToHex(value)}try{rgb=hexToRgb(hex)}catch(error){rgb={r:255,g:255,b:255}}var _rgb=rgb,r=_rgb.r,g=_rgb.g,b=_rgb.b;if(this._value=rgbToHex({r:r,g:g,b:b}).toUpperCase(),this.textInput.value=this._value,this._colorBlock.style.backgroundColor=this.getValue(),resetPosition){var _rgbToHsb=rgbToHsb(hex),h=_rgbToHsb.h,s=_rgbToHsb.s,_b=_rgbToHsb.b;this._height=1-h/360,0===h&&(this._height=0),this._mouseX=s,this._mouseY=1-_b}else this._lastValue!==this.value&&this.onchange();this._lastValue=this.value}},{key:"getDOM",value:function(){return this.dom}},{key:"mouseBorder",value:function(){this._mouseX=numberBorder(this._mouseX/(this._gradientBlack.getBoundingClientRect().width-2),1,0),this._mouseY=numberBorder(this._mouseY/(this._gradientBlack.getBoundingClientRect().height-2),1,0)}},{key:"mouseBorderBar",value:function(){this._height=numberBorder(this._height/(this._rightBar.getBoundingClientRect().height-2),1,0)}},{key:"updatePicker",value:function(){var position=this.position,target=this._gradientCircle;target.style.left="".concat(100*position.x,"%"),target.style.top="".concat(100*position.y,"%"),this._rightBarPicker.style.top="".concat(100*this.height,"%"),this._gradientColor.style.background="linear-gradient(to right,#FFFFFF,#".concat(rgbToHex(heightToRgb(this.height)),")"),this.getBrightness()>152?(addClassName(target,"color-picker-circle-black"),removeClassName(target,"color-picker-circle-white")):(removeClassName(target,"color-picker-circle-black"),addClassName(target,"color-picker-circle-white"))}},{key:"position",get:function(){return{x:this._mouseX,y:this._mouseY}}},{key:"height",get:function(){return this._height}},{key:"value",get:function(){return this.getValue()},set:function(value){this.setValue(value,!0),this.updatePicker()}}]),ColorPicker}();"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports.ColorPicker=ColorPicker:"object"===("undefined"==typeof window?"undefined":_typeof(window))&&(window.ColorPicker=ColorPicker)}();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LHCReactAPPAdmin=t():e.LHCReactAPPAdmin=t()}(window,(function(){return function(e){function t(t){for(var n,i,a=t[0],o=t[1],l=0,s=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);s.length;)s.shift()()}var n={},r={1:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,i){n=r[e]=[t,i]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(e){return i.p+""+({}[e]||e)+"."+{0:"17d125e1a3382cf418e1",2:"a176bfe7e263ffc9d5d6",3:"a1fbccf937049deed46f",4:"1943bcf1888f1e046d1c",5:"a7df8a939324c9a5c072"}[e]+".js"}(e);var u=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,n[1](u)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[],o=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=o;return i(i.s=10)}([function(e,t,n){"use strict";e.exports=n(6)},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(7)},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,l,u=o(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))i.call(n,c)&&(u[c]=n[c]);if(r){l=r(n);for(var f=0;f<l.length;f++)a.call(n,l[f])&&(u[l[f]]=n[l[f]])}}return u}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){"use strict";var r=n(3),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,l=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,p=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.memo"):60115,g=i?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function k(){}function x(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=w.prototype;var E=x.prototype=new k;E.constructor=x,r(E,w.prototype),E.isPureReactComponent=!0;var S={current:null},T=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,i={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)T.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:S.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,O=[];function R(e,t,n,r){if(O.length){var i=O.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function z(e,t,n){return null==e?0:function e(t,n,r,i){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var u=!1;if(null===t)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case o:u=!0}}if(u)return r(i,t,""===n?"."+I(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var c=n+I(l=t[s],s);u+=e(l,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),s=0;!(l=t.next()).done;)u+=e(l=l.value,c=n+I(l,s++),r,i);else if("object"===l)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function j(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,i){var a="";null!=n&&(a=(""+n).replace(N,"$&/")+"/"),z(e,M,t=R(t,a,r,i)),L(t)}var D={current:null};function A(){var e=D.current;if(null===e)throw Error(v(321));return e}var U={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;z(e,j,t=R(null,null,t,n)),L(t)},count:function(e){return z(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(v(143));return e}},t.Component=w,t.Fragment=l,t.Profiler=s,t.PureComponent=x,t.StrictMode=u,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var i=r({},e.props),o=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)T.call(t,c)&&!C.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:a,type:e.type,key:o,ref:l,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:g,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";var r=n(0),i=n(3),a=n(8);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(o(227));function l(e,t,n,r,i,a,o,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}var u=!1,s=null,c=!1,f=null,d={onError:function(e){u=!0,s=e}};function p(e,t,n,r,i,a,o,c,f){u=!1,s=null,l.apply(d,arguments)}var h=null,g=null,m=null;function v(e,t,n){var r=e.type||"unknown-event";e.currentTarget=m(n),function(e,t,n,r,i,a,l,d,h){if(p.apply(this,arguments),u){if(!u)throw Error(o(198));var g=s;u=!1,s=null,c||(c=!0,f=g)}}(r,t,void 0,e),e.currentTarget=null}var y=null,b={};function w(){if(y)for(var e in b){var t=b[e],n=y.indexOf(e);if(!(-1<n))throw Error(o(96,e));if(!x[n]){if(!t.extractEvents)throw Error(o(97,e));for(var r in x[n]=t,n=t.eventTypes){var i=void 0,a=n[r],l=t,u=r;if(E.hasOwnProperty(u))throw Error(o(99,u));E[u]=a;var s=a.phasedRegistrationNames;if(s){for(i in s)s.hasOwnProperty(i)&&k(s[i],l,u);i=!0}else a.registrationName?(k(a.registrationName,l,u),i=!0):i=!1;if(!i)throw Error(o(98,r,e))}}}}function k(e,t,n){if(S[e])throw Error(o(100,e));S[e]=t,T[e]=t.eventTypes[n].dependencies}var x=[],E={},S={},T={};function C(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!b.hasOwnProperty(t)||b[t]!==r){if(b[t])throw Error(o(102,t));b[t]=r,n=!0}}n&&w()}var P=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),_=null,N=null,O=null;function R(e){if(e=g(e)){if("function"!=typeof _)throw Error(o(280));var t=e.stateNode;t&&(t=h(t),_(e.stateNode,e.type,t))}}function L(e){N?O?O.push(e):O=[e]:N=e}function z(){if(N){var e=N,t=O;if(O=N=null,R(e),t)for(e=0;e<t.length;e++)R(t[e])}}function I(e,t){return e(t)}function j(e,t,n,r,i){return e(t,n,r,i)}function M(){}var F=I,D=!1,A=!1;function U(){null===N&&null===O||(M(),z())}function V(e,t,n){if(A)return e(t,n);A=!0;try{return F(e,t,n)}finally{A=!1,U()}}var H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,W=Object.prototype.hasOwnProperty,B={},$={};function Q(e,t,n,r,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){K[e]=new Q(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];K[t]=new Q(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){K[e]=new Q(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){K[e]=new Q(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){K[e]=new Q(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){K[e]=new Q(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){K[e]=new Q(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){K[e]=new Q(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){K[e]=new Q(e,5,!1,e.toLowerCase(),null,!1)}));var q=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(q,Y);K[t]=new Q(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(q,Y);K[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(q,Y);K[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!1)})),K.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){K[e]=new Q(e,1,!1,e.toLowerCase(),null,!0)}));var X=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function G(e,t,n,r){var i=K.hasOwnProperty(t)?K[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!W.call($,e)||!W.call(B,e)&&(H.test(e)?$[e]=!0:(B[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}X.hasOwnProperty("ReactCurrentDispatcher")||(X.ReactCurrentDispatcher={current:null}),X.hasOwnProperty("ReactCurrentBatchConfig")||(X.ReactCurrentBatchConfig={suspense:null});var J=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,ae=Z?Symbol.for("react.provider"):60109,oe=Z?Symbol.for("react.context"):60110,le=Z?Symbol.for("react.concurrent_mode"):60111,ue=Z?Symbol.for("react.forward_ref"):60112,se=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,fe=Z?Symbol.for("react.memo"):60115,de=Z?Symbol.for("react.lazy"):60116,pe=Z?Symbol.for("react.block"):60121,he="function"==typeof Symbol&&Symbol.iterator;function ge(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=he&&e[he]||e["@@iterator"])?e:null}function me(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case se:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case oe:return"Context.Consumer";case ae:return"Context.Provider";case ue:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case fe:return me(e.type);case pe:return me(e.render);case de:if(e=1===e._status?e._result:null)return me(e)}return null}function ve(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,a=me(e.type);n=null,r&&(n=me(r.type)),r=a,a="",i?a=" (at "+i.fileName.replace(J,"")+":"+i.lineNumber+")":n&&(a=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+a}t+=n,e=e.return}while(e);return t}function ye(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function we(e){e._valueTracker||(e._valueTracker=function(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ke(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function xe(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ee(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ye(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Se(e,t){null!=(t=t.checked)&&G(e,"checked",t,!1)}function Te(e,t){Se(e,t);var n=ye(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Pe(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pe(e,t.type,ye(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ce(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Pe(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function _e(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ye(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ye(n)}}function Le(e,t){var n=ye(t.value),r=ye(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ze(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Ie="http://www.w3.org/1999/xhtml",je="http://www.w3.org/2000/svg";function Me(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Me(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var De,Ae=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==je||"innerHTML"in e)e.innerHTML=t;else{for((De=De||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=De.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function Ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Ve(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var He={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},We={},Be={};function $e(e){if(We[e])return We[e];if(!He[e])return e;var t,n=He[e];for(t in n)if(n.hasOwnProperty(t)&&t in Be)return We[e]=n[t];return e}P&&(Be=document.createElement("div").style,"AnimationEvent"in window||(delete He.animationend.animation,delete He.animationiteration.animation,delete He.animationstart.animation),"TransitionEvent"in window||delete He.transitionend.transition);var Qe=$e("animationend"),Ke=$e("animationiteration"),qe=$e("animationstart"),Ye=$e("transitionend"),Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ge=new("function"==typeof WeakMap?WeakMap:Map);function Je(e){var t=Ge.get(e);return void 0===t&&(t=new Map,Ge.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(o(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return tt(i),e;if(a===r)return tt(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(o(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var at=null;function ot(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)v(e,t[r],n[r]);else t&&v(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function lt(e){if(null!==e&&(at=rt(at,e)),e=at,at=null,e){if(it(e,ot),at)throw Error(o(95));if(c)throw e=f,c=!1,f=null,e}}function ut(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function st(e){if(!P)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ft(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function dt(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function pt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=Pn(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=ut(e.nativeEvent);r=e.topLevelType;var a=e.nativeEvent,o=e.eventSystemFlags;0===n&&(o|=64);for(var l=null,u=0;u<x.length;u++){var s=x[u];s&&(s=s.extractEvents(r,t,a,i,o))&&(l=rt(l,s))}lt(l)}}function ht(e,t,n){if(!n.has(e)){switch(e){case"scroll":qt(t,"scroll",!0);break;case"focus":case"blur":qt(t,"focus",!0),qt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":st(e)&&qt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Xe.indexOf(e)&&Kt(e,t)}n.set(e,null)}}var gt,mt,vt,yt=!1,bt=[],wt=null,kt=null,xt=null,Et=new Map,St=new Map,Tt=[],Ct="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Pt="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function _t(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function Nt(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Et.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":St.delete(t.pointerId)}}function Ot(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e=_t(t,n,r,i,a),null!==t&&(null!==(t=_n(t))&&mt(t)),e):(e.eventSystemFlags|=r,e)}function Rt(e){var t=Pn(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void a.unstable_runWithPriority(e.priority,(function(){vt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=_n(t);return null!==n&&mt(n),e.blockedOn=t,!1}return!0}function zt(e,t,n){Lt(e)&&n.delete(t)}function It(){for(yt=!1;0<bt.length;){var e=bt[0];if(null!==e.blockedOn){null!==(e=_n(e.blockedOn))&&gt(e);break}var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:bt.shift()}null!==wt&&Lt(wt)&&(wt=null),null!==kt&&Lt(kt)&&(kt=null),null!==xt&&Lt(xt)&&(xt=null),Et.forEach(zt),St.forEach(zt)}function jt(e,t){e.blockedOn===t&&(e.blockedOn=null,yt||(yt=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,It)))}function Mt(e){function t(t){return jt(t,e)}if(0<bt.length){jt(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wt&&jt(wt,e),null!==kt&&jt(kt,e),null!==xt&&jt(xt,e),Et.forEach(t),St.forEach(t),n=0;n<Tt.length;n++)(r=Tt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&null===(n=Tt[0]).blockedOn;)Rt(n),null===n.blockedOn&&Tt.shift()}var Ft={},Dt=new Map,At=new Map,Ut=["abort","abort",Qe,"animationEnd",Ke,"animationIteration",qe,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ye,"transitionEnd","waiting","waiting"];function Vt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],a="on"+(i[0].toUpperCase()+i.slice(1));a={phasedRegistrationNames:{bubbled:a,captured:a+"Capture"},dependencies:[r],eventPriority:t},At.set(r,t),Dt.set(r,a),Ft[i]=a}}Vt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Vt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Vt(Ut,2);for(var Ht="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Wt=0;Wt<Ht.length;Wt++)At.set(Ht[Wt],0);var Bt=a.unstable_UserBlockingPriority,$t=a.unstable_runWithPriority,Qt=!0;function Kt(e,t){qt(t,e,!1)}function qt(e,t,n){var r=At.get(t);switch(void 0===r?2:r){case 0:r=Yt.bind(null,t,1,e);break;case 1:r=Xt.bind(null,t,1,e);break;default:r=Gt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Yt(e,t,n,r){D||M();var i=Gt,a=D;D=!0;try{j(i,e,t,n,r)}finally{(D=a)||U()}}function Xt(e,t,n,r){$t(Bt,Gt.bind(null,e,t,n,r))}function Gt(e,t,n,r){if(Qt)if(0<bt.length&&-1<Ct.indexOf(e))e=_t(null,e,t,n,r),bt.push(e);else{var i=Jt(e,t,n,r);if(null===i)Nt(e,r);else if(-1<Ct.indexOf(e))e=_t(i,e,t,n,r),bt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return wt=Ot(wt,e,t,n,r,i),!0;case"dragenter":return kt=Ot(kt,e,t,n,r,i),!0;case"mouseover":return xt=Ot(xt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Et.set(a,Ot(Et.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,St.set(a,Ot(St.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){Nt(e,r),e=dt(e,r,null,t);try{V(pt,e)}finally{ft(e)}}}}function Jt(e,t,n,r){if(null!==(n=Pn(n=ut(r)))){var i=Ze(n);if(null===i)n=null;else{var a=i.tag;if(13===a){if(null!==(n=et(i)))return n;n=null}else if(3===a){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=dt(e,r,n,t);try{V(pt,e)}finally{ft(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function an(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(o(62,""))}}function on(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ln=Ie;function un(e,t){var n=Je(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=T[t];for(var r=0;r<t.length;r++)ht(t[r],e,n)}function sn(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function fn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var n,r=fn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fn(r)}}function pn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var gn=null,mn=null;function vn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function yn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var bn="function"==typeof setTimeout?setTimeout:void 0,wn="function"==typeof clearTimeout?clearTimeout:void 0;function kn(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function xn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),Sn="__reactInternalInstance$"+En,Tn="__reactEventHandlers$"+En,Cn="__reactContainere$"+En;function Pn(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cn]||n[Sn]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=xn(e);null!==e;){if(n=e[Sn])return n;e=xn(e)}return t}n=(e=n).parentNode}return null}function _n(e){return!(e=e[Sn]||e[Cn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Nn(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function On(e){return e[Tn]||null}function Rn(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Ln(e,t){var n=e.stateNode;if(!n)return null;var r=h(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));return n}function zn(e,t,n){(t=Ln(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function In(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Rn(t);for(t=n.length;0<t--;)zn(n[t],"captured",e);for(t=0;t<n.length;t++)zn(n[t],"bubbled",e)}}function jn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=Ln(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Mn(e){e&&e.dispatchConfig.registrationName&&jn(e._targetInst,null,e)}function Fn(e){it(e,In)}var Dn=null,An=null,Un=null;function Vn(){if(Un)return Un;var e,t,n=An,r=n.length,i="value"in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Un=i.slice(e,1<t?1-t:void 0)}function Hn(){return!0}function Wn(){return!1}function Bn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Hn:Wn,this.isPropagationStopped=Wn,this}function $n(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function Qn(e){if(!(e instanceof this))throw Error(o(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Kn(e){e.eventPool=[],e.getPooled=$n,e.release=Qn}i(Bn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){this.isPersistent=Hn},isPersistent:Wn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Wn,this._dispatchInstances=this._dispatchListeners=null}}),Bn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Bn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var a=new t;return i(a,n.prototype),n.prototype=a,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Kn(n),n},Kn(Bn);var qn=Bn.extend({data:null}),Yn=Bn.extend({data:null}),Xn=[9,13,27,32],Gn=P&&"CompositionEvent"in window,Jn=null;P&&"documentMode"in document&&(Jn=document.documentMode);var Zn=P&&"TextEvent"in window&&!Jn,er=P&&(!Gn||Jn&&8<Jn&&11>=Jn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Xn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function ar(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var or=!1;var lr={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Gn)e:{switch(e){case"compositionstart":var a=nr.compositionStart;break e;case"compositionend":a=nr.compositionEnd;break e;case"compositionupdate":a=nr.compositionUpdate;break e}a=void 0}else or?ir(e,n)&&(a=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(a=nr.compositionStart);return a?(er&&"ko"!==n.locale&&(or||a!==nr.compositionStart?a===nr.compositionEnd&&or&&(i=Vn()):(An="value"in(Dn=r)?Dn.value:Dn.textContent,or=!0)),a=qn.getPooled(a,t,n,r),i?a.data=i:null!==(i=ar(n))&&(a.data=i),Fn(a),i=a):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return ar(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(or)return"compositionend"===e||!Gn&&ir(e,t)?(e=Vn(),Un=An=Dn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Yn.getPooled(nr.beforeInput,t,n,r)).data=e,Fn(t)):t=null,null===i?t:null===t?i:[i,t]}},ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!ur[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function fr(e,t,n){return(e=Bn.getPooled(cr.change,e,t,n)).type="change",L(n),Fn(e),e}var dr=null,pr=null;function hr(e){lt(e)}function gr(e){if(ke(Nn(e)))return e}function mr(e,t){if("change"===e)return t}var vr=!1;function yr(){dr&&(dr.detachEvent("onpropertychange",br),pr=dr=null)}function br(e){if("value"===e.propertyName&&gr(pr))if(e=fr(pr,e,ut(e)),D)lt(e);else{D=!0;try{I(hr,e)}finally{D=!1,U()}}}function wr(e,t,n){"focus"===e?(yr(),pr=n,(dr=t).attachEvent("onpropertychange",br)):"blur"===e&&yr()}function kr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return gr(pr)}function xr(e,t){if("click"===e)return gr(t)}function Er(e,t){if("input"===e||"change"===e)return gr(t)}P&&(vr=st("input")&&(!document.documentMode||9<document.documentMode));var Sr={eventTypes:cr,_isInputEventSupported:vr,extractEvents:function(e,t,n,r){var i=t?Nn(t):window,a=i.nodeName&&i.nodeName.toLowerCase();if("select"===a||"input"===a&&"file"===i.type)var o=mr;else if(sr(i))if(vr)o=Er;else{o=kr;var l=wr}else(a=i.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(o=xr);if(o&&(o=o(e,t)))return fr(o,n,r);l&&l(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Pe(i,"number",i.value)}},Tr=Bn.extend({view:null,detail:null}),Cr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Cr[e])&&!!t[e]}function _r(){return Pr}var Nr=0,Or=0,Rr=!1,Lr=!1,zr=Tr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:_r,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Nr;return Nr=e.screenX,Rr?"mousemove"===e.type?e.screenX-t:0:(Rr=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Or;return Or=e.screenY,Lr?"mousemove"===e.type?e.screenY-t:0:(Lr=!0,0)}}),Ir=zr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),jr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Mr={eventTypes:jr,extractEvents:function(e,t,n,r,i){var a="mouseover"===e||"pointerover"===e,o="mouseout"===e||"pointerout"===e;if(a&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!o&&!a)return null;(a=r.window===r?r:(a=r.ownerDocument)?a.defaultView||a.parentWindow:window,o)?(o=t,null!==(t=(t=n.relatedTarget||n.toElement)?Pn(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):o=null;if(o===t)return null;if("mouseout"===e||"mouseover"===e)var l=zr,u=jr.mouseLeave,s=jr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(l=Ir,u=jr.pointerLeave,s=jr.pointerEnter,c="pointer");if(e=null==o?a:Nn(o),a=null==t?a:Nn(t),(u=l.getPooled(u,o,n,r)).type=c+"leave",u.target=e,u.relatedTarget=a,(n=l.getPooled(s,t,n,r)).type=c+"enter",n.target=a,n.relatedTarget=e,c=t,(r=o)&&c)e:{for(s=c,o=0,e=l=r;e;e=Rn(e))o++;for(e=0,t=s;t;t=Rn(t))e++;for(;0<o-e;)l=Rn(l),o--;for(;0<e-o;)s=Rn(s),e--;for(;o--;){if(l===s||l===s.alternate)break e;l=Rn(l),s=Rn(s)}l=null}else l=null;for(s=l,l=[];r&&r!==s&&(null===(o=r.alternate)||o!==s);)l.push(r),r=Rn(r);for(r=[];c&&c!==s&&(null===(o=c.alternate)||o!==s);)r.push(c),c=Rn(c);for(c=0;c<l.length;c++)jn(l[c],"bubbled",u);for(c=r.length;0<c--;)jn(r[c],"captured",n);return 0==(64&i)?[u]:[u,n]}};var Fr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Dr=Object.prototype.hasOwnProperty;function Ar(e,t){if(Fr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Dr.call(t,n[r])||!Fr(e[n[r]],t[n[r]]))return!1;return!0}var Ur=P&&"documentMode"in document&&11>=document.documentMode,Vr={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Hr=null,Wr=null,Br=null,$r=!1;function Qr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return $r||null==Hr||Hr!==cn(n)?null:("selectionStart"in(n=Hr)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Br&&Ar(Br,n)?null:(Br=n,(e=Bn.getPooled(Vr.select,Wr,e,t)).type="select",e.target=Hr,Fn(e),e))}var Kr={eventTypes:Vr,extractEvents:function(e,t,n,r,i,a){if(!(a=!(i=a||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Je(i),a=T.onSelect;for(var o=0;o<a.length;o++)if(!i.has(a[o])){i=!1;break e}i=!0}a=!i}if(a)return null;switch(i=t?Nn(t):window,e){case"focus":(sr(i)||"true"===i.contentEditable)&&(Hr=i,Wr=t,Br=null);break;case"blur":Br=Wr=Hr=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":return $r=!1,Qr(n,r);case"selectionchange":if(Ur)break;case"keydown":case"keyup":return Qr(n,r)}return null}},qr=Bn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Yr=Bn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xr=Tr.extend({relatedTarget:null});function Gr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Jr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Tr.extend({key:function(e){if(e.key){var t=Jr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Gr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:_r,charCode:function(e){return"keypress"===e.type?Gr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Gr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=zr.extend({dataTransfer:null}),ni=Tr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:_r}),ri=Bn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=zr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),ai={eventTypes:Ft,extractEvents:function(e,t,n,r){var i=Dt.get(e);if(!i)return null;switch(e){case"keypress":if(0===Gr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Xr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=zr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case Qe:case Ke:case qe:e=qr;break;case Ye:e=ri;break;case"scroll":e=Tr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Ir;break;default:e=Bn}return Fn(t=e.getPooled(i,t,n,r)),t}};if(y)throw Error(o(101));y=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),h=On,g=_n,m=Nn,C({SimpleEventPlugin:ai,EnterLeaveEventPlugin:Mr,ChangeEventPlugin:Sr,SelectEventPlugin:Kr,BeforeInputEventPlugin:lr});var oi=[],li=-1;function ui(e){0>li||(e.current=oi[li],oi[li]=null,li--)}function si(e,t){li++,oi[li]=e.current,e.current=t}var ci={},fi={current:ci},di={current:!1},pi=ci;function hi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function gi(e){return null!=(e=e.childContextTypes)}function mi(){ui(di),ui(fi)}function vi(e,t,n){if(fi.current!==ci)throw Error(o(168));si(fi,t),si(di,n)}function yi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in e))throw Error(o(108,me(t)||"Unknown",a));return i({},n,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,pi=fi.current,si(fi,e),si(di,di.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=yi(e,t,pi),r.__reactInternalMemoizedMergedChildContext=e,ui(di),ui(fi),si(fi,e)):ui(di),si(di,n)}var ki=a.unstable_runWithPriority,xi=a.unstable_scheduleCallback,Ei=a.unstable_cancelCallback,Si=a.unstable_requestPaint,Ti=a.unstable_now,Ci=a.unstable_getCurrentPriorityLevel,Pi=a.unstable_ImmediatePriority,_i=a.unstable_UserBlockingPriority,Ni=a.unstable_NormalPriority,Oi=a.unstable_LowPriority,Ri=a.unstable_IdlePriority,Li={},zi=a.unstable_shouldYield,Ii=void 0!==Si?Si:function(){},ji=null,Mi=null,Fi=!1,Di=Ti(),Ai=1e4>Di?Ti:function(){return Ti()-Di};function Ui(){switch(Ci()){case Pi:return 99;case _i:return 98;case Ni:return 97;case Oi:return 96;case Ri:return 95;default:throw Error(o(332))}}function Vi(e){switch(e){case 99:return Pi;case 98:return _i;case 97:return Ni;case 96:return Oi;case 95:return Ri;default:throw Error(o(332))}}function Hi(e,t){return e=Vi(e),ki(e,t)}function Wi(e,t,n){return e=Vi(e),xi(e,t,n)}function Bi(e){return null===ji?(ji=[e],Mi=xi(Pi,Qi)):ji.push(e),Li}function $i(){if(null!==Mi){var e=Mi;Mi=null,Ei(e)}Qi()}function Qi(){if(!Fi&&null!==ji){Fi=!0;var e=0;try{var t=ji;Hi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),ji=null}catch(t){throw null!==ji&&(ji=ji.slice(e+1)),xi(Pi,$i),t}finally{Fi=!1}}}function Ki(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function qi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Yi={current:null},Xi=null,Gi=null,Ji=null;function Zi(){Ji=Gi=Xi=null}function ea(e){var t=Yi.current;ui(Yi),e.type._context._currentValue=t}function ta(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function na(e,t){Xi=e,Ji=Gi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Oo=!0),e.firstContext=null)}function ra(e,t){if(Ji!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Ji=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Gi){if(null===Xi)throw Error(o(308));Gi=t,Xi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Gi=Gi.next=t;return e._currentValue}var ia=!1;function aa(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function la(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function ua(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function sa(e,t){var n=e.alternate;null!==n&&oa(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function ca(e,t,n,r){var a=e.updateQueue;ia=!1;var o=a.baseQueue,l=a.shared.pending;if(null!==l){if(null!==o){var u=o.next;o.next=l.next,l.next=u}o=l,a.shared.pending=null,null!==(u=e.alternate)&&(null!==(u=u.updateQueue)&&(u.baseQueue=l))}if(null!==o){u=o.next;var s=a.baseState,c=0,f=null,d=null,p=null;if(null!==u)for(var h=u;;){if((l=h.expirationTime)<r){var g={expirationTime:h.expirationTime,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null};null===p?(d=p=g,f=s):p=p.next=g,l>c&&(c=l)}else{null!==p&&(p=p.next={expirationTime:1073741823,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null}),au(l,h.suspenseConfig);e:{var m=e,v=h;switch(l=t,g=n,v.tag){case 1:if("function"==typeof(m=v.payload)){s=m.call(g,s,l);break e}s=m;break e;case 3:m.effectTag=-4097&m.effectTag|64;case 0:if(null==(l="function"==typeof(m=v.payload)?m.call(g,s,l):m))break e;s=i({},s,l);break e;case 2:ia=!0}}null!==h.callback&&(e.effectTag|=32,null===(l=a.effects)?a.effects=[h]:l.push(h))}if(null===(h=h.next)||h===u){if(null===(l=a.shared.pending))break;h=o.next=l.next,l.next=u,a.baseQueue=o=l,a.shared.pending=null}}null===p?f=s:p.next=d,a.baseState=f,a.baseQueue=p,ou(c),e.expirationTime=c,e.memoizedState=s}}function fa(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(o(191,r));r.call(i)}}}var da=X.ReactCurrentBatchConfig,pa=(new r.Component).refs;function ha(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ql(),i=da.suspense;(i=la(r=Kl(r,e,i),i)).payload=t,null!=n&&(i.callback=n),ua(e,i),ql(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ql(),i=da.suspense;(i=la(r=Kl(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),ua(e,i),ql(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ql(),r=da.suspense;(r=la(n=Kl(n,e,r),r)).tag=2,null!=t&&(r.callback=t),ua(e,r),ql(e,n)}};function ma(e,t,n,r,i,a,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Ar(n,r)||!Ar(i,a))}function va(e,t,n){var r=!1,i=ci,a=t.contextType;return"object"==typeof a&&null!==a?a=ra(a):(i=gi(t)?pi:fi.current,a=(r=null!=(r=t.contextTypes))?hi(e,i):ci),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ya(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function ba(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=pa,aa(e);var a=t.contextType;"object"==typeof a&&null!==a?i.context=ra(a):(a=gi(t)?pi:fi.current,i.context=hi(e,a)),ca(e,n,i,r),i.state=e.memoizedState,"function"==typeof(a=t.getDerivedStateFromProps)&&(ha(e,t,a,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ga.enqueueReplaceState(i,i.state,null),ca(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var wa=Array.isArray;function ka(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===pa&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function xa(e,t){if("textarea"!==e.type)throw Error(o(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Ea(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Cu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function l(t){return e&&null===t.alternate&&(t.effectTag=2),t}function u(e,t,n,r){return null===t||6!==t.tag?((t=Nu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function s(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=ka(e,t,n),r.return=e,r):((r=Pu(n.type,n.key,n.props,null,e.mode,r)).ref=ka(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ou(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function f(e,t,n,r,a){return null===t||7!==t.tag?((t=_u(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Nu(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Pu(t.type,t.key,t.props,null,e.mode,n)).ref=ka(e,null,t),n.return=e,n;case te:return(t=Ou(t,e.mode,n)).return=e,t}if(wa(t)||ge(t))return(t=_u(t,e.mode,n,null)).return=e,t;xa(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:u(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?f(e,t,n.props.children,r,i):s(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(wa(n)||ge(n))return null!==i?null:f(e,t,n,r,null);xa(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return u(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?f(t,e,r.props.children,i,r.key):s(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(wa(r)||ge(r))return f(t,e=e.get(n)||null,r,i,null);xa(t,r)}return null}function g(i,o,l,u){for(var s=null,c=null,f=o,g=o=0,m=null;null!==f&&g<l.length;g++){f.index>g?(m=f,f=null):m=f.sibling;var v=p(i,f,l[g],u);if(null===v){null===f&&(f=m);break}e&&f&&null===v.alternate&&t(i,f),o=a(v,o,g),null===c?s=v:c.sibling=v,c=v,f=m}if(g===l.length)return n(i,f),s;if(null===f){for(;g<l.length;g++)null!==(f=d(i,l[g],u))&&(o=a(f,o,g),null===c?s=f:c.sibling=f,c=f);return s}for(f=r(i,f);g<l.length;g++)null!==(m=h(f,i,g,l[g],u))&&(e&&null!==m.alternate&&f.delete(null===m.key?g:m.key),o=a(m,o,g),null===c?s=m:c.sibling=m,c=m);return e&&f.forEach((function(e){return t(i,e)})),s}function m(i,l,u,s){var c=ge(u);if("function"!=typeof c)throw Error(o(150));if(null==(u=c.call(u)))throw Error(o(151));for(var f=c=null,g=l,m=l=0,v=null,y=u.next();null!==g&&!y.done;m++,y=u.next()){g.index>m?(v=g,g=null):v=g.sibling;var b=p(i,g,y.value,s);if(null===b){null===g&&(g=v);break}e&&g&&null===b.alternate&&t(i,g),l=a(b,l,m),null===f?c=b:f.sibling=b,f=b,g=v}if(y.done)return n(i,g),c;if(null===g){for(;!y.done;m++,y=u.next())null!==(y=d(i,y.value,s))&&(l=a(y,l,m),null===f?c=y:f.sibling=y,f=y);return c}for(g=r(i,g);!y.done;m++,y=u.next())null!==(y=h(g,i,m,y.value,s))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),l=a(y,l,m),null===f?c=y:f.sibling=y,f=y);return e&&g.forEach((function(e){return t(i,e)})),c}return function(e,r,a,u){var s="object"==typeof a&&null!==a&&a.type===ne&&null===a.key;s&&(a=a.props.children);var c="object"==typeof a&&null!==a;if(c)switch(a.$$typeof){case ee:e:{for(c=a.key,s=r;null!==s;){if(s.key===c){switch(s.tag){case 7:if(a.type===ne){n(e,s.sibling),(r=i(s,a.props.children)).return=e,e=r;break e}break;default:if(s.elementType===a.type){n(e,s.sibling),(r=i(s,a.props)).ref=ka(e,s,a),r.return=e,e=r;break e}}n(e,s);break}t(e,s),s=s.sibling}a.type===ne?((r=_u(a.props.children,e.mode,u,a.key)).return=e,e=r):((u=Pu(a.type,a.key,a.props,null,e.mode,u)).ref=ka(e,r,a),u.return=e,e=u)}return l(e);case te:e:{for(s=a.key;null!==r;){if(r.key===s){if(4===r.tag&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),(r=i(r,a.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Ou(a,e.mode,u)).return=e,e=r}return l(e)}if("string"==typeof a||"number"==typeof a)return a=""+a,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,a)).return=e,e=r):(n(e,r),(r=Nu(a,e.mode,u)).return=e,e=r),l(e);if(wa(a))return g(e,r,a,u);if(ge(a))return m(e,r,a,u);if(c&&xa(e,a),void 0===a&&!s)switch(e.tag){case 1:case 0:throw e=e.type,Error(o(152,e.displayName||e.name||"Component"))}return n(e,r)}}var Sa=Ea(!0),Ta=Ea(!1),Ca={},Pa={current:Ca},_a={current:Ca},Na={current:Ca};function Oa(e){if(e===Ca)throw Error(o(174));return e}function Ra(e,t){switch(si(Na,t),si(_a,e),si(Pa,Ca),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fe(null,"");break;default:t=Fe(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ui(Pa),si(Pa,t)}function La(){ui(Pa),ui(_a),ui(Na)}function za(e){Oa(Na.current);var t=Oa(Pa.current),n=Fe(t,e.type);t!==n&&(si(_a,e),si(Pa,n))}function Ia(e){_a.current===e&&(ui(Pa),ui(_a))}var ja={current:0};function Ma(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fa(e,t){return{responder:e,props:t}}var Da=X.ReactCurrentDispatcher,Aa=X.ReactCurrentBatchConfig,Ua=0,Va=null,Ha=null,Wa=null,Ba=!1;function $a(){throw Error(o(321))}function Qa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function Ka(e,t,n,r,i,a){if(Ua=a,Va=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Da.current=null===e||null===e.memoizedState?vo:yo,e=n(r,i),t.expirationTime===Ua){a=0;do{if(t.expirationTime=0,!(25>a))throw Error(o(301));a+=1,Wa=Ha=null,t.updateQueue=null,Da.current=bo,e=n(r,i)}while(t.expirationTime===Ua)}if(Da.current=mo,t=null!==Ha&&null!==Ha.next,Ua=0,Wa=Ha=Va=null,Ba=!1,t)throw Error(o(300));return e}function qa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Wa?Va.memoizedState=Wa=e:Wa=Wa.next=e,Wa}function Ya(){if(null===Ha){var e=Va.alternate;e=null!==e?e.memoizedState:null}else e=Ha.next;var t=null===Wa?Va.memoizedState:Wa.next;if(null!==t)Wa=t,Ha=e;else{if(null===e)throw Error(o(310));e={memoizedState:(Ha=e).memoizedState,baseState:Ha.baseState,baseQueue:Ha.baseQueue,queue:Ha.queue,next:null},null===Wa?Va.memoizedState=Wa=e:Wa=Wa.next=e}return Wa}function Xa(e,t){return"function"==typeof t?t(e):t}function Ga(e){var t=Ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=Ha,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var u=l=a=null,s=i;do{var c=s.expirationTime;if(c<Ua){var f={expirationTime:s.expirationTime,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};null===u?(l=u=f,a=r):u=u.next=f,c>Va.expirationTime&&(Va.expirationTime=c,ou(c))}else null!==u&&(u=u.next={expirationTime:1073741823,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),au(c,s.suspenseConfig),r=s.eagerReducer===e?s.eagerState:e(r,s.action);s=s.next}while(null!==s&&s!==i);null===u?a=r:u.next=l,Fr(r,t.memoizedState)||(Oo=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Ja(e){var t=Ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{a=e(a,l.action),l=l.next}while(l!==i);Fr(a,t.memoizedState)||(Oo=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Za(e){var t=qa();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:e}).dispatch=go.bind(null,Va,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Va.updateQueue)?(t={lastEffect:null},Va.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function to(){return Ya().memoizedState}function no(e,t,n,r){var i=qa();Va.effectTag|=e,i.memoizedState=eo(1|t,n,void 0,void 0===r?null:r)}function ro(e,t,n,r){var i=Ya();r=void 0===r?null:r;var a=void 0;if(null!==Ha){var o=Ha.memoizedState;if(a=o.destroy,null!==r&&Qa(r,o.deps))return void eo(t,n,a,r)}Va.effectTag|=e,i.memoizedState=eo(1|t,n,a,r)}function io(e,t){return no(516,4,e,t)}function ao(e,t){return ro(516,4,e,t)}function oo(e,t){return ro(4,2,e,t)}function lo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function uo(e,t,n){return n=null!=n?n.concat([e]):null,ro(4,2,lo.bind(null,t,e),n)}function so(){}function co(e,t){return qa().memoizedState=[e,void 0===t?null:t],e}function fo(e,t){var n=Ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Qa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function po(e,t){var n=Ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Qa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ho(e,t,n){var r=Ui();Hi(98>r?98:r,(function(){e(!0)})),Hi(97<r?97:r,(function(){var r=Aa.suspense;Aa.suspense=void 0===t?null:t;try{e(!1),n()}finally{Aa.suspense=r}}))}function go(e,t,n){var r=Ql(),i=da.suspense;i={expirationTime:r=Kl(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var a=t.pending;if(null===a?i.next=i:(i.next=a.next,a.next=i),t.pending=i,a=e.alternate,e===Va||null!==a&&a===Va)Ba=!0,i.expirationTime=Ua,Va.expirationTime=Ua;else{if(0===e.expirationTime&&(null===a||0===a.expirationTime)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=a(o,n);if(i.eagerReducer=a,i.eagerState=l,Fr(l,o))return}catch(e){}ql(e,r)}}var mo={readContext:ra,useCallback:$a,useContext:$a,useEffect:$a,useImperativeHandle:$a,useLayoutEffect:$a,useMemo:$a,useReducer:$a,useRef:$a,useState:$a,useDebugValue:$a,useResponder:$a,useDeferredValue:$a,useTransition:$a},vo={readContext:ra,useCallback:co,useContext:ra,useEffect:io,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,no(4,2,lo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=qa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=qa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=go.bind(null,Va,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},qa().memoizedState=e},useState:Za,useDebugValue:so,useResponder:Fa,useDeferredValue:function(e,t){var n=Za(e),r=n[0],i=n[1];return io((function(){var n=Aa.suspense;Aa.suspense=void 0===t?null:t;try{i(e)}finally{Aa.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Za(!1),n=t[0];return t=t[1],[co(ho.bind(null,t,e),[t,e]),n]}},yo={readContext:ra,useCallback:fo,useContext:ra,useEffect:ao,useImperativeHandle:uo,useLayoutEffect:oo,useMemo:po,useReducer:Ga,useRef:to,useState:function(){return Ga(Xa)},useDebugValue:so,useResponder:Fa,useDeferredValue:function(e,t){var n=Ga(Xa),r=n[0],i=n[1];return ao((function(){var n=Aa.suspense;Aa.suspense=void 0===t?null:t;try{i(e)}finally{Aa.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Ga(Xa),n=t[0];return t=t[1],[fo(ho.bind(null,t,e),[t,e]),n]}},bo={readContext:ra,useCallback:fo,useContext:ra,useEffect:ao,useImperativeHandle:uo,useLayoutEffect:oo,useMemo:po,useReducer:Ja,useRef:to,useState:function(){return Ja(Xa)},useDebugValue:so,useResponder:Fa,useDeferredValue:function(e,t){var n=Ja(Xa),r=n[0],i=n[1];return ao((function(){var n=Aa.suspense;Aa.suspense=void 0===t?null:t;try{i(e)}finally{Aa.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Ja(Xa),n=t[0];return t=t[1],[fo(ho.bind(null,t,e),[t,e]),n]}},wo=null,ko=null,xo=!1;function Eo(e,t){var n=Su(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function So(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function To(e){if(xo){var t=ko;if(t){var n=t;if(!So(e,t)){if(!(t=kn(n.nextSibling))||!So(e,t))return e.effectTag=-1025&e.effectTag|2,xo=!1,void(wo=e);Eo(wo,n)}wo=e,ko=kn(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,xo=!1,wo=e}}function Co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;wo=e}function Po(e){if(e!==wo)return!1;if(!xo)return Co(e),xo=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!yn(t,e.memoizedProps))for(t=ko;t;)Eo(e,t),t=kn(t.nextSibling);if(Co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ko=kn(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ko=null}}else ko=wo?kn(e.stateNode.nextSibling):null;return!0}function _o(){ko=wo=null,xo=!1}var No=X.ReactCurrentOwner,Oo=!1;function Ro(e,t,n,r){t.child=null===e?Ta(t,null,n,r):Sa(t,e.child,n,r)}function Lo(e,t,n,r,i){n=n.render;var a=t.ref;return na(t,i),r=Ka(e,t,n,r,a,i),null===e||Oo?(t.effectTag|=1,Ro(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),qo(e,t,i))}function zo(e,t,n,r,i,a){if(null===e){var o=n.type;return"function"!=typeof o||Tu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Pu(n.type,null,r,null,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Io(e,t,o,r,i,a))}return o=e.child,i<a&&(i=o.memoizedProps,(n=null!==(n=n.compare)?n:Ar)(i,r)&&e.ref===t.ref)?qo(e,t,a):(t.effectTag|=1,(e=Cu(o,r)).ref=t.ref,e.return=t,t.child=e)}function Io(e,t,n,r,i,a){return null!==e&&Ar(e.memoizedProps,r)&&e.ref===t.ref&&(Oo=!1,i<a)?(t.expirationTime=e.expirationTime,qo(e,t,a)):Mo(e,t,n,r,a)}function jo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Mo(e,t,n,r,i){var a=gi(n)?pi:fi.current;return a=hi(t,a),na(t,i),n=Ka(e,t,n,r,a,i),null===e||Oo?(t.effectTag|=1,Ro(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),qo(e,t,i))}function Fo(e,t,n,r,i){if(gi(n)){var a=!0;bi(t)}else a=!1;if(na(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),va(t,n,r),ba(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,s=n.contextType;"object"==typeof s&&null!==s?s=ra(s):s=hi(t,s=gi(n)?pi:fi.current);var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;f||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==r||u!==s)&&ya(t,o,r,s),ia=!1;var d=t.memoizedState;o.state=d,ca(t,r,o,i),u=t.memoizedState,l!==r||d!==u||di.current||ia?("function"==typeof c&&(ha(t,n,c,r),u=t.memoizedState),(l=ia||ma(t,n,l,r,d,u,s))?(f||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.effectTag|=4)):("function"==typeof o.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=l):("function"==typeof o.componentDidMount&&(t.effectTag|=4),r=!1)}else o=t.stateNode,oa(e,t),l=t.memoizedProps,o.props=t.type===t.elementType?l:qi(t.type,l),u=o.context,"object"==typeof(s=n.contextType)&&null!==s?s=ra(s):s=hi(t,s=gi(n)?pi:fi.current),(f="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==r||u!==s)&&ya(t,o,r,s),ia=!1,u=t.memoizedState,o.state=u,ca(t,r,o,i),d=t.memoizedState,l!==r||u!==d||di.current||ia?("function"==typeof c&&(ha(t,n,c,r),d=t.memoizedState),(c=ia||ma(t,n,l,r,u,d,s))?(f||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,d,s),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,d,s)),"function"==typeof o.componentDidUpdate&&(t.effectTag|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=s,r=c):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1);return Do(e,t,n,r,a,i)}function Do(e,t,n,r,i,a){jo(e,t);var o=0!=(64&t.effectTag);if(!r&&!o)return i&&wi(t,n,!1),qo(e,t,a);r=t.stateNode,No.current=t;var l=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&o?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,l,a)):Ro(e,t,l,a),t.memoizedState=r.state,i&&wi(t,n,!0),t.child}function Ao(e){var t=e.stateNode;t.pendingContext?vi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(0,t.context,!1),Ra(e,t.containerInfo)}var Uo,Vo,Ho,Wo={dehydrated:null,retryTime:0};function Bo(e,t,n){var r,i=t.mode,a=t.pendingProps,o=ja.current,l=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&o)&&(null===e||null!==e.memoizedState)),r?(l=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===a.fallback||!0===a.unstable_avoidThisFallback||(o|=1),si(ja,1&o),null===e){if(void 0!==a.fallback&&To(t),l){if(l=a.fallback,(a=_u(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,a.child=e;null!==e;)e.return=a,e=e.sibling;return(n=_u(l,i,n,null)).return=t,a.sibling=n,t.memoizedState=Wo,t.child=a,n}return i=a.children,t.memoizedState=null,t.child=Ta(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,l){if(a=a.fallback,(n=Cu(e,e.pendingProps)).return=t,0==(2&t.mode)&&(l=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=l;null!==l;)l.return=n,l=l.sibling;return(i=Cu(i,a)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=Wo,t.child=n,i}return n=Sa(t,e.child,a.children,n),t.memoizedState=null,t.child=n}if(e=e.child,l){if(l=a.fallback,(a=_u(null,i,0,null)).return=t,a.child=e,null!==e&&(e.return=a),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,a.child=e;null!==e;)e.return=a,e=e.sibling;return(n=_u(l,i,n,null)).return=t,a.sibling=n,n.effectTag|=2,a.childExpirationTime=0,t.memoizedState=Wo,t.child=a,n}return t.memoizedState=null,t.child=Sa(t,e,a.children,n)}function $o(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),ta(e.return,t)}function Qo(e,t,n,r,i,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailExpiration=0,o.tailMode=i,o.lastEffect=a)}function Ko(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ro(e,t,r.children,n),0!=(2&(r=ja.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$o(e,n);else if(19===e.tag)$o(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(si(ja,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ma(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qo(t,!1,i,n,a,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ma(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qo(t,!0,n,null,a,t.lastEffect);break;case"together":Qo(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function qo(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&ou(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Cu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Cu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Yo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xo(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return gi(t.type)&&mi(),null;case 3:return La(),ui(di),ui(fi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Po(t)||(t.effectTag|=4),null;case 5:Ia(t),n=Oa(Na.current);var a=t.type;if(null!==e&&null!=t.stateNode)Vo(e,t,a,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(o(166));return null}if(e=Oa(Pa.current),Po(t)){r=t.stateNode,a=t.type;var l=t.memoizedProps;switch(r[Sn]=t,r[Tn]=l,a){case"iframe":case"object":case"embed":Kt("load",r);break;case"video":case"audio":for(e=0;e<Xe.length;e++)Kt(Xe[e],r);break;case"source":Kt("error",r);break;case"img":case"image":case"link":Kt("error",r),Kt("load",r);break;case"form":Kt("reset",r),Kt("submit",r);break;case"details":Kt("toggle",r);break;case"input":Ee(r,l),Kt("invalid",r),un(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Kt("invalid",r),un(n,"onChange");break;case"textarea":Re(r,l),Kt("invalid",r),un(n,"onChange")}for(var u in an(a,l),e=null,l)if(l.hasOwnProperty(u)){var s=l[u];"children"===u?"string"==typeof s?r.textContent!==s&&(e=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(e=["children",""+s]):S.hasOwnProperty(u)&&null!=s&&un(n,u)}switch(a){case"input":we(r),Ce(r,l,!0);break;case"textarea":we(r),ze(r);break;case"select":case"option":break;default:"function"==typeof l.onClick&&(r.onclick=sn)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(u=9===n.nodeType?n:n.ownerDocument,e===ln&&(e=Me(a)),e===ln?"script"===a?((e=u.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=u.createElement(a,{is:r.is}):(e=u.createElement(a),"select"===a&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,a),e[Sn]=t,e[Tn]=r,Uo(e,t),t.stateNode=e,u=on(a,r),a){case"iframe":case"object":case"embed":Kt("load",e),s=r;break;case"video":case"audio":for(s=0;s<Xe.length;s++)Kt(Xe[s],e);s=r;break;case"source":Kt("error",e),s=r;break;case"img":case"image":case"link":Kt("error",e),Kt("load",e),s=r;break;case"form":Kt("reset",e),Kt("submit",e),s=r;break;case"details":Kt("toggle",e),s=r;break;case"input":Ee(e,r),s=xe(e,r),Kt("invalid",e),un(n,"onChange");break;case"option":s=_e(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=i({},r,{value:void 0}),Kt("invalid",e),un(n,"onChange");break;case"textarea":Re(e,r),s=Oe(e,r),Kt("invalid",e),un(n,"onChange");break;default:s=r}an(a,s);var c=s;for(l in c)if(c.hasOwnProperty(l)){var f=c[l];"style"===l?nn(e,f):"dangerouslySetInnerHTML"===l?null!=(f=f?f.__html:void 0)&&Ae(e,f):"children"===l?"string"==typeof f?("textarea"!==a||""!==f)&&Ue(e,f):"number"==typeof f&&Ue(e,""+f):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(S.hasOwnProperty(l)?null!=f&&un(n,l):null!=f&&G(e,l,f,u))}switch(a){case"input":we(e),Ce(e,r,!1);break;case"textarea":we(e),ze(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ye(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Ne(e,!!r.multiple,n,!1):null!=r.defaultValue&&Ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=sn)}vn(a,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Ho(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));n=Oa(Na.current),Oa(Pa.current),Po(t)?(n=t.stateNode,r=t.memoizedProps,n[Sn]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Sn]=t,t.stateNode=n)}return null;case 13:return ui(ja),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Po(t):(r=null!==(a=e.memoizedState),n||null===a||null!==(a=e.child.sibling)&&(null!==(l=t.firstEffect)?(t.firstEffect=a,a.nextEffect=l):(t.firstEffect=t.lastEffect=a,a.nextEffect=null),a.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&ja.current)?Pl===wl&&(Pl=kl):(Pl!==wl&&Pl!==kl||(Pl=xl),0!==Ll&&null!==Sl&&(zu(Sl,Cl),Iu(Sl,Ll)))),(n||r)&&(t.effectTag|=4),null);case 4:return La(),null;case 10:return ea(t),null;case 17:return gi(t.type)&&mi(),null;case 19:if(ui(ja),null===(r=t.memoizedState))return null;if(a=0!=(64&t.effectTag),null===(l=r.rendering)){if(a)Yo(r,!1);else if(Pl!==wl||null!==e&&0!=(64&e.effectTag))for(l=t.child;null!==l;){if(null!==(e=Ma(l))){for(t.effectTag|=64,Yo(r,!1),null!==(a=e.updateQueue)&&(t.updateQueue=a,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)l=n,(a=r).effectTag&=2,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null,null===(e=a.alternate)?(a.childExpirationTime=0,a.expirationTime=l,a.child=null,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null):(a.childExpirationTime=e.childExpirationTime,a.expirationTime=e.expirationTime,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,l=e.dependencies,a.dependencies=null===l?null:{expirationTime:l.expirationTime,firstContext:l.firstContext,responders:l.responders}),r=r.sibling;return si(ja,1&ja.current|2),t.child}l=l.sibling}}else{if(!a)if(null!==(e=Ma(l))){if(t.effectTag|=64,a=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Yo(r,!0),null===r.tail&&"hidden"===r.tailMode&&!l.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Ai()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,a=!0,Yo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=r.last)?n.sibling=l:t.child=l,r.last=l)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Ai()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ai(),n.sibling=null,t=ja.current,si(ja,a?1&t|2:1&t),n):null}throw Error(o(156,t.tag))}function Go(e){switch(e.tag){case 1:gi(e.type)&&mi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(La(),ui(di),ui(fi),0!=(64&(t=e.effectTag)))throw Error(o(285));return e.effectTag=-4097&t|64,e;case 5:return Ia(e),null;case 13:return ui(ja),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return ui(ja),null;case 4:return La(),null;case 10:return ea(e),null;default:return null}}function Jo(e,t){return{value:e,source:t,stack:ve(t)}}Uo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Vo=function(e,t,n,r,a){var o=e.memoizedProps;if(o!==r){var l,u,s=t.stateNode;switch(Oa(Pa.current),e=null,n){case"input":o=xe(s,o),r=xe(s,r),e=[];break;case"option":o=_e(s,o),r=_e(s,r),e=[];break;case"select":o=i({},o,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":o=Oe(s,o),r=Oe(s,r),e=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(s.onclick=sn)}for(l in an(n,r),n=null,o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&null!=o[l])if("style"===l)for(u in s=o[l])s.hasOwnProperty(u)&&(n||(n={}),n[u]="");else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(S.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var c=r[l];if(s=null!=o?o[l]:void 0,r.hasOwnProperty(l)&&c!==s&&(null!=c||null!=s))if("style"===l)if(s){for(u in s)!s.hasOwnProperty(u)||c&&c.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in c)c.hasOwnProperty(u)&&s[u]!==c[u]&&(n||(n={}),n[u]=c[u])}else n||(e||(e=[]),e.push(l,n)),n=c;else"dangerouslySetInnerHTML"===l?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(e=e||[]).push(l,c)):"children"===l?s===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(l,""+c):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(S.hasOwnProperty(l)?(null!=c&&un(a,l),e||s===c||(e=[])):(e=e||[]).push(l,c))}n&&(e=e||[]).push("style",n),a=e,(t.updateQueue=a)&&(t.effectTag|=4)}},Ho=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Zo="function"==typeof WeakSet?WeakSet:Set;function el(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ve(n)),null!==n&&me(n.type),t=t.value,null!==e&&1===e.tag&&me(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function tl(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){yu(e,t)}else t.current=null}function nl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:qi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(o(163))}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function il(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void il(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:qi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&fa(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}fa(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&vn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Mt(n)))));case 19:case 17:case 20:case 21:return}throw Error(o(163))}function ol(e,t,n){switch("function"==typeof xu&&xu(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Hi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){yu(i,e)}}e=e.next}while(e!==r)}))}break;case 1:tl(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){yu(e,t)}}(t,n);break;case 5:tl(t);break;case 4:cl(e,t,n)}}function ll(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&ll(t)}function ul(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:{for(var t=e.return;null!==t;){if(ul(t)){var n=t;break e}t=t.return}throw Error(o(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(o(161))}16&n.effectTag&&(Ue(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||ul(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,a=5===i||6===i;if(a)t=a?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=sn));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,a=5===i||6===i;if(a)t=a?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function cl(e,t,n){for(var r,i,a=t,l=!1;;){if(!l){l=a.return;e:for(;;){if(null===l)throw Error(o(160));switch(r=l.stateNode,l.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}l=l.return}l=!0}if(5===a.tag||6===a.tag){e:for(var u=e,s=a,c=n,f=s;;)if(ol(u,f,c),null!==f.child&&4!==f.tag)f.child.return=f,f=f.child;else{if(f===s)break e;for(;null===f.sibling;){if(null===f.return||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i?(u=r,s=a.stateNode,8===u.nodeType?u.parentNode.removeChild(s):u.removeChild(s)):r.removeChild(a.stateNode)}else if(4===a.tag){if(null!==a.child){r=a.stateNode.containerInfo,i=!0,a.child.return=a,a=a.child;continue}}else if(ol(e,a,n),null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break;for(;null===a.sibling;){if(null===a.return||a.return===t)return;4===(a=a.return).tag&&(l=!1)}a.sibling.return=a.return,a=a.sibling}}function fl(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void rl(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var a=t.updateQueue;if(t.updateQueue=null,null!==a){for(n[Tn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Se(n,r),on(e,i),t=on(e,r),i=0;i<a.length;i+=2){var l=a[i],u=a[i+1];"style"===l?nn(n,u):"dangerouslySetInnerHTML"===l?Ae(n,u):"children"===l?Ue(n,u):G(n,l,u,t)}switch(e){case"input":Te(n,r);break;case"textarea":Le(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Ne(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Ne(n,!!r.multiple,r.defaultValue,!0):Ne(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(o(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Mt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Il=Ai()),null!==n)e:for(e=n;;){if(5===e.tag)a=e.stateNode,r?"function"==typeof(a=a.style).setProperty?a.setProperty("display","none","important"):a.display="none":(a=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,a.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(a=e.child.sibling).return=e,e=a;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void dl(t);case 19:return void dl(t);case 17:return}throw Error(o(163))}function dl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zo),t.forEach((function(t){var r=wu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var pl="function"==typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=la(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ml||(Ml=!0,Fl=r),el(e,t)},n}function gl(e,t,n){(n=la(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return el(e,t),r(i)}}var a=e.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Dl?Dl=new Set([this]):Dl.add(this),el(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var ml,vl=Math.ceil,yl=X.ReactCurrentDispatcher,bl=X.ReactCurrentOwner,wl=0,kl=3,xl=4,El=0,Sl=null,Tl=null,Cl=0,Pl=wl,_l=null,Nl=1073741823,Ol=1073741823,Rl=null,Ll=0,zl=!1,Il=0,jl=null,Ml=!1,Fl=null,Dl=null,Al=!1,Ul=null,Vl=90,Hl=null,Wl=0,Bl=null,$l=0;function Ql(){return 0!=(48&El)?1073741821-(Ai()/10|0):0!==$l?$l:$l=1073741821-(Ai()/10|0)}function Kl(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=Ui();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&El))return Cl;if(null!==n)e=Ki(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ki(e,150,100);break;case 97:case 96:e=Ki(e,5e3,250);break;case 95:e=2;break;default:throw Error(o(326))}return null!==Sl&&e===Cl&&--e,e}function ql(e,t){if(50<Wl)throw Wl=0,Bl=null,Error(o(185));if(null!==(e=Yl(e,t))){var n=Ui();1073741823===t?0!=(8&El)&&0==(48&El)?Zl(e):(Gl(e),0===El&&$i()):Gl(e),0==(4&El)||98!==n&&99!==n||(null===Hl?Hl=new Map([[e,t]]):(void 0===(n=Hl.get(e))||n>t)&&Hl.set(e,t))}}function Yl(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(Sl===i&&(ou(t),Pl===xl&&zu(i,Cl)),Iu(i,t)),i}function Xl(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Lu(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Gl(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Bi(Zl.bind(null,e));else{var t=Xl(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ql();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Li&&Ei(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Bi(Zl.bind(null,e)):Wi(r,Jl.bind(null,e),{timeout:10*(1073741821-t)-Ai()}),e.callbackNode=t}}}function Jl(e,t){if($l=0,t)return ju(e,t=Ql()),Gl(e),null;var n=Xl(e);if(0!==n){if(t=e.callbackNode,0!=(48&El))throw Error(o(327));if(gu(),e===Sl&&n===Cl||nu(e,n),null!==Tl){var r=El;El|=16;for(var i=iu();;)try{uu();break}catch(t){ru(e,t)}if(Zi(),El=r,yl.current=i,1===Pl)throw t=_l,nu(e,n),zu(e,n),Gl(e),t;if(null===Tl)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Pl,Sl=null,r){case wl:case 1:throw Error(o(345));case 2:ju(e,2<n?2:n);break;case kl:if(zu(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fu(i)),1073741823===Nl&&10<(i=Il+500-Ai())){if(zl){var a=e.lastPingedTime;if(0===a||a>=n){e.lastPingedTime=n,nu(e,n);break}}if(0!==(a=Xl(e))&&a!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=bn(du.bind(null,e),i);break}du(e);break;case xl:if(zu(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fu(i)),zl&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nu(e,n);break}if(0!==(i=Xl(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Ol?r=10*(1073741821-Ol)-Ai():1073741823===Nl?r=0:(r=10*(1073741821-Nl)-5e3,0>(r=(i=Ai())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vl(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=bn(du.bind(null,e),r);break}du(e);break;case 5:if(1073741823!==Nl&&null!==Rl){a=Nl;var l=Rl;if(0>=(r=0|l.busyMinDurationMs)?r=0:(i=0|l.busyDelayMs,r=(a=Ai()-(10*(1073741821-a)-(0|l.timeoutMs||5e3)))<=i?0:i+r-a),10<r){zu(e,n),e.timeoutHandle=bn(du.bind(null,e),r);break}}du(e);break;default:throw Error(o(329))}if(Gl(e),e.callbackNode===t)return Jl.bind(null,e)}}return null}function Zl(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&El))throw Error(o(327));if(gu(),e===Sl&&t===Cl||nu(e,t),null!==Tl){var n=El;El|=16;for(var r=iu();;)try{lu();break}catch(t){ru(e,t)}if(Zi(),El=n,yl.current=r,1===Pl)throw n=_l,nu(e,t),zu(e,t),Gl(e),n;if(null!==Tl)throw Error(o(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Sl=null,du(e),Gl(e)}return null}function eu(e,t){var n=El;El|=1;try{return e(t)}finally{0===(El=n)&&$i()}}function tu(e,t){var n=El;El&=-2,El|=8;try{return e(t)}finally{0===(El=n)&&$i()}}function nu(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,wn(n)),null!==Tl)for(n=Tl.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&mi();break;case 3:La(),ui(di),ui(fi);break;case 5:Ia(r);break;case 4:La();break;case 13:case 19:ui(ja);break;case 10:ea(r)}n=n.return}Sl=e,Tl=Cu(e.current,null),Cl=t,Pl=wl,_l=null,Ol=Nl=1073741823,Rl=null,Ll=0,zl=!1}function ru(e,t){for(;;){try{if(Zi(),Da.current=mo,Ba)for(var n=Va.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Ua=0,Wa=Ha=Va=null,Ba=!1,null===Tl||null===Tl.return)return Pl=1,_l=t,Tl=null;e:{var i=e,a=Tl.return,o=Tl,l=t;if(t=Cl,o.effectTag|=2048,o.firstEffect=o.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l;if(0==(2&o.mode)){var s=o.alternate;s?(o.updateQueue=s.updateQueue,o.memoizedState=s.memoizedState,o.expirationTime=s.expirationTime):(o.updateQueue=null,o.memoizedState=null)}var c=0!=(1&ja.current),f=a;do{var d;if(d=13===f.tag){var p=f.memoizedState;if(null!==p)d=null!==p.dehydrated;else{var h=f.memoizedProps;d=void 0!==h.fallback&&(!0!==h.unstable_avoidThisFallback||!c)}}if(d){var g=f.updateQueue;if(null===g){var m=new Set;m.add(u),f.updateQueue=m}else g.add(u);if(0==(2&f.mode)){if(f.effectTag|=64,o.effectTag&=-2981,1===o.tag)if(null===o.alternate)o.tag=17;else{var v=la(1073741823,null);v.tag=2,ua(o,v)}o.expirationTime=1073741823;break e}l=void 0,o=t;var y=i.pingCache;if(null===y?(y=i.pingCache=new pl,l=new Set,y.set(u,l)):void 0===(l=y.get(u))&&(l=new Set,y.set(u,l)),!l.has(o)){l.add(o);var b=bu.bind(null,i,u,o);u.then(b,b)}f.effectTag|=4096,f.expirationTime=t;break e}f=f.return}while(null!==f);l=Error((me(o.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ve(o))}5!==Pl&&(Pl=2),l=Jo(l,o),f=a;do{switch(f.tag){case 3:u=l,f.effectTag|=4096,f.expirationTime=t,sa(f,hl(f,u,t));break e;case 1:u=l;var w=f.type,k=f.stateNode;if(0==(64&f.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==k&&"function"==typeof k.componentDidCatch&&(null===Dl||!Dl.has(k)))){f.effectTag|=4096,f.expirationTime=t,sa(f,gl(f,u,t));break e}}f=f.return}while(null!==f)}Tl=cu(Tl)}catch(e){t=e;continue}break}}function iu(){var e=yl.current;return yl.current=mo,null===e?mo:e}function au(e,t){e<Nl&&2<e&&(Nl=e),null!==t&&e<Ol&&2<e&&(Ol=e,Rl=t)}function ou(e){e>Ll&&(Ll=e)}function lu(){for(;null!==Tl;)Tl=su(Tl)}function uu(){for(;null!==Tl&&!zi();)Tl=su(Tl)}function su(e){var t=ml(e.alternate,e,Cl);return e.memoizedProps=e.pendingProps,null===t&&(t=cu(e)),bl.current=null,t}function cu(e){Tl=e;do{var t=Tl.alternate;if(e=Tl.return,0==(2048&Tl.effectTag)){if(t=Xo(t,Tl,Cl),1===Cl||1!==Tl.childExpirationTime){for(var n=0,r=Tl.child;null!==r;){var i=r.expirationTime,a=r.childExpirationTime;i>n&&(n=i),a>n&&(n=a),r=r.sibling}Tl.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Tl.firstEffect),null!==Tl.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Tl.firstEffect),e.lastEffect=Tl.lastEffect),1<Tl.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Tl:e.firstEffect=Tl,e.lastEffect=Tl))}else{if(null!==(t=Go(Tl)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Tl.sibling))return t;Tl=e}while(null!==Tl);return Pl===wl&&(Pl=5),null}function fu(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function du(e){var t=Ui();return Hi(99,pu.bind(null,e,t)),null}function pu(e,t){do{gu()}while(null!==Ul);if(0!=(48&El))throw Error(o(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=fu(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Sl&&(Tl=Sl=null,Cl=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var a=El;El|=32,bl.current=null,gn=Qt;var l=pn();if(hn(l)){if("selectionStart"in l)var u={start:l.selectionStart,end:l.selectionEnd};else e:{var s=(u=(u=l.ownerDocument)&&u.defaultView||window).getSelection&&u.getSelection();if(s&&0!==s.rangeCount){u=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{u.nodeType,f.nodeType}catch(e){u=null;break e}var d=0,p=-1,h=-1,g=0,m=0,v=l,y=null;t:for(;;){for(var b;v!==u||0!==c&&3!==v.nodeType||(p=d+c),v!==f||0!==s&&3!==v.nodeType||(h=d+s),3===v.nodeType&&(d+=v.nodeValue.length),null!==(b=v.firstChild);)y=v,v=b;for(;;){if(v===l)break t;if(y===u&&++g===c&&(p=d),y===f&&++m===s&&(h=d),null!==(b=v.nextSibling))break;y=(v=y).parentNode}v=b}u=-1===p||-1===h?null:{start:p,end:h}}else u=null}u=u||{start:0,end:0}}else u=null;mn={activeElementDetached:null,focusedElem:l,selectionRange:u},Qt=!1,jl=i;do{try{hu()}catch(e){if(null===jl)throw Error(o(330));yu(jl,e),jl=jl.nextEffect}}while(null!==jl);jl=i;do{try{for(l=e,u=t;null!==jl;){var w=jl.effectTag;if(16&w&&Ue(jl.stateNode,""),128&w){var k=jl.alternate;if(null!==k){var x=k.ref;null!==x&&("function"==typeof x?x(null):x.current=null)}}switch(1038&w){case 2:sl(jl),jl.effectTag&=-3;break;case 6:sl(jl),jl.effectTag&=-3,fl(jl.alternate,jl);break;case 1024:jl.effectTag&=-1025;break;case 1028:jl.effectTag&=-1025,fl(jl.alternate,jl);break;case 4:fl(jl.alternate,jl);break;case 8:cl(l,c=jl,u),ll(c)}jl=jl.nextEffect}}catch(e){if(null===jl)throw Error(o(330));yu(jl,e),jl=jl.nextEffect}}while(null!==jl);if(x=mn,k=pn(),w=x.focusedElem,u=x.selectionRange,k!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==u&&hn(w)&&(k=u.start,void 0===(x=u.end)&&(x=k),"selectionStart"in w?(w.selectionStart=k,w.selectionEnd=Math.min(x,w.value.length)):(x=(k=w.ownerDocument||document)&&k.defaultView||window).getSelection&&(x=x.getSelection(),c=w.textContent.length,l=Math.min(u.start,c),u=void 0===u.end?l:Math.min(u.end,c),!x.extend&&l>u&&(c=u,u=l,l=c),c=dn(w,l),f=dn(w,u),c&&f&&(1!==x.rangeCount||x.anchorNode!==c.node||x.anchorOffset!==c.offset||x.focusNode!==f.node||x.focusOffset!==f.offset)&&((k=k.createRange()).setStart(c.node,c.offset),x.removeAllRanges(),l>u?(x.addRange(k),x.extend(f.node,f.offset)):(k.setEnd(f.node,f.offset),x.addRange(k))))),k=[];for(x=w;x=x.parentNode;)1===x.nodeType&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<k.length;w++)(x=k[w]).element.scrollLeft=x.left,x.element.scrollTop=x.top}Qt=!!gn,mn=gn=null,e.current=n,jl=i;do{try{for(w=e;null!==jl;){var E=jl.effectTag;if(36&E&&al(w,jl.alternate,jl),128&E){k=void 0;var S=jl.ref;if(null!==S){var T=jl.stateNode;switch(jl.tag){case 5:k=T;break;default:k=T}"function"==typeof S?S(k):S.current=k}}jl=jl.nextEffect}}catch(e){if(null===jl)throw Error(o(330));yu(jl,e),jl=jl.nextEffect}}while(null!==jl);jl=null,Ii(),El=a}else e.current=n;if(Al)Al=!1,Ul=e,Vl=t;else for(jl=i;null!==jl;)t=jl.nextEffect,jl.nextEffect=null,jl=t;if(0===(t=e.firstPendingTime)&&(Dl=null),1073741823===t?e===Bl?Wl++:(Wl=0,Bl=e):Wl=0,"function"==typeof ku&&ku(n.stateNode,r),Gl(e),Ml)throw Ml=!1,e=Fl,Fl=null,e;return 0!=(8&El)||$i(),null}function hu(){for(;null!==jl;){var e=jl.effectTag;0!=(256&e)&&nl(jl.alternate,jl),0==(512&e)||Al||(Al=!0,Wi(97,(function(){return gu(),null}))),jl=jl.nextEffect}}function gu(){if(90!==Vl){var e=97<Vl?97:Vl;return Vl=90,Hi(e,mu)}}function mu(){if(null===Ul)return!1;var e=Ul;if(Ul=null,0!=(48&El))throw Error(o(331));var t=El;for(El|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:rl(5,n),il(5,n)}}catch(t){if(null===e)throw Error(o(330));yu(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return El=t,$i(),!0}function vu(e,t,n){ua(e,t=hl(e,t=Jo(n,t),1073741823)),null!==(e=Yl(e,1073741823))&&Gl(e)}function yu(e,t){if(3===e.tag)vu(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){vu(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Dl||!Dl.has(r))){ua(n,e=gl(n,e=Jo(t,e),1073741823)),null!==(n=Yl(n,1073741823))&&Gl(n);break}}n=n.return}}function bu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Sl===e&&Cl===n?Pl===xl||Pl===kl&&1073741823===Nl&&Ai()-Il<500?nu(e,Cl):zl=!0:Lu(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Gl(e)))}function wu(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=Kl(t=Ql(),e,null)),null!==(e=Yl(e,t))&&Gl(e)}ml=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||di.current)Oo=!0;else{if(r<n){switch(Oo=!1,t.tag){case 3:Ao(t),_o();break;case 5:if(za(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:gi(t.type)&&bi(t);break;case 4:Ra(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,si(Yi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Bo(e,t,n):(si(ja,1&ja.current),null!==(t=qo(e,t,n))?t.sibling:null);si(ja,1&ja.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return Ko(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),si(ja,ja.current),!r)return null}return qo(e,t,n)}Oo=!1}}else Oo=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=hi(t,fi.current),na(t,n),i=Ka(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,gi(r)){var a=!0;bi(t)}else a=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,aa(t);var l=r.getDerivedStateFromProps;"function"==typeof l&&ha(t,r,l,e),i.updater=ga,t.stateNode=i,i._reactInternalFiber=t,ba(t,r,e,n),t=Do(null,t,r,!0,a,n)}else t.tag=0,Ro(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,a=t.tag=function(e){if("function"==typeof e)return Tu(e)?1:0;if(null!=e){if((e=e.$$typeof)===ue)return 11;if(e===fe)return 14}return 2}(i),e=qi(i,e),a){case 0:t=Mo(null,t,i,e,n);break e;case 1:t=Fo(null,t,i,e,n);break e;case 11:t=Lo(null,t,i,e,n);break e;case 14:t=zo(null,t,i,qi(i.type,e),r,n);break e}throw Error(o(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Mo(e,t,r,i=t.elementType===r?i:qi(r,i),n);case 1:return r=t.type,i=t.pendingProps,Fo(e,t,r,i=t.elementType===r?i:qi(r,i),n);case 3:if(Ao(t),r=t.updateQueue,null===e||null===r)throw Error(o(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,oa(e,t),ca(t,r,null,n),(r=t.memoizedState.element)===i)_o(),t=qo(e,t,n);else{if((i=t.stateNode.hydrate)&&(ko=kn(t.stateNode.containerInfo.firstChild),wo=t,i=xo=!0),i)for(n=Ta(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Ro(e,t,r,n),_o();t=t.child}return t;case 5:return za(t),null===e&&To(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,yn(r,i)?l=null:null!==a&&yn(r,a)&&(t.effectTag|=16),jo(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ro(e,t,l,n),t=t.child),t;case 6:return null===e&&To(t),null;case 13:return Bo(e,t,n);case 4:return Ra(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Sa(t,null,r,n):Ro(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Lo(e,t,r,i=t.elementType===r?i:qi(r,i),n);case 7:return Ro(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ro(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value;var u=t.type._context;if(si(Yi,u._currentValue),u._currentValue=a,null!==l)if(u=l.value,0===(a=Fr(u,a)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(u,a):1073741823))){if(l.children===i.children&&!di.current){t=qo(e,t,n);break e}}else for(null!==(u=t.child)&&(u.return=t);null!==u;){var s=u.dependencies;if(null!==s){l=u.child;for(var c=s.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&a)){1===u.tag&&((c=la(n,null)).tag=2,ua(u,c)),u.expirationTime<n&&(u.expirationTime=n),null!==(c=u.alternate)&&c.expirationTime<n&&(c.expirationTime=n),ta(u.return,n),s.expirationTime<n&&(s.expirationTime=n);break}c=c.next}}else l=10===u.tag&&u.type===t.type?null:u.child;if(null!==l)l.return=u;else for(l=u;null!==l;){if(l===t){l=null;break}if(null!==(u=l.sibling)){u.return=l.return,l=u;break}l=l.return}u=l}Ro(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(a=t.pendingProps).children,na(t,n),r=r(i=ra(i,a.unstable_observedBits)),t.effectTag|=1,Ro(e,t,r,n),t.child;case 14:return a=qi(i=t.type,t.pendingProps),zo(e,t,i,a=qi(i.type,a),r,n);case 15:return Io(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:qi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,gi(r)?(e=!0,bi(t)):e=!1,na(t,n),va(t,r,i),ba(t,r,i,n),Do(null,t,r,!0,e,n);case 19:return Ko(e,t,n)}throw Error(o(156,t.tag))};var ku=null,xu=null;function Eu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Su(e,t,n,r){return new Eu(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Cu(e,t){var n=e.alternate;return null===n?((n=Su(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pu(e,t,n,r,i,a){var l=2;if(r=e,"function"==typeof e)Tu(e)&&(l=1);else if("string"==typeof e)l=5;else e:switch(e){case ne:return _u(n.children,i,a,t);case le:l=8,i|=7;break;case re:l=8,i|=1;break;case ie:return(e=Su(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=a,e;case se:return(e=Su(13,n,t,i)).type=se,e.elementType=se,e.expirationTime=a,e;case ce:return(e=Su(19,n,t,i)).elementType=ce,e.expirationTime=a,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ae:l=10;break e;case oe:l=9;break e;case ue:l=11;break e;case fe:l=14;break e;case de:l=16,r=null;break e;case pe:l=22;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Su(l,n,t,i)).elementType=e,t.type=r,t.expirationTime=a,t}function _u(e,t,n,r){return(e=Su(7,e,r,t)).expirationTime=n,e}function Nu(e,t,n){return(e=Su(6,e,null,t)).expirationTime=n,e}function Ou(e,t,n){return(t=Su(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ru(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Lu(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function zu(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Iu(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function ju(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Mu(e,t,n,r){var i=t.current,a=Ql(),l=da.suspense;a=Kl(a,i,l);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(o(170));var u=n;do{switch(u.tag){case 3:u=u.stateNode.context;break t;case 1:if(gi(u.type)){u=u.stateNode.__reactInternalMemoizedMergedChildContext;break t}}u=u.return}while(null!==u);throw Error(o(171))}if(1===n.tag){var s=n.type;if(gi(s)){n=yi(n,s,u);break e}}n=u}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=la(a,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),ua(i,t),ql(i,a),a}function Fu(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Du(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Au(e,t){Du(e,t),(e=e.alternate)&&Du(e,t)}function Uu(e,t,n){var r=new Ru(e,t,n=null!=n&&!0===n.hydrate),i=Su(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,aa(i),e[Cn]=r.current,n&&0!==t&&function(e,t){var n=Je(t);Ct.forEach((function(e){ht(e,t,n)})),Pt.forEach((function(e){ht(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Vu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Hu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a._internalRoot;if("function"==typeof i){var l=i;i=function(){var e=Fu(o);l.call(e)}}Mu(t,o,e,i)}else{if(a=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Uu(e,0,t?{hydrate:!0}:void 0)}(n,r),o=a._internalRoot,"function"==typeof i){var u=i;i=function(){var e=Fu(o);u.call(e)}}tu((function(){Mu(t,o,e,i)}))}return Fu(o)}function Wu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Bu(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Vu(t))throw Error(o(200));return Wu(e,t,null,n)}Uu.prototype.render=function(e){Mu(e,this._internalRoot,null,null)},Uu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mu(null,e,null,(function(){t[Cn]=null}))},gt=function(e){if(13===e.tag){var t=Ki(Ql(),150,100);ql(e,t),Au(e,t)}},mt=function(e){13===e.tag&&(ql(e,3),Au(e,3))},vt=function(e){if(13===e.tag){var t=Ql();ql(e,t=Kl(t,e,null)),Au(e,t)}},_=function(e,t,n){switch(t){case"input":if(Te(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=On(r);if(!i)throw Error(o(90));ke(r),Te(r,i)}}}break;case"textarea":Le(e,n);break;case"select":null!=(t=n.value)&&Ne(e,!!n.multiple,t,!1)}},I=eu,j=function(e,t,n,r,i){var a=El;El|=4;try{return Hi(98,e.bind(null,t,n,r,i))}finally{0===(El=a)&&$i()}},M=function(){0==(49&El)&&(function(){if(null!==Hl){var e=Hl;Hl=null,e.forEach((function(e,t){ju(t,e),Gl(t)})),$i()}}(),gu())},F=function(e,t){var n=El;El|=2;try{return e(t)}finally{0===(El=n)&&$i()}};var $u,Qu,Ku={Events:[_n,Nn,On,C,E,Fn,function(e){it(e,Mn)},L,z,Gt,lt,gu,{current:!1}]};Qu=($u={findFiberByHostInstance:Pn,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);ku=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},xu=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},$u,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Qu?Qu(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ku,t.createPortal=Bu,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(o(188));throw Error(o(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&El))throw Error(o(187));var n=El;El|=1;try{return Hi(99,e.bind(null,t))}finally{El=n,$i()}},t.hydrate=function(e,t,n){if(!Vu(t))throw Error(o(200));return Hu(null,e,t,!0,n)},t.render=function(e,t,n){if(!Vu(t))throw Error(o(200));return Hu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Vu(e))throw Error(o(40));return!!e._reactRootContainer&&(tu((function(){Hu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Cn]=null}))})),!0)},t.unstable_batchedUpdates=eu,t.unstable_createPortal=function(e,t){return Bu(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vu(n))throw Error(o(200));if(null==e||void 0===e._reactInternalFiber)throw Error(o(38));return Hu(e,t,n,!1,r)},t.version="16.13.1"},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";var r,i,a,o,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,s=null,c=function(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(c,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==u?setTimeout(r,0,e):(u=e,setTimeout(c,0))},i=function(e,t){s=setTimeout(e,t)},a=function(){clearTimeout(s)},o=function(){return!1},l=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,h=window.setTimeout,g=window.clearTimeout;if("undefined"!=typeof console){var m=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof m&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)t.unstable_now=function(){return d.now()};else{var v=p.now();t.unstable_now=function(){return p.now()-v}}var y=!1,b=null,w=-1,k=5,x=0;o=function(){return t.unstable_now()>=x},l=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):k=0<e?Math.floor(1e3/e):5};var E=new MessageChannel,S=E.port2;E.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();x=e+k;try{b(!0,e)?S.postMessage(null):(y=!1,b=null)}catch(e){throw S.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,S.postMessage(null))},i=function(e,n){w=h((function(){e(t.unstable_now())}),n)},a=function(){g(w),w=-1}}function T(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<_(i,t)))break e;e[r]=t,e[n]=i,n=r}}function C(e){return void 0===(e=e[0])?null:e}function P(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var a=2*(r+1)-1,o=e[a],l=a+1,u=e[l];if(void 0!==o&&0>_(o,n))void 0!==u&&0>_(u,o)?(e[r]=u,e[l]=n,r=l):(e[r]=o,e[a]=n,r=a);else{if(!(void 0!==u&&0>_(u,n)))break e;e[r]=u,e[l]=n,r=l}}}return t}return null}function _(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var N=[],O=[],R=1,L=null,z=3,I=!1,j=!1,M=!1;function F(e){for(var t=C(O);null!==t;){if(null===t.callback)P(O);else{if(!(t.startTime<=e))break;P(O),t.sortIndex=t.expirationTime,T(N,t)}t=C(O)}}function D(e){if(M=!1,F(e),!j)if(null!==C(N))j=!0,r(A);else{var t=C(O);null!==t&&i(D,t.startTime-e)}}function A(e,n){j=!1,M&&(M=!1,a()),I=!0;var r=z;try{for(F(n),L=C(N);null!==L&&(!(L.expirationTime>n)||e&&!o());){var l=L.callback;if(null!==l){L.callback=null,z=L.priorityLevel;var u=l(L.expirationTime<=n);n=t.unstable_now(),"function"==typeof u?L.callback=u:L===C(N)&&P(N),F(n)}else P(N);L=C(N)}if(null!==L)var s=!0;else{var c=C(O);null!==c&&i(D,c.startTime-n),s=!1}return s}finally{L=null,z=r,I=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var V=l;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){j||I||(j=!0,r(A))},t.unstable_getCurrentPriorityLevel=function(){return z},t.unstable_getFirstCallbackNode=function(){return C(N)},t.unstable_next=function(e){switch(z){case 1:case 2:case 3:var t=3;break;default:t=z}var n=z;z=t;try{return e()}finally{z=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=V,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=z;z=e;try{return t()}finally{z=n}},t.unstable_scheduleCallback=function(e,n,o){var l=t.unstable_now();if("object"==typeof o&&null!==o){var u=o.delay;u="number"==typeof u&&0<u?l+u:l,o="number"==typeof o.timeout?o.timeout:U(e)}else o=U(e),u=l;return e={id:R++,callback:n,priorityLevel:e,startTime:u,expirationTime:o=u+o,sortIndex:-1},u>l?(e.sortIndex=u,T(O,e),null===C(N)&&e===C(O)&&(M?a():M=!0,i(D,u-l))):(e.sortIndex=o,T(N,e),j||I||(j=!0,r(A))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();F(e);var n=C(N);return n!==L&&null!==L&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<L.expirationTime||o()},t.unstable_wrapCallback=function(e){var t=z;return function(){var n=z;z=t;try{return e.apply(this,arguments)}finally{z=n}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),o=n.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?p(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function w(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function k(e){return function(e){if(Array.isArray(e))return y(e)}(e)||b(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){if(Array.isArray(e))return e}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e){return x(e)||b(e)||w(e)||E()}function T(e,t){return x(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||w(e,t)||E()}var C={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,k(t))}},P=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),this.init(t,n)}return d(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||C,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,r){return r&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,s({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),_=function(){function e(){c(this,e),this.observers={}}return d(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){var i=[].concat(this.observers[e]);i.forEach((function(e){e.apply(void 0,n)}))}if(this.observers["*"]){var a=[].concat(this.observers["*"]);a.forEach((function(t){t.apply(t,[e].concat(n))}))}}}]),e}();function N(){var e,t,n=new Promise((function(n,r){e=n,t=r}));return n.resolve=e,n.reject=t,n}function O(e){return null==e?"":""+e}function R(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function L(e,t,n){function r(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"==typeof e}for(var a="string"!=typeof t?[].concat(t):t.split(".");a.length>1;){if(i())return{};var o=r(a.shift());!e[o]&&n&&(e[o]=new n),e=e[o]}return i()?{}:{obj:e,k:r(a.shift())}}function z(e,t,n){var r=L(e,t,Object);r.obj[r.k]=n}function I(e,t){var n=L(e,t),r=n.obj,i=n.k;if(r)return r[i]}function j(e,t,n){var r=I(e,n);return void 0!==r?r:I(t,n)}function M(e,t,n){for(var r in t)r in e?"string"==typeof e[r]||e[r]instanceof String||"string"==typeof t[r]||t[r]instanceof String?n&&(e[r]=t[r]):M(e[r],t[r],n):e[r]=t[r];return e}function F(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function A(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return D[e]})):e}var U="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,V=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return c(this,t),n=h(this,g(t).call(this)),U&&_.call(p(n)),n.data=e||{},n.options=r,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return v(t,e),d(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=[e,t];return n&&"string"!=typeof n&&(a=a.concat(n)),n&&"string"==typeof n&&(a=a.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(a=e.split(".")),I(this.data,a)}},{key:"addResource",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},a=this.options.keySeparator;void 0===a&&(a=".");var o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(r=t,t=(o=e.split("."))[1]),this.addNamespaces(t),z(this.data,o,r),i.silent||this.emit("added",e,t,n,r)}},{key:"addResources",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in n)"string"!=typeof n[i]&&"[object Array]"!==Object.prototype.toString.apply(n[i])||this.addResource(e,t,i,n[i],{silent:!0});r.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},o=[e,t];e.indexOf(".")>-1&&(r=n,n=t,t=(o=e.split("."))[1]),this.addNamespaces(t);var l=I(this.data,o)||{};r?M(l,n,i):l=s({},l,n),z(this.data,o,l),a.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?s({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(_),H={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,r,i){var a=this;return e.forEach((function(e){a.processors[e]&&(t=a.processors[e].process(t,n,r,i))})),t}},W={},B=function(e){function t(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,t),n=h(this,g(t).call(this)),U&&_.call(p(n)),R(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,p(n)),n.options=r,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=P.create("translator"),n}return v(t,e),d(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(i=a.shift()),e=a.join(r)}return"string"==typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,t){var n=this;if("object"!==l(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=this.extractFromKey(e[e.length-1],t),a=i.key,o=i.namespaces,u=o[o.length-1],c=t.lng||this.language,f=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(f){var d=t.nsSeparator||this.options.nsSeparator;return u+d+a}return a}var p=this.resolve(e,t),h=p&&p.res,g=p&&p.usedKey||a,m=p&&p.exactUsedKey||a,v=Object.prototype.toString.apply(h),y=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,k="string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h;if(w&&h&&k&&y.indexOf(v)<0&&("string"!=typeof b||"[object Array]"!==v)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,h,t):"key '".concat(a," (").concat(this.language,")' returned an object instead of string.");if(r){var x="[object Array]"===v,E=x?[]:{},S=x?m:g;for(var T in h)if(Object.prototype.hasOwnProperty.call(h,T)){var C="".concat(S).concat(r).concat(T);E[T]=this.translate(C,s({},t,{joinArrays:!1,ns:o})),E[T]===C&&(E[T]=h[T])}h=E}}else if(w&&"string"==typeof b&&"[object Array]"===v)(h=h.join(b))&&(h=this.extendTranslation(h,e,t));else{var P=!1,_=!1;if(!this.isValidLookup(h)&&void 0!==t.defaultValue){if(P=!0,void 0!==t.count){var N=this.pluralResolver.getSuffix(c,t.count);h=t["defaultValue".concat(N)]}h||(h=t.defaultValue)}this.isValidLookup(h)||(_=!0,h=a);var O=t.defaultValue&&t.defaultValue!==h&&this.options.updateMissing;if(_||P||O){this.logger.log(O?"updateKey":"missingKey",c,u,a,O?t.defaultValue:h);var R=[],L=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&L&&L[0])for(var z=0;z<L.length;z++)R.push(L[z]);else"all"===this.options.saveMissingTo?R=this.languageUtils.toResolveHierarchy(t.lng||this.language):R.push(t.lng||this.language);var I=function(e,r){n.options.missingKeyHandler?n.options.missingKeyHandler(e,u,r,O?t.defaultValue:h,O,t):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(e,u,r,O?t.defaultValue:h,O,t),n.emit("missingKey",e,u,r,h)};if(this.options.saveMissing){var j=void 0!==t.count&&"string"!=typeof t.count;this.options.saveMissingPlurals&&j?R.forEach((function(e){n.pluralResolver.getPluralFormsOfKey(e,a).forEach((function(t){return I([e],t)}))})):I(R,a)}}h=this.extendTranslation(h,e,t,p),_&&h===a&&this.options.appendNamespaceToMissingKey&&(h="".concat(u,":").concat(a)),_&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,r){var i=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(s({},n,{interpolation:s({},this.options.interpolation,n.interpolation)}));var a=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(a=s({},this.options.interpolation.defaultVariables,a)),e=this.interpolator.interpolate(e,a,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){return i.translate.apply(i,arguments)}),n)),n.interpolation&&this.interpolator.reset()}var o=n.postProcess||this.options.postProcess,l="string"==typeof o?[o]:o;return null!=e&&l&&l.length&&!1!==n.applyPostProcessor&&(e=H.handle(l,e,t,this.options&&this.options.postProcessPassResolved?s({i18nResolved:r},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,r,i,a,o=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!o.isValidLookup(t)){var u=o.extractFromKey(e,l),s=u.key;n=s;var c=u.namespaces;o.options.fallbackNS&&(c=c.concat(o.options.fallbackNS));var f=void 0!==l.count&&"string"!=typeof l.count,d=void 0!==l.context&&"string"==typeof l.context&&""!==l.context,p=l.lngs?l.lngs:o.languageUtils.toResolveHierarchy(l.lng||o.language,l.fallbackLng);c.forEach((function(e){o.isValidLookup(t)||(a=e,!W["".concat(p[0],"-").concat(e)]&&o.utils&&o.utils.hasLoadedNamespace&&!o.utils.hasLoadedNamespace(a)&&(W["".concat(p[0],"-").concat(e)]=!0,o.logger.warn('key "'.concat(n,'" for namespace "').concat(a,'" for languages "').concat(p.join(", "),"\" won't get resolved as namespace was not yet loaded"),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((function(n){if(!o.isValidLookup(t)){i=n;var a,u,c=s,p=[c];if(o.i18nFormat&&o.i18nFormat.addLookupKeys)o.i18nFormat.addLookupKeys(p,s,n,e,l);else f&&(a=o.pluralResolver.getSuffix(n,l.count)),f&&d&&p.push(c+a),d&&p.push(c+="".concat(o.options.contextSeparator).concat(l.context)),f&&p.push(c+=a);for(;u=p.pop();)o.isValidLookup(t)||(r=u,t=o.getResource(n,e,u,l))}})))}))}})),{res:t,usedKey:n,exactUsedKey:r,usedLng:i,usedNS:a}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}}]),t}(_);function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}var K=function(){function e(t){c(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=P.create("languageUtils")}return d(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Q(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=Q(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=Q(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,r=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],a=function(e){e&&(n.isWhitelisted(e)?i.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&a(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&a(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&a(this.getLanguagePartFromCode(e))):"string"==typeof e&&a(this.formatLanguageCode(e)),r.forEach((function(e){i.indexOf(e)<0&&a(n.formatLanguageCode(e))})),i}}]),e}(),q=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],Y={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};function X(){var e={};return q.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:Y[t.fc]}}))})),e}var G=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),this.languageUtils=t,this.options=n,this.logger=P.create("pluralResolver"),this.rules=X()}return d(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,r=[],i=this.getRule(e);return i?(i.numbers.forEach((function(i){var a=n.getSuffix(e,i);r.push("".concat(t).concat(a))})),r):r}},{key:"getSuffix",value:function(e,t){var n=this,r=this.getRule(e);if(r){var i=r.noAbs?r.plurals(t):r.plurals(Math.abs(t)),a=r.numbers[i];this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]&&(2===a?a="plural":1===a&&(a=""));var o=function(){return n.options.prepend&&a.toString()?n.options.prepend+a.toString():a.toString()};return"v1"===this.options.compatibilityJSON?1===a?"":"number"==typeof a?"_plural_".concat(a.toString()):o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===r.numbers.length&&1===r.numbers[0]?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),J=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,e),this.logger=P.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return d(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:A,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?F(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?F(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?F(t.nestingPrefix):t.nestingPrefixEscaped||F("$t("),this.nestingSuffix=t.nestingSuffix?F(t.nestingSuffix):t.nestingSuffixEscaped||F(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,r){var i,a,o,l=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function s(e){return e.replace(/\$/g,"$$$$")}var c=function(e){if(e.indexOf(l.formatSeparator)<0){var i=j(t,u,e);return l.alwaysFormat?l.format(i,void 0,n):i}var a=e.split(l.formatSeparator),o=a.shift().trim(),s=a.join(l.formatSeparator).trim();return l.format(j(t,u,o),s,n,r)};this.resetRegExp();var f=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler;for(o=0;i=this.regexpUnescape.exec(e);){if(void 0===(a=c(i[1].trim())))if("function"==typeof f){var d=f(e,i,r);a="string"==typeof d?d:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),a="";else"string"==typeof a||this.useRawValueToEscape||(a=O(a));if(e=e.replace(i[0],s(a)),this.regexpUnescape.lastIndex=0,++o>=this.maxReplaces)break}for(o=0;i=this.regexp.exec(e);){if(void 0===(a=c(i[1].trim())))if("function"==typeof f){var p=f(e,i,r);a="string"==typeof p?p:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),a="";else"string"==typeof a||this.useRawValueToEscape||(a=O(a));if(a=this.escapeValue?s(this.escape(a)):s(a),e=e.replace(i[0],a),this.regexp.lastIndex=0,++o>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,r,i=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=s({},a);function l(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var r=e.split(new RegExp("".concat(n,"[ ]*{"))),i="{".concat(r[1]);e=r[0],i=(i=this.interpolate(i,o)).replace(/'/g,'"');try{o=JSON.parse(i),t&&(o=s({},t,o))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(n).concat(i)}return delete o.defaultValue,e}for(o.applyPostProcessor=!1,delete o.defaultValue;n=this.nestingRegexp.exec(e);){var u=[],c=!1;if(n[0].includes(this.formatSeparator)&&!/{.*}/.test(n[1])){var f=n[1].split(this.formatSeparator).map((function(e){return e.trim()})),d=S(f);n[1]=d[0],u=d.slice(1),c=!0}if((r=t(l.call(this,n[1].trim(),o),o))&&n[0]===e&&"string"!=typeof r)return r;"string"!=typeof r&&(r=O(r)),r||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),r=""),c&&(r=u.reduce((function(e,t){return i.format(e,t,a.lng,a)}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}]),e}();var Z=function(e){function t(e,n,r){var i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return c(this,t),i=h(this,g(t).call(this)),U&&_.call(p(i)),i.backend=e,i.store=n,i.services=r,i.languageUtils=r.languageUtils,i.options=a,i.logger=P.create("backendConnector"),i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(r,a.backend,a),i}return v(t,e),d(t,[{key:"queueLoad",value:function(e,t,n,r){var i=this,a=[],o=[],l=[],u=[];return e.forEach((function(e){var r=!0;t.forEach((function(t){var l="".concat(e,"|").concat(t);!n.reload&&i.store.hasResourceBundle(e,t)?i.state[l]=2:i.state[l]<0||(1===i.state[l]?o.indexOf(l)<0&&o.push(l):(i.state[l]=1,r=!1,o.indexOf(l)<0&&o.push(l),a.indexOf(l)<0&&a.push(l),u.indexOf(t)<0&&u.push(t)))})),r||l.push(e)})),(a.length||o.length)&&this.queue.push({pending:o,loaded:{},errors:[],callback:r}),{toLoad:a,pending:o,toLoadLanguages:l,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var r=T(e.split("|"),2),i=r[0],a=r[1];t&&this.emit("failedLoading",i,a,t),n&&this.store.addResourceBundle(i,a,n),this.state[e]=t?-1:2;var o={};this.queue.forEach((function(n){var r,l,u,s,c,f;r=n.loaded,l=a,s=L(r,[i],Object),c=s.obj,f=s.k,c[f]=c[f]||[],u&&(c[f]=c[f].concat(l)),u||c[f].push(l),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach((function(e){o[e]||(o[e]=[]),n.loaded[e].length&&n.loaded[e].forEach((function(t){o[e].indexOf(t)<0&&o[e].push(t)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,o=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,(function(l,u){l&&u&&i<5?setTimeout((function(){r.read.call(r,e,t,n,i+1,2*a,o)}),a):o(l,u)})):o(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var a=this.queueLoad(e,t,r,i);if(!a.toLoad.length)return a.pending.length||i(),null;a.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e.split("|"),i=T(r,2),a=i[0],o=i[1];this.read(a,o,"read",void 0,void 0,(function(r,i){r&&t.logger.warn("".concat(n,"loading namespace ").concat(o," for language ").concat(a," failed"),r),!r&&i&&t.logger.log("".concat(n,"loaded namespace ").concat(o," for language ").concat(a),i),t.loaded(e,r,i)}))}},{key:"saveMissing",value:function(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(n,'" for namespace "').concat(t,'" as the namespace was not yet loaded'),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=n&&""!==n&&(this.backend&&this.backend.create&&this.backend.create(e,t,n,r,null,s({},a,{isUpdate:i})),e&&e[0]&&this.store.addResource(e[0],t,n,r))}}]),t}(_);function te(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===l(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===l(e[2])||"object"===l(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,r){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3}}}function ne(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function re(){}var ie=new(function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(c(this,t),e=h(this,g(t).call(this)),U&&_.call(p(e)),e.options=ne(n),e.services={},e.logger=P,e.modules={external:[]},r&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,r),h(e,p(e));setTimeout((function(){e.init(n,r)}),0)}return e}return v(t,e),d(t,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;function r(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof t&&(n=t,t={}),this.options=s({},te(),this.options,ne(t)),this.format=this.options.interpolation.format,n||(n=re),!this.options.isClone){this.modules.logger?P.init(r(this.modules.logger),this.options):P.init(null,this.options);var i=new K(this.options);this.store=new V(this.options.resources,this.options);var a=this.services;a.logger=P,a.resourceStore=this.store,a.languageUtils=i,a.pluralResolver=new G(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),a.interpolator=new J(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new Z(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e.emit.apply(e,[t].concat(r))})),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new B(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e.emit.apply(e,[t].concat(r))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}this.modules.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var o=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"];o.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));var l=N(),u=function(){e.changeLanguage(e.options.lng,(function(t,r){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),l.resolve(r),n(t,r)}))};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re,r=n,i="string"==typeof e?e:this.language;if("function"==typeof e&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase())return r();var a=[],o=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){a.indexOf(e)<0&&a.push(e)}))};if(i)o(i);else{var l=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);l.forEach((function(e){return o(e)}))}this.options.preload&&this.options.preload.forEach((function(e){return o(e)})),this.services.backendConnector.load(a,this.options.ns,r)}else r(null)}},{key:"reloadResources",value:function(e,t,n){var r=N();return e||(e=this.languages),t||(t=this.options.ns),n||(n=re),this.services.backendConnector.reload(e,t,(function(e){r.resolve(),n(e)})),r}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&H.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var r=N();this.emit("languageChanging",e);var i=function(e){e&&(n.language||(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e)),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(e,(function(i){!function(e,i){i?(n.language=i,n.languages=n.services.languageUtils.toResolveHierarchy(i),n.translator.changeLanguage(i),n.isLanguageChangingTo=void 0,n.emit("languageChanged",i),n.logger.log("languageChanged",i)):n.isLanguageChangingTo=void 0,r.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(i,e)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),r}},{key:"getFixedT",value:function(e,t){var n=this,r=function e(t,r){var i;if("object"!==l(r)){for(var a=arguments.length,o=new Array(a>2?a-2:0),u=2;u<a;u++)o[u-2]=arguments[u];i=n.options.overloadTranslationOptionHandler([t,r].concat(o))}else i=s({},r);return i.lng=i.lng||e.lng,i.lngs=i.lngs||e.lngs,i.ns=i.ns||e.ns,n.t(t,i)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=t,r}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this;if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.languages[0],r=!!this.options&&this.options.fallbackLng,i=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!!this.hasResourceBundle(n,e)||(!this.services.backendConnector.backend||!(!a(n,e)||r&&!a(i,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,r=N();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){r.resolve(),t&&t(e)})),r):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=N();"string"==typeof e&&(e=[e]);var r=this.options.preload||[],i=e.filter((function(e){return r.indexOf(e)<0}));return i.length?(this.options.preload=r.concat(i),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new t(e,n)}},{key:"cloneInstance",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re,i=s({},this.options,n,{isClone:!0}),a=new t(i),o=["store","services","language"];return o.forEach((function(t){a[t]=e[t]})),a.services=s({},this.services),a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new B(a.services,a.options),a.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.emit.apply(a,[e].concat(n))})),a.init(i,r),a.translator.options=a.options,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}}]),t}(_)),ae=n(12),oe=[],le=oe.forEach,ue=oe.slice;function se(e){return le.call(ue.call(arguments,1),(function(t){if(t)for(var n in t)void 0===e[n]&&(e[n]=t[n])})),e}function ce(e,t){if(t&&"object"===l(t)){var n="",r=encodeURIComponent;for(var i in t)n+="&"+r(i)+"="+r(t[i]);if(!n)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+n.slice(1)}return e}function fe(e,t,n,r,i){r&&"object"===l(r)&&(i||(r._t=new Date),r=ce("",r).slice(1)),t.queryStringParams&&(e=ce(e,t.queryStringParams));try{var a;(a=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0")).open(r?"POST":"GET",e,1),t.crossDomain||a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.withCredentials=!!t.withCredentials,r&&a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.overrideMimeType&&a.overrideMimeType("application/json");var o=t.customHeaders;if(o="function"==typeof o?o():o)for(var u in o)a.setRequestHeader(u,o[u]);a.onreadystatechange=function(){a.readyState>3&&n&&n(a.responseText,a)},a.send(r)}catch(e){console&&console.log(e)}}function de(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,parsePayload:function(e,t,n){return u({},t,n||"")},crossDomain:!1,ajax:fe}}var pe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c(this,e),this.init(t,n),this.type="backend"}return d(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=se(t,this.options||{},de())}},{key:"readMulti",value:function(e,t,n){var r=this.options.loadPath;"function"==typeof this.options.loadPath&&(r=this.options.loadPath(e,t));var i=this.services.interpolator.interpolate(r,{lng:e.join("+"),ns:t.join("+")});this.loadUrl(i,n)}},{key:"read",value:function(e,t,n){var r=this.options.loadPath;"function"==typeof this.options.loadPath&&(r=this.options.loadPath([e],[t]));var i=this.services.interpolator.interpolate(r,{lng:e,ns:t});this.loadUrl(i,n)}},{key:"loadUrl",value:function(e,t){var n=this;this.options.ajax(e,this.options,(function(r,i){if(i.status>=500&&i.status<600)return t("failed loading "+e,!0);if(i.status>=400&&i.status<500)return t("failed loading "+e,!1);var a,o;try{a=n.options.parse(r,e)}catch(t){o="failed parsing "+e+" to json"}if(o)return t(o,!1);t(null,a)}))}},{key:"create",value:function(e,t,n,r){var i=this;"string"==typeof e&&(e=[e]);var a=this.options.parsePayload(t,n,r);e.forEach((function(e){var n=i.services.interpolator.interpolate(i.options.addPath,{lng:e,ns:t});i.options.ajax(n,i.options,(function(e,t){}),a)}))}}]),e}();pe.type="backend";var he=pe,ge=new Date;ie.use(he).use(ae.f).init({backend:{loadPath:WWW_DIR_JAVASCRIPT+"restapi/lang/{{ns}}?l={{lng}}&v="+ge.getFullYear()+ge.getMonth()+ge.getDate()},lng:confLH.lngUser||"en",fallbackLng:confLH.lngUser||"en",defaultNS:"group_chat",ns:"group_chat",debug:!1,interpolation:{escapeValue:!1}});var me=i.a.lazy((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,63))})),ve=i.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(5)]).then(n.bind(null,65))})),ye=i.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,64))}));n.p=WWW_DIR_LHC_WEBPACK_ADMIN,ee.addListener("adminChatLoaded",(function(e){var t=document.getElementById("canned-messages-chat-container-"+e);null!==t&&o.a.render(i.a.createElement(r.Suspense,{fallback:"..."},i.a.createElement(me,{chatId:e})),t)})),ee.addListener("groupChatTabLoaded",(function(e){var t=document.getElementById("chat-id-"+e);null!==t&&(e=e.replace("gc",""),o.a.render(i.a.createElement(r.Suspense,{fallback:"..."},i.a.createElement(ve,{chatId:e,userId:confLH.user_id})),t))})),ee.addListener("privateChatStart",(function(e,t){var n=document.getElementById("private-chat-tab-root-"+e);null!==n&&o.a.render(i.a.createElement(r.Suspense,{fallback:"..."},i.a.createElement(ve,{paramsStart:t||{},chatPublicId:e,userId:confLH.user_id})),n)})),ee.addListener("unloadGroupChat",(function(e){var t=document.getElementById("chat-id-"+e);null!==t&&o.a.unmountComponentAtNode(t)})),ee.addListener("removeSynchroChat",(function(e){var t=document.getElementById("canned-messages-chat-container-"+e);null!==t&&o.a.unmountComponentAtNode(t),null!==(t=document.getElementById("private-chat-tab-root-"+e))&&o.a.unmountComponentAtNode(t)})),$(document).ready((function(){var e=document.getElementById("tabs-dashboard");null!==e&&o.a.render(i.a.createElement(r.Suspense,{fallback:"..."},i.a.createElement(ye,null)),e);try{if(localStorage){var t=localStorage.getItem("gachat_id");null!==t&&""!==t&&t.split(",").forEach((function(e){if($("#tabs").length>0)return lhinst.startGroupChat(e,$("#tabs"),LiveHelperChatFactory.truncate(name,10))}))}}catch(e){}}))},,function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return y})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return w}));var r=n(4),i=n.n(r),a=n(5),o=n.n(a),l=n(2),u=n.n(l),s=n(0);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d,p,h={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},g=n.n(s).a.createContext();function m(){return p}function v(){return h}var y=function(){function e(){i()(this,e),this.usedNamespaces={}}return o()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function b(){return d}var w={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h=f({},h,{},e)}(e.options.react),function(e){d=e}(e)}}}]).default}));

