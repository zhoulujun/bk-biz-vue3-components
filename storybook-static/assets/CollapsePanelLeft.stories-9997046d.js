import{d as b,a as y,c as t}from"./vue.esm-bundler-2bd5134c.js";import{B as L,a as o,b as g,c as C}from"./index.esm-3f2bcfb7.js";import{i as c}from"./index-0b144c19.js";import"./_commonjsHelpers-87174ba5.js";const{CollapsePanel:h}=L,s=b({name:"CollapseLeft",props:{modelValue:{type:Boolean,default:!1},content:{type:String||Object||Function},title:{type:String||Object},suffix:{type:String||Object}},emits:["update:modelValue","change","ensure","clear"],setup(e,{slots:r}){const l=y(!0);return()=>t(h,{modelValue:l.value,"onUpdate:modelValue":S=>l.value=S},{header:()=>t("div",{class:"bk-collapse-header flex-row align-items-center"},[t("span",{class:"mr-small"},[l.value?t(c.UpShape,null,null):t(c.DownShape,null,null)]),e.title,e.suffix]),content:()=>e.content?typeof e.content=="function"?e.content():e.content:r==null?void 0:r.default()})}}),{FormItem:P}=o,B={title:"Example/CollapsePanelLeft",component:s,argTypes:{modelValue:{type:{name:"boolean",required:!1},defaultValue:!0,control:"boolean"},content:{type:{name:"string",required:!1},defaultValue:"",control:"text"},title:{type:{name:"string",required:!1},defaultValue:"",control:"string"},suffix:{type:{name:"string",required:!1},defaultValue:"",control:"string"}}},V=e=>({components:{CollapsePanelLeft:s,Form:o,Input:g,Switcher:C,FormItem:P},setup(){return{args:e}},template:`
    <CollapsePanelLeft v-bind="args">
        配置内容
    </CollapsePanelLeft>
  `}),n=V.bind({});n.args={title:"图表配置"};const x=e=>({components:{CollapsePanelLeft:s,Form:o,Input:g,Switcher:C,FormItem:P},setup(){return{args:e}},template:`
    <CollapsePanelLeft v-bind="args"/>
  `}),a=x.bind({});a.args={title:"图表配置",content:"内如"};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    CollapsePanelLeft,
    Form,
    Input,
    Switcher,
    FormItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <CollapsePanelLeft v-bind="args">
        配置内容
    </CollapsePanelLeft>
  \`
})`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,d,f;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    CollapsePanelLeft,
    Form,
    Input,
    Switcher,
    FormItem
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <CollapsePanelLeft v-bind="args"/>
  \`
})`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const k=["Primary","Second"];export{n as Primary,a as Second,k as __namedExportsOrder,B as default};
//# sourceMappingURL=CollapsePanelLeft.stories-9997046d.js.map
