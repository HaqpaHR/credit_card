(this.webpackJsonpreact_ts_template=this.webpackJsonpreact_ts_template||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(4),i=a.n(c),s=(a(13),a(2)),l=a(5),u=a(6),d=a(8),p=a(7),o=(a(14),a(0)),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={cardNumber:"",expired:"",cvc:"",typeOfCard:""},e.cardNumberHandler=function(t){var a=new RegExp("^[0-9 ]*$");t.target.value=t.target.value.replace(/\s/g,"").replace(/(\d{4})/g,"$1 ").trim(),a.test(t.target.value)&&e.setState({cardNumber:t.target.value}),"4"===e.state.cardNumber[0]&&"9"===e.state.cardNumber[1]&&e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{typeOfCard:"https://logosklad.ru/photo/logos/290/1494134204.jpg#.YaY4hnOwdhg.link"})})),"5"===e.state.cardNumber[0]&&"1"===e.state.cardNumber[1]&&e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{typeOfCard:"https://logosklad.ru/photo/logos/520/1468563734.jpg#.YaZb9vMkDIw.link"})}))},e.expiredHandler=function(t){var a=t.target.value;e.setState({expired:function(e){var t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\D+/g,"")}(e),a=t.slice(0,2);return Number(a)>12&&(a=String(12)),t.length>=3?"".concat(a,"/").concat(t.slice(2,4)):t}(a)})},e.cvcHandler=function(t){var a=t.target.value,r=new RegExp("^[0-9]*$");a.match(r)&&e.setState({cvc:a})},e.clearHandler=function(t){t.preventDefault(),e.setState({cardNumber:"",expired:"",cvc:"",typeOfCard:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("p",{children:"Pay with your credit card via PayPal Website Payments Pro."}),Object(o.jsxs)("form",{className:"input",onSubmit:this.clearHandler,children:[Object(o.jsx)("label",{className:"input__label",htmlFor:"input-cardNumber",children:"Card Number:"}),Object(o.jsx)("input",{className:"input input__label--numCard",type:"text",id:"input-cardNumber",name:"cardNumber",maxLength:"19",placeholder:"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022",value:this.state.cardNumber,onChange:this.cardNumberHandler}),this.state.typeOfCard&&Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:"".concat(this.state.typeOfCard),className:"picture"})}),Object(o.jsxs)("div",{className:"input__bottom",children:[Object(o.jsxs)("div",{className:"input__bottom-container",children:[Object(o.jsx)("label",{className:"input__label",htmlFor:"input-expired",children:"Expiry (MM/YY):"}),Object(o.jsx)("input",{className:"input input__label--expired",type:"string",id:"input-expired",name:"expired",placeholder:"MM/YY",value:this.state.expired,onChange:this.expiredHandler})]}),Object(o.jsxs)("div",{className:"input__bottom-container",children:[Object(o.jsx)("label",{className:"input__label",htmlFor:"input-cvc",children:"Card Code:"}),Object(o.jsx)("input",{className:"input input__label--cvc",type:"string",id:"input-cvc",name:"cvc",maxLength:"3",placeholder:"CVC",value:this.state.cvc,onChange:this.cvcHandler})]})]}),Object(o.jsx)("button",{className:"button",type:"submit",children:"Clear"})]})]})}}]),a}(n.a.Component),m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.10ff7ad7.chunk.js.map