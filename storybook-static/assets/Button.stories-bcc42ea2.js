import{j as $}from"./jsx-runtime-bc5d6cf6.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const x=({btnType:e="default",className:c=""})=>{const t="btn",u=`btn-${e}`;return`${t} ${u} ${c}`},i=({children:e,asChild:c=!1,...t})=>{const u=x(t);return $(c?"div":"button",{...t,className:u,children:e})};try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{btnType:{defaultValue:{value:"default"},description:"",name:"btnType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"secondary"'},{value:'"Destructive"'},{value:'"outline"'},{value:'"ghost"'}]}},asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"Boolean"}}}}}catch{}const q={title:"growpital-libary/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{btnType:{control:{type:"select",options:["primary","secondary","variant","outline"]}},asChild:{type:"boolean",options:["div","button"]}}},r={args:{btnType:"primary",children:"Button"}},a={args:{btnType:"secondary",children:"Button"}},n={args:{btnType:"destructive",children:"Button"}},s={args:{btnType:"outline",children:"Button"}},o={args:{btnType:"ghost",children:"Button"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    btnType: 'primary',
    children: 'Button'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,y,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    btnType: 'secondary',
    children: 'Button'
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,h,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    btnType: 'destructive',
    children: 'Button'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,T,f;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    btnType: 'outline',
    children: 'Button'
  }
}`,...(f=(T=s.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var _,C,S;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    btnType: 'ghost',
    children: 'Button'
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const G=["Primary","Secondary","Destructive","Outline","Ghost"];export{n as Destructive,o as Ghost,s as Outline,r as Primary,a as Secondary,G as __namedExportsOrder,q as default};
