import{d as B,a as m,w as N,c as p}from"./vue.esm-bundler-2bd5134c.js";import{a as j}from"./_commonjsHelpers-87174ba5.js";var E={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var s={}.hasOwnProperty;function a(){for(var o=[],l=0;l<arguments.length;l++){var e=arguments[l];if(e){var c=typeof e;if(c==="string"||c==="number")o.push(e);else if(Array.isArray(e)){if(e.length){var h=a.apply(null,e);h&&o.push(h)}}else if(c==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){o.push(e.toString());continue}for(var d in e)s.call(e,d)&&e[d]&&o.push(d)}}}return o.join(" ")}t.exports?(a.default=a,t.exports=a):window.classNames=a})()})(E);var A=E.exports;const T=j(A);const k=B({name:"CustomSwitch",props:{modelValue:{type:[Boolean,Number,String],default:!1},value:{type:[Boolean,Number,String],default:!1},isFlexChild:{type:Boolean,default:!1},showData:{type:Object,default:()=>[{text:"开启",value:!0},{text:"关闭",value:!1}]},showText:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"#fff"},activeBackgroundColor:{type:String,default:"#E1ECFF"},textColor:{type:String,default:"#63656E"},activeTextColor:{type:String,default:"#3A84FF"},itemWidth:{type:Number},activeBorderColor:{type:String,default:"#3A84FF"},borderColor:{type:String,default:"#C4C6CC"},height:{type:Number,default:26}},emits:["update:modelValue","change"],setup(t){const s=m(t.modelValue||t.value),a=m(0);return N(()=>[t.modelValue,t.value],([o,l])=>{s.value=o||l,a.value=t.showData.findIndex(e=>e.value===s.value)},{deep:!0,immediate:!0}),{val:s,activeIndex:a}},methods:{handleValueChange(t){this.activeIndex=t,this.val=this.showData[t].value,this.$emit("update:modelValue",this.val),this.$emit("change",this.val)}},render(){const t={width:`${this.itemWidth?`${this.itemWidth}px`:"auto"}`,color:this.textColor,backgroundColor:this.backgroundColor,borderColor:this.borderColor},s={width:`${this.itemWidth?`${this.itemWidth}px`:"auto"}`,color:this.activeTextColor,backgroundColor:this.activeBackgroundColor,borderColor:this.activeBorderColor};return p("div",{class:"custom-switch",style:{height:`${this.height}px`}},[this.showData.length>0?this.showData.map((a,o)=>p("div",{class:T("custom-switch-button",{"pre-button":this.activeIndex-o===1,"active-button":this.activeIndex===o,"flex-1":this.isFlexChild}),style:this.val===a.value?s:t,key:o,onClick:()=>this.handleValueChange(o)},[this.showData.length<=2&&this.showText.length>0?this.showText[o]:a.text])):"请传入数据"])}}),I={title:"Example/CustomSwitch",parameters:{assets:["https://codesign.woa.com/app/design/gRxnjPk26DZLmqr/6ym7ZRGn7OWjAYE/inspect","https://bkui-vue.woa.com/button"],docs:{description:{component:"自定义切换器，比按钮组（bk-button-group）更加灵活。"}}},component:k,argTypes:{modelValue:{control:"boolean",description:'v-model,类型 "Boolean, Number, String"',table:{category:"Value",defaultValue:!1}},value:{control:"boolean",description:'value,类型 "Boolean, Number, String"',table:{category:"Value",defaultValue:!1}},showData:{control:"object",table:{category:"List",defaultValue:[{text:"开启",value:!0},{text:"关闭",value:!1}]}},showText:{control:"object",table:{category:"List",defaultValue:[]}},itemWidth:{control:"number",table:{category:"Layout",defaultValue:void 0}},isFlexChild:{control:"boolean",table:{category:"Layout",description:"是否为flex布局",defaultValue:!1}},backgroundColor:{control:"color",description:"背景色",table:{category:"Colors",defaultValue:"#fff"}},borderColor:{control:"color",table:{category:"Colors",defaultValue:"#C4C6CC"}},textColor:{control:"color",description:"默认文字颜色",table:{category:"Colors",defaultValue:"#63656E"}},activeBackgroundColor:{control:"color",description:"选择项目的背景色",table:{category:"Colors",defaultValue:"#E1ECFF"}},activeTextColor:{control:"color",table:{category:"Colors",defaultValue:"#3A84FF"}},change:{table:{category:"Events"}}}},r=t=>({components:{CustomSwitch:k},setup(){return{args:t}},template:'<custom-switch v-bind="args" />'}),n=r.bind({});n.args={showData:[{text:"我的空间",value:"self"},{text:"全部空间",value:"all"}],value:"all"};const i=r.bind({});i.args={showData:[{text:"金牌",value:1},{text:"银牌",value:2}],value:2};const u=r.bind({});u.args={showData:[{text:"金牌",value:1},{text:"银牌",value:2}],showText:["蓝鲸第一","蓝鲸第二"],value:2};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    CustomSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: '<custom-switch v-bind="args" />'
})`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,C,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    CustomSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: '<custom-switch v-bind="args" />'
})`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var w,y,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    CustomSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: '<custom-switch v-bind="args" />'
})`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var V,F,D;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    CustomSwitch
  },
  setup() {
    return {
      args
    };
  },
  template: '<custom-switch v-bind="args" />'
})`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const O=["Primary","文本类型","数字类型","自定义展示项"];export{r as Primary,O as __namedExportsOrder,I as default,i as 数字类型,n as 文本类型,u as 自定义展示项};
//# sourceMappingURL=CustomSwitch.stories-5eab5cd6.js.map
