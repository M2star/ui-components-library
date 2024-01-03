import{j as $}from"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const x=({btnType:e="default",className:s=""})=>{const c="btn",u=`btn-${e}`;return`${c} ${u} ${s}`},D=({children:e,btnType:s,className:c,asChild:u=!1,...S})=>$(u?"div":"button",{...S,className:x({btnType:s,className:c}),children:e});try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{btnType:{defaultValue:{value:"default"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"Destructive"'},{value:'"outline"'},{value:'"ghost"'}]}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"Boolean"}}}}}catch{}const q={title:"growpital-libary/Button",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{btnType:{control:{type:"select",options:["primary","secondary","variant","outline"]}},asChild:{type:"boolean",options:["div","button"]}}},t={args:{btnType:"primary",children:"Button"}},r={args:{btnType:"secondary",children:"Button"}},n={args:{btnType:"destructive",children:"Button"}},a={args:{btnType:"outline",children:"Button"}},o={args:{btnType:"ghost",children:"Button"}};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    btnType: 'primary',
    children: 'Button'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    btnType: 'secondary',
    children: 'Button'
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    btnType: 'destructive',
    children: 'Button'
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var B,v,T;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    btnType: 'outline',
    children: 'Button'
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var f,_,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    btnType: 'ghost',
    children: 'Button'
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const w=["Primary","Secondary","Destructive","Outline","Ghost"];export{n as Destructive,o as Ghost,a as Outline,t as Primary,r as Secondary,w as __namedExportsOrder,q as default};
