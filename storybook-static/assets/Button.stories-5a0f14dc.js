import{j as S}from"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const $=({btnType:e="default",className:c=""})=>{const t="btn",u=`btn-${e}`;return`${t} ${u} ${c}`},x=({children:e,asChild:c=!1,...t})=>{const u=$(t);return S(c?"div":"button",{...t,className:u,children:e})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{btnType:{defaultValue:{value:"default"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"Destructive"'},{value:'"outline"'},{value:'"ghost"'}]}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"Boolean"}}}}}catch{}const j={title:"growpital-libary/Button",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{btnType:{control:{type:"select",options:["primary","secondary","variant","outline"]}},asChild:{type:"boolean",options:["div","button"]}}},r={args:{btnType:"primary",children:"Button"}},n={args:{btnType:"secondary",children:"Button"}},a={args:{btnType:"destructive",children:"Button"}},o={args:{btnType:"outline",children:"Button"}},s={args:{btnType:"ghost",children:"Button"}};var i,p,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    btnType: 'primary',
    children: 'Button'
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,y;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    btnType: 'secondary',
    children: 'Button'
  }
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    btnType: 'destructive',
    children: 'Button'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,v,T;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    btnType: 'outline',
    children: 'Button'
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,_,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    btnType: 'ghost',
    children: 'Button'
  }
}`,...(C=(_=s.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const q=["Primary","Secondary","Destructive","Outline","Ghost"];export{a as Destructive,s as Ghost,o as Outline,r as Primary,n as Secondary,q as __namedExportsOrder,j as default};
