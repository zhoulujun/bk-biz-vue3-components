import{d as O,a as f,D as R,b as W,c as a,j as o}from"./vue.esm-bundler-2bd5134c.js";import{T as k,M as E}from"./index.esm-3f2bcfb7.js";const H=O({name:"MemberSelector",props:{optionLimit:{type:Number,default:15},size:{type:String,default:null},allowCreate:{type:Boolean,default:!0},maxData:{type:Number,default:-1},cacheTimeout:{type:Number,default:1e3*60*60*24},contentWidth:{type:Number,default:200},contentMaxHeight:{type:Number,default:300},placeholder:{type:String,default:"请输入用户名"},trigger:{type:String,default:"search"},value:{type:String,default:"english_name"},label:{type:String,default:"chinese_name"},useGroup:Boolean,cacheable:Boolean,extraGroup:{type:Array,default:()=>[]},modelValue:{type:Array||String,default:""},avatars:{type:Function,default:e=>e.src},api:{type:String||Function,default:""},tpl:{type:Function},tagTpl:{type:Function}},emits:["update:modelValue","change"],setup(e,{emit:n}){const t=f(e.modelValue),s=R([]),d=f(!0),$=W(()=>e.useGroup?e.extraGroup.concat([{english_name:"成员",chinese_name:"成员",children:s.value}]):s.value);function I(c){n("change",c),n("update:modelValue",c)}function L(){if(d.value=!0,localStorage.getItem("member")){const l=JSON.parse(localStorage.getItem("member")),{timestamp:b}=l;if(new Date().valueOf()-b>e.cacheTimeout)return d.value=!1,s.value=l.data,!0}const c="jsonp_init_bk_member",g=document.createElement("script");let h=typeof e.api=="function"?e.api():e.api;h.includes("?")?g.src=`${h}&callback=${c}`:g.src=`${h}?callback=${c}`,document.body.appendChild(g),window[c]=l=>{if(l.result?(d.value=!1,s.value=l.data):E({theme:"error",message:l.message}),e.cacheable){const b={timestamp:new Date().valueOf(),data:l.data};localStorage.setItem("member",JSON.stringify(b))}document.body.removeChild(g)}}return L(),{content:t,memberList:s,loading:d,handleSelectChange:I,mData:$}},render(){const e=(t,s)=>a("div",{class:"flex-row align-items-center p-min"},[a("img",{class:"avatar-box overflow-hidden mr-min",src:this.avatars(t),alt:"人员头像"},null),a("div",{class:"text flex-1 text-ov",innerHTML:`${s(t[this.value])} (${t[this.label]})`},null)]),n=t=>a("div",{class:"tag"},[a("span",{class:"text"},[a("label",{style:"text-decoration: underline;"},[t[this.value]]),o(" ("),t[this.label],o(")")])]);return a(k,{modelValue:this.content,"onUpdate:modelValue":t=>this.content=t,placeholder:this.placeholder,saveKey:this.value,searchKey:this.value,trigger:this.trigger,maxData:this.maxData,hasDeleteIcon:!0,allowCreate:this.allowCreate,disabled:this.loading,tpl:this.tpl||e,tagTpl:this.tagTpl||n,maxResult:this.optionLimit,contentWidth:this.contentWidth,contentMaxHeight:this.contentMaxHeight,list:this.mData,useGroup:this.useGroup,allowAutoMatch:!0,class:"full-width",onChange:this.handleSelectChange},null)}}),A={title:"Example/MemberSelector",parameters:{docs:{description:{component:"用户选择器"}}},component:H,argTypes:{modelValue:{control:"object",description:"v-model",table:{category:"值",defaultValue:[]}},optionLimit:{control:"number",description:"最多可选个数",table:{category:"限制",defaultValue:15}},contentWidth:{control:"number",description:"最多可选个数",table:{category:"限制",defaultValue:200}},contentMaxHeight:{control:"number",description:"最多可选个数",table:{category:"限制",defaultValue:300}},size:{type:{name:"string",required:!1},defaultValue:"",description:"输入框尺寸大小",options:["mini","small","large",""],control:"select",table:{category:"外观",defaultValue:""}},maxData:{control:"number",description:"下拉列表搜索结果显示个数，默认为 10",table:{category:"限制",defaultValue:-1}},cacheTimeout:{control:"number",description:"缓存时间",table:{category:"请求",defaultValue:1e3*60*60*24}},placeholder:{control:"text",table:{category:"外观",defaultValue:"请输入用户名"}},trigger:{control:"text",table:{category:"外观",defaultValue:"search"}},label:{control:"text",table:{category:"值",defaultValue:"chinese_name"}},value:{control:"text",table:{category:"值",defaultValue:"english_name"}},avatars:{description:"头像获取防范，默认(node)=>node.src",table:{category:"请求"}},api:{description:"用户列表获取接口",table:{category:"请求",defaultValue:e=>e.src}},useGroup:{control:"boolean",description:"配置 use-group 来启用分组功能， 数据源必须加上 children 的配置",table:{category:"外观",defaultValue:!1}},cacheable:{control:"boolean",description:"是否画缓存请求",table:{category:"请求",defaultValue:!1}},tpl:{description:"设置 tpl 方法自定义下拉列表展示",table:{category:"模板"}},tagTpl:{description:"设置 tagTpl 方法自定义标签展示",table:{category:"模板"}},change:{table:{category:"Events"}}}},r=e=>({components:{MemberSelector:H},setup(){const n=f([]),t=e.api||"https://www.zhoulujun.cn/test/jsonp.js?a=3";return{args:e,name:n,api:t}},template:'<MemberSelector v-model="name" v-bind="args" :api="api" />'}),u=r.bind({});u.args={api:"https://www.zhoulujun.cn/test/jsonp.js?a=3",placeholder:"请输入收件人RTX或邮件组名称"};r.parameters={docs:{description:{component:"用户选择器"}}};const i=r.bind({});i.args={api:"https://www.zhoulujun.cn/test/jsonp.js?a=3",contentMaxHeight:500,contentWidth:600};i.parameters={docs:{description:{component:"用户选择器"}}};const p=r.bind({});p.args={placeholder:"请输入收件人RTX或邮件组名称",api:"https://www.zhoulujun.cn/test/jsonp.js?a=3",avatars:e=>"https://www.tencent.com/data/logo-pic/1.2.png",tagTpl:({chinese_name:e,english_name:n,city:t})=>a("div",{class:"tag"},[a("span",{class:"text"},[a("label",{style:"text-decoration: underline;"},[n]),o(" ("),e,o("-"),t,o(")")])])};const m=r.bind({});m.args={api:"https://www.zhoulujun.cn/test/jsonp.js?a=3",placeholder:"请输入收件人RTX或邮件组名称",avatars:e=>e.url,tagTpl:({chinese_name:e,english_name:n,city:t})=>a("div",{class:"tag"},[a("span",{class:"text"},[a("label",{style:"text-decoration: underline;"},[n]),o(" ("),e,o("-"),t,o(")")])])};var y,w,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    MemberSelector
  },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return {
      args,
      name,
      api
    };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />'
})`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var S,j,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    MemberSelector
  },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return {
      args,
      name,
      api
    };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />'
})`,...(x=(j=u.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var M,V,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    MemberSelector
  },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return {
      args,
      name,
      api
    };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />'
})`,...(T=(V=i.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var z,_,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    MemberSelector
  },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return {
      args,
      name,
      api
    };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />'
})`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,N,G;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    MemberSelector
  },
  setup() {
    const name = ref<string[]>([]);
    const api = args.api || 'https://www.zhoulujun.cn/test/jsonp.js?a=3';
    return {
      args,
      name,
      api
    };
  },
  template: '<MemberSelector v-model="name" v-bind="args" :api="api" />'
})`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};const B=["Primary","Placeholder","下拉列表尺寸设置","标签模板","列表模板"];export{u as Placeholder,r as Primary,B as __namedExportsOrder,A as default,i as 下拉列表尺寸设置,m as 列表模板,p as 标签模板};
//# sourceMappingURL=MemberSelect.stories-3d40d1c7.js.map
