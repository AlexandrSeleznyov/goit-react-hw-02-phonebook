(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),o=n(2),s=n(10),l=n(3),u=n(4),d=n(6),m=n(5),b=n(18),j=n(9),h=n.n(j),f=n(0),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.HandleInput=function(t){console.log(t.currentTarget.value);var n=t.target,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r))},e.handleSubmit=function(t){var n=e.state,a=n.name,r=n.number;t.preventDefault();var c={name:a,number:r,id:Object(b.a)()};e.props.formSubmitHandler(c),e.reset()},e.reset=function(){e.setState({filter:"",name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:h.a.contactForm,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{children:["Name:",Object(f.jsx)("input",{onChange:this.HandleInput,type:"text",value:this.state.name,name:"name",placeholder:"New contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{children:["Number:",Object(f.jsx)("input",{onChange:this.HandleInput,type:"tel",value:this.state.number,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(r.a.Component),O=function(e){var t=e.filter,n=e.HandleInputName;return Object(f.jsxs)("label",{children:["Find contacts by name:",Object(f.jsx)("input",{onChange:n,type:"text",value:t,name:"filter",placeholder:"find name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})};var v=function(e){var t=e.visibleContacts,n=e.deleteContact;return Object(f.jsx)("ul",{children:t.map((function(e){return Object(f.jsxs)("li",{children:[e.name,": ",e.number,Object(f.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e.id)}))})},C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.Contacts=function(){return e.state.contacts.map((function(e){return Object(f.jsxs)("div",{children:[e.name," : ",e.number]},e.id)}))},e.formSubmitHandler=function(t){console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",t),e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contact")):e.setState((function(e){return{contacts:[t].concat(Object(s.a)(e.contacts))}}))},e.HandleInputName=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(o.a)({},a,r)),console.log(e.state)},e.visibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.deleteContact=function(t){return e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t.id}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{formSubmitHandler:this.formSubmitHandler}),Object(f.jsx)("h1",{children:"Contacts"}),Object(f.jsx)(v,{visibleContacts:this.visibleContacts(),deleteContact:this.deleteContact}),Object(f.jsx)(O,{filter:this.state.filter,HandleInputName:this.HandleInputName})]})}}]),n}(r.a.Component);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__kDtKD"}}},[[16,1,2]]]);
//# sourceMappingURL=main.a533394a.chunk.js.map