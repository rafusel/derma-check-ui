(this["webpackJsonpopticus-ui"]=this["webpackJsonpopticus-ui"]||[]).push([[0],{137:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(21),n=a.n(i),r=a(45),l=a(19),o=a(41),d=a(189),j=a(191),h=a.p+"static/media/glasses.74c74b1c.jpg",p=a.p+"static/media/measure.89a77160.jpg",u=a.p+"static/media/paper.ae0ddd8e.jpg",m=(a(137),a(6));function b(e){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(o.a,{type:"primary",style:{width:"300px",height:"75px",position:"fixed",bottom:"15px",right:"15px",zIndex:"10000",fontSize:"30px"},children:Object(m.jsx)(r.b,{to:"/measure",children:"Get Started!"})}),Object(m.jsxs)(d.a,{className:"w-100",align:"middle",children:[Object(m.jsx)(j.a,{span:16,children:Object(m.jsx)("img",{src:h,className:"w-100",alt:"A pair of glasses."})}),Object(m.jsxs)(j.a,{span:8,className:"padding-for-text",children:[Object(m.jsx)("h2",{children:"Opticus Cares"}),Object(m.jsx)("p",{children:"Glasses: 75% of people need them, but how many own a comfortable pair? The pain felt from a long day of glasses wearing is one all too familiar. That's where Opticus comes in; our well-honed software needs only a piece of paper \u2014 along with your beautiful face \u2014 to determine the perfect fit for your glasses! "})]})]}),Object(m.jsxs)(d.a,{className:"w-100",align:"middle",children:[Object(m.jsxs)(j.a,{span:8,className:"padding-for-text",children:[Object(m.jsx)("h2",{children:"The Math"}),Object(m.jsx)("p",{children:"With just the picture you submit, Opticus is able to determine your nose bridge width and temple-to-temple length, and uses them to calculate your lens width and arm length, along with all the other measurements needed to get you your best fitting pair of glasses yet!"})]}),Object(m.jsx)(j.a,{span:16,children:Object(m.jsx)("img",{src:p,className:"w-100",alt:"Drafting instruments on a table."})})]}),Object(m.jsxs)(d.a,{className:"w-100",align:"middle",children:[Object(m.jsx)(j.a,{span:16,children:Object(m.jsx)("img",{src:u,className:"w-100",alt:"Pieces of paper."})}),Object(m.jsxs)(j.a,{span:8,className:"padding-for-text",children:[Object(m.jsx)("h2",{children:"Paper Details"}),Object(m.jsx)("p",{children:"Opticus likes to work with the best, so to do its magic it requires standard A4 (8.5 x 11in) paper; the most venerated of papers. When taking your picture make sure to follow the instructions to get the most accurate results possible!"})]})]})]})}var x=a(99),O=a(57),f=a.n(O),g=a(74),y=a(65),w=a(186),v=a(127),W=a(188),N=a(192),k=a(193),S=a(117),T=a.n(S),B=function(){var e=Object(g.a)(f.a.mark((function e(t,a,s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T.a.post("https://opticus-306823.ue.r.appspot.com/measure",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),s(e.data.measurements[0]),a(e.data.measurements[1])})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),C=a(187);function I(e){return Object(m.jsxs)("div",{style:{width:"100%",maxWidth:"70%",margin:"auto",fontSize:"20px",marginBottom:"50px"},children:[Object(m.jsx)("h2",{style:{marginTop:"50px"},children:"Your face"}),Object(m.jsxs)(d.a,{align:"middle",children:[Object(m.jsx)(j.a,{span:12,children:Object(m.jsx)(C.a,{title:"Temple Width",value:e.templeWidth,suffix:"mm"})}),Object(m.jsx)(j.a,{span:12,children:Object(m.jsx)(C.a,{title:"Nose Bridge Width",value:e.noseBridgeWidth,suffix:"mm"})})]}),Object(m.jsx)("h2",{style:{marginTop:"50px"},children:"Your computed glasses measurements"}),Object(m.jsxs)(d.a,{align:"middle",children:[Object(m.jsx)(j.a,{span:8,children:Object(m.jsx)(C.a,{title:"Glasses Width",value:e.templeWidth,suffix:"mm"})}),Object(m.jsx)(j.a,{span:8,children:Object(m.jsx)(C.a,{title:"Lens Width",value:(e.templeWidth-e.noseBridgeWidth)/2,suffix:"mm"})}),Object(m.jsx)(j.a,{span:8,children:Object(m.jsx)(C.a,{title:"Arm Length",value:140,suffix:"mm"})})]})]})}var z=w.a.Dragger;function A(e){var t=Object(s.useState)(Object(m.jsx)(N.a,{})),a=Object(y.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(null),r=Object(y.a)(n,2),l=r[0],d=r[1],j=Object(s.useState)(null),h=Object(y.a)(j,2),p=h[0],u=h[1],b={name:"file",multiple:!1,accept:"image/png, image/jpeg, image/jpg",onChange:function(e){var t=e.file.status;"uploading"!==t&&(console.log(e.file,e.fileList),i(Object(m.jsx)(k.a,{spin:!0}))),"done"===t?(v.b.success("".concat(e.file.name," file uploaded successfully.")),i(Object(m.jsx)(N.a,{}))):"error"===t&&(v.b.error("".concat(e.file.name," file upload failed.")),i(Object(m.jsx)(N.a,{})))},customRequest:function(){var e=Object(g.a)(f.a.mark((function e(t){var a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FormData,s=t.file,a.append("file",s),e.next=5,B(a,u,d);case 5:t.onSuccess();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=Object(s.useState)(!1),w=Object(y.a)(O,2),S=w[0],T=w[1];return l&&p?Object(m.jsx)(I,{templeWidth:l,noseBridgeWidth:p}):Object(m.jsxs)(s.Fragment,{children:[Object(m.jsxs)("div",{style:{width:"100%",maxWidth:"70%",margin:"auto",fontSize:"30px",marginBottom:"50px"},children:[Object(m.jsx)("h1",{children:"Get your measurements"}),Object(m.jsx)(o.a,{type:"primary",onClick:function(){T(!0)},children:"Image Instructions"}),Object(m.jsxs)(W.a,{title:"How to get accurate results",visible:S,onOk:function(){T(!1)},onCancel:function(){T(!1)},children:[Object(m.jsx)("p",{children:"In order to get the best results use a standard, white A4 piece of printer paper."}),Object(m.jsx)("p",{children:"When taking the picture try to have good front lighting, make sure the paper and your head are fully in the shot."}),Object(m.jsx)("p",{children:"Try to cover the least amount of the piece of paper with your hand, and have your background sufficiently contrast the white of the paper."}),Object(m.jsx)("p",{children:"Finally, try to hold the piece of paper perfectly vertical, and the same distance from the camera as your face."})]})]}),Object(m.jsx)("div",{style:{width:"100%",maxWidth:"50%",margin:"auto"},children:Object(m.jsxs)(z,Object(x.a)(Object(x.a)({},b),{},{children:[Object(m.jsx)("p",{className:"ant-upload-drag-icon",children:c}),Object(m.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(m.jsx)("p",{className:"ant-upload-hint",children:"Upload a single file of your face and an A4 sized piece of paper."})]}))})]})}var D=a(185),F=a(190),G=a(130),L=(a(182),D.a.Header),M=D.a.Content;function q(e){return Object(m.jsxs)(D.a,{className:"w-100",children:[Object(m.jsxs)(L,{children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)(G.a,{spin:!0}),"     ","Opticus"]}),Object(m.jsxs)(F.a,{theme:"dark",mode:"horizontal",children:[Object(m.jsx)(F.a.Item,{children:Object(m.jsx)(r.b,{to:"/",children:"Overview"})},"1"),Object(m.jsx)(F.a.Item,{children:Object(m.jsx)(r.b,{to:"/measure",children:"Measure"})},"2")]})]}),Object(m.jsx)(M,{className:"w-100 mh-100",children:e.children})]})}var H=function(){return Object(m.jsx)(r.a,{children:Object(m.jsx)(q,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/measure",children:Object(m.jsx)(A,{})}),Object(m.jsx)(l.a,{path:"/",children:Object(m.jsx)(b,{})})]})})})};n.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root"))}},[[183,1,2]]]);
//# sourceMappingURL=main.edb79239.chunk.js.map