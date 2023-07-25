import{d as v,c as l,a,o as w,b as f}from"./vue.esm-bundler-2bd5134c.js";import{e as F,M as C}from"./index.esm-3f2bcfb7.js";const I=v({name:"LoadingPlaceholder",props:{title:{type:String,default:""},size:{type:String,default:"small"}},render(){return l("div",{class:"full-width full-height flex-row align-items-center justify-content-center text-center"},[l(F,{size:this.size,title:this.title},null)])}});const x=v({name:"IFrame",props:{link:String,loading:{type:Boolean,default:!1},placeholder:String,contentWidth:{type:String||Number,default:"100%"}},emits:["load","error"],setup(e,{emit:r}){const n=a(null),o=a(!0);w(()=>{o.value=!1});const c=f(()=>e.loading||o.value);let i=1920;const y=f(()=>{var u,m;if(c.value||!e.link)return null;if(typeof e.contentWidth=="string"){if(!/\d+/.test(e.contentWidth))return{width:e.contentWidth};i=parseInt(e.contentWidth,10)}else i=e.contentWidth||1920;let t=0,d="100%";if(console.log("rightRef.value?.clientWidth",(u=n.value)==null?void 0:u.clientWidth),(m=n.value)!=null&&m.clientWidth){const{clientWidth:W,clientHeight:k}=n.value;t=W/i,d=`${(k/t).toFixed(0)}px`}return{width:`${i}px`,height:d,transform:`scale3d(${t},${t},1)`,"transform-origin":"0 0"}});function b(t){r("load",t)}function S(t){C({theme:"error",message:"预览页加载失败"}),r("error",t)}return{loadingFrame:c,frameStyle:y,rightRef:n,onLoad:b,onError:S}},render(){return l("div",{class:"iframe-box",ref:"rightRef"},[!this.link&&this.placeholder?l("div",{class:"full-height flex-column justify-content-center align-items-center"},[this.placeholder]):"",this.loading||!this.frameStyle?l(I,null,null):l("iframe",{onLoad:this.onLoad,onError:this.onError,style:this.frameStyle,src:this.link,frameborder:"0"},null)])}}),z={title:"Example/IFrame",parameters:{docs:{description:{component:"iframe,限定嵌入网页宽度，适配容器预览。适合应用在嵌入、邮件预览。"}}},component:x,argTypes:{link:{type:{name:"string",required:!1},defaultValue:"",control:"text"},placeholder:{type:{name:"string",required:!1},defaultValue:"",control:"text"},contentWidth:{type:{name:"number",required:!1},defaultValue:1280,description:"表单宽度",control:"number"}}},s=e=>({components:{IFrame:x},setup(){const r=a(!0),n=e.label||"测试",o=e.slotContent||"测试内容";return{args:e,isShow:r,label:n,slotContent:o}},template:'<div class="flex-row" ><div class="flex-1">左边表单</div><div class="flex-1" style="height: 400px;"><i-frame v-bind="args" class="full-height" link="https://bk.tencent.com/docs/document/7.0/233/32616"/></div></div>'});var h,g,p;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    IFrame
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
  template: \`<div class="flex-row" ><div class="flex-1">左边表单</div><div class="flex-1" style="height: 400px;"><i-frame v-bind="args" class="full-height" link="https://bk.tencent.com/docs/document/7.0/233/32616"/></div></div>\`
})`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const V=["Primary"];export{s as Primary,V as __namedExportsOrder,z as default};
//# sourceMappingURL=IFrame.stories-2910fc53.js.map
