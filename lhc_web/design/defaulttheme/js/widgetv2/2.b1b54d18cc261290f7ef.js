(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[2],{131:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),l=a(5),r=a.n(l),i=a(1),o=a.n(i),c=a(6),m=a.n(c),d=a(7),u=a.n(d),h=a(3),p=a.n(h),f=a(10),b=a.n(f),g=a(0),v=a.n(g),E=a(11),y=a.n(E),N=a(25);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=p()(e);if(t){var s=p()(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return u()(this,a)}}var R=function(e){m()(a,e);var t=w(a);function a(e){var n;return s()(this,a),n=t.call(this,e),b()(o()(n),"state",{mail:null,success:"",errors:null,sending:!1}),b()(o()(n),"dismissModal",(function(){n.props.toggle()})),n.sendMail=n.sendMail.bind(o()(n)),n.emailRef=v.a.createRef(),n}return r()(a,[{key:"sendMail",value:function(e){var t=this;this.setState({sending:!0}),y.a.post(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash+"/(action)/send",{email:this.state.mail}).then((function(e){0==e.data.error?t.props.toggle():(t.setState({sending:!1}),t.setState({errors:e.data.result}))})),e&&e.preventDefault()}},{key:"componentDidMount",value:function(){var e=this;y.a.get(window.lhcChat.base_url+"widgetrestapi/sendmailsettings/"+this.props.chatId+"/"+this.props.chatHash).then((function(t){e.setState({mail:t.data}),e.emailRef.current&&e.emailRef.current.focus()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.t;return v.a.createElement(v.a.Fragment,null,null!==this.state.mail&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"fade modal-backdrop show"}),v.a.createElement("div",{role:"dialog",id:"dialog-content","aria-modal":"true",className:"fade modal show d-block",tabIndex:"-1"},v.a.createElement("div",{className:"modal-dialog modal-lg"},v.a.createElement("div",{className:"modal-content"},v.a.createElement("div",{className:"modal-header pt-1 pb-1 pl-2 pr-2"}," ",v.a.createElement("h4",{className:"modal-title",id:"myModalLabel"},v.a.createElement("span",{className:"material-icons"},""),t("button.mail")),v.a.createElement("button",{type:"button",className:"close float-right","data-dismiss":"modal",onClick:this.dismissModal,"aria-label":"Close"},v.a.createElement("span",{"aria-hidden":"true"},"×"))),v.a.createElement("div",{className:"modal-body"},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"col-12"},this.state.errors&&v.a.createElement("div",{className:"mb-0",dangerouslySetInnerHTML:{__html:this.state.errors}}),v.a.createElement("div",{className:"mb-0"},v.a.createElement("form",{onSubmit:this.sendMail},v.a.createElement("input",{className:"form-control form-group form-control-sm",ref:this.emailRef,required:"required",type:"email",defaultValue:this.state.mail,onChange:function(t){return e.setState({mail:t.target.value})},placeholder:t("chat.enter_email"),title:t("chat.enter_email")}),v.a.createElement("div",{className:"btn-group",role:"group","aria-label":"..."},v.a.createElement("button",{type:"submit",disabled:this.state.sending,className:"btn btn-secondary btn-sm"},t("button.send")),v.a.createElement("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:this.dismissModal},t("button.cancel")))))))))))))}}]),a}(g.PureComponent);t.default=Object(N.a)()(R)}}]);
//# sourceMappingURL=2.b1b54d18cc261290f7ef.js.map