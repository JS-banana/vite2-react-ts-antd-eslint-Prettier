import{R as e,M as t,D as a,e as l,f as n,L as r,r as s,c as o,g as c,T as m,h as i,a as u}from"./vendor.049b4360.js";import{u as d}from"./index.5e51e819.js";import{l as p}from"./index.d0e4574f.js";var E="_layout_header_1i336_1";const{Header:h}=r,v=()=>{const r=d((e=>e.user)),s=e.createElement(t,{onClick:e=>{"0"===e.key&&(localStorage.removeItem("vite-react-ts-antd-token"),window.location.href="/user/login")}},e.createElement(t.Item,{key:"0"},"退出登录"));return e.createElement(h,{className:E},e.createElement(a,{overlay:s},e.createElement(l,null,e.createElement(n,{src:"/vite-react-ts/assets/logo.f274bd7b.jpg"}),null==r?void 0:r.username)))};var _="_menu_logo_ui415_1",f="_logo_title_ui415_6";const{Sider:g}=r,y=()=>{const[a,l]=s.exports.useState([]),[n,r]=s.exports.useState([]),u=(null==(d=p.find((e=>"/sys"===e.path)))?void 0:d.routes)||[];var d;const E=o();return s.exports.useEffect((()=>{const e=E.location.pathname,t=c(u,e);(null==t?void 0:t.length)&&(l(t.map((e=>e.route.path))),r([t[0].route.path]))}),[E.location.pathname]),e.createElement(g,null,e.createElement("div",{className:_},e.createElement(m.Title,{className:f,level:5},"Logo")),e.createElement(t,{theme:"dark",mode:"inline",openKeys:a,selectedKeys:n},u.map((a=>e.createElement(t.Item,{key:a.path},e.createElement(i,{to:a.path},a.title))))))},{Content:x}=r,k=({route:t})=>e.createElement(r,null,e.createElement(y,null),e.createElement(r,null,e.createElement(v,null),e.createElement(x,{style:{height:"calc(100vh - 60px)"}},u(t.routes))));export{k as default};
