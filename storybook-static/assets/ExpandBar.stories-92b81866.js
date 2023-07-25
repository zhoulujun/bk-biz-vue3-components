import{d as h,a as f,c as t,f as B,v as x}from"./vue.esm-bundler-2bd5134c.js";import{i as u}from"./index-0b144c19.js";import"./_commonjsHelpers-87174ba5.js";const g=h({name:"ExpandBar",props:{modelValue:{type:Boolean,default:!0},label:String,handlerClass:{type:String,default:"mb-medium"},renderDirective:{type:String,default:"if"}},emits:["update:modelValue","change"],setup(e,{emit:o,slots:n}){const a=f(e.modelValue);function v(){const s=!a.value;a.value=s,o("update:modelValue",s),o("change",s)}return()=>t("div",null,[t("div",{onClick:v,class:`cursor-pointer flex-row align-items-center ${e.handlerClass}`},[t("span",null,[e.label]),t("span",{class:"font-big"},[a.value?t(u.AngleUp,null,null):t(u.AngleDown,null,null)])]),e.renderDirective==="show"?B(t("div",null,[n==null?void 0:n.default()]),[[x,a.value]]):a.value?n==null?void 0:n.default():""])}}),D={title:"Example/ExpandBar",parameters:{docs:{description:{component:"收起与折叠"}}},component:g,argTypes:{modelValue:{type:{name:"boolean",required:!1},defaultValue:!0,control:"boolean"},label:{type:{name:"string",required:!1},defaultValue:"",control:"text"},handlerClass:{type:{name:"string",required:!1},defaultValue:"",control:"string"},renderDirective:{type:{name:"string",required:!1},defaultValue:"if",description:"渲染模式 对应v-if、v-show",options:["if","show"],control:"select"}}},r=e=>({components:{ExpandBar:g},setup(){const o=f(!0),n=e.label||"测试",a=e.slotContent||"测试内容";return{args:e,isShow:o,label:n,slotContent:a}},template:'<expand-bar v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</expand-bar>'}),l=r.bind({});l.args={label:"过滤",slotContent:"111"};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    ExpandBar
  },
  setup() {
    const isShow = ref(true);
    const label = args.label || '测试';
    const slotContent = args.slotContent || '测试内容';
    return {
      args,
      isShow,
      label,
      slotContent
    };
  },
  template: '<expand-bar v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</expand-bar>'
})`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    ExpandBar
  },
  setup() {
    const isShow = ref(true);
    const label = args.label || '测试';
    const slotContent = args.slotContent || '测试内容';
    return {
      args,
      isShow,
      label,
      slotContent
    };
  },
  template: '<expand-bar v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</expand-bar>'
})`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const y=["Primary","插槽"];export{r as Primary,y as __namedExportsOrder,D as default,l as 插槽};
//# sourceMappingURL=ExpandBar.stories-92b81866.js.map
