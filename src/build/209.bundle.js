"use strict";(self.webpackChunkinventory_management_net=self.webpackChunkinventory_management_net||[]).push([[209],{6209:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r=o(7294),a=o(6089),n=o(5725),s=o(3366),l=o(7462),c=o(6010),i=o(4780),d=o(1618),u=o(1657),m=o(948),p=o(1588),Z=o(4867);function b(e){return(0,Z.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);var v=o(5893);const f=["className","component","padding","size","stickyHeader"],y=(0,m.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,l.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,l.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),w="table",g=r.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTable"}),{className:a,component:n=w,padding:m="normal",size:p="medium",stickyHeader:Z=!1}=o,g=(0,s.Z)(o,f),h=(0,l.Z)({},o,{component:n,padding:m,size:p,stickyHeader:Z}),M=(e=>{const{classes:t,stickyHeader:o}=e,r={root:["root",o&&"stickyHeader"]};return(0,i.Z)(r,b,t)})(h),k=r.useMemo((()=>({padding:m,size:p,stickyHeader:Z})),[m,p,Z]);return(0,v.jsx)(d.Z.Provider,{value:k,children:(0,v.jsx)(y,(0,l.Z)({as:n,role:n===w?null:"table",ref:t,className:(0,c.Z)(M.root,a),ownerState:h},g))})}));var h=o(4063);function M(e){return(0,Z.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);const k=["className","component"],H=(0,m.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),T={variant:"body"},x="tbody",E=r.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTableBody"}),{className:r,component:a=x}=o,n=(0,s.Z)(o,k),d=(0,l.Z)({},o,{component:a}),m=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},M,t)})(d);return(0,v.jsx)(h.Z.Provider,{value:T,children:(0,v.jsx)(H,(0,l.Z)({className:(0,c.Z)(m.root,r),as:a,ref:t,role:a===x?null:"rowgroup",ownerState:d},n))})}));var N=o(6926);function R(e){return(0,Z.Z)("MuiTableContainer",e)}(0,p.Z)("MuiTableContainer",["root"]);const P=["className","component"],C=(0,m.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),S=r.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTableContainer"}),{className:r,component:a="div"}=o,n=(0,s.Z)(o,P),d=(0,l.Z)({},o,{component:a}),m=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},R,t)})(d);return(0,v.jsx)(C,(0,l.Z)({ref:t,as:a,className:(0,c.Z)(m.root,r),ownerState:d},n))}));function j(e){return(0,Z.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);const z=["className","component"],B=(0,m.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),_={variant:"head"},A="thead",F=r.forwardRef((function(e,t){const o=(0,u.Z)({props:e,name:"MuiTableHead"}),{className:r,component:a=A}=o,n=(0,s.Z)(o,z),d=(0,l.Z)({},o,{component:a}),m=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},j,t)})(d);return(0,v.jsx)(h.Z.Provider,{value:_,children:(0,v.jsx)(B,(0,l.Z)({as:a,className:(0,c.Z)(m.root,r),ref:t,role:a===A?null:"rowgroup",ownerState:d},n))})}));var X=o(3694),q=o(4680);const D=function(e){var t=e.columns,o=e.rows;return r.createElement(r.Fragment,null,r.createElement(n.ZP,{container:!0},r.createElement(n.ZP,{item:!0,xs:12},r.createElement(a.Z,{component:"main"},r.createElement(q.Z,{sx:{width:"100%",overflow:"hidden"}},r.createElement(S,{sx:{maxHeight:440}},r.createElement(g,{stickyHeader:!0},r.createElement(F,null,r.createElement(X.Z,null,t.map((function(e){return r.createElement(N.Z,{key:e.id},r.createElement("b",null,e.title))})))),r.createElement(E,null,o))))))))}}}]);