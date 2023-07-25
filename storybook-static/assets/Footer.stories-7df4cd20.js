import{d as a,c as o}from"./vue.esm-bundler-2bd5134c.js";const i=a({name:"Footer",props:{links:{type:Array,default:()=>[]},info:{type:String,default:"Copyright © 2012-2022 Tencent BlueKing. All Rights Reserved.  V3.6.2858(3.6.2673)"}},render(){return o("footer",{class:"monitor-navigation-footer"},[this.links.length?o("div",{class:"footer-link"},[this.links.map(e=>o("a",{href:e.url},[e.title]))]):"",o("div",null,[this.info])])}}),c={title:"Example/Footer",component:i,argTypes:{info:{description:"版权信息等",control:"text"},links:{description:"友情链接等",control:"object"}}},l=e=>({components:{Footer:i},setup(){return{args:e}},template:'<Footer v-bind="args" />'}),t=l.bind({});t.args={links:[{title:"技术支持",url:"https://wpa1.qq.com/KziXGWJs?_type=wpa&amp;qidian=true"},{title:"社区论坛",url:"https://bk.tencent.com/s-mart/community/"},{title:"产品官网",url:"https://bk.tencent.com/index/"}],info:"Copyright © 2012-2022 Tencent BlueKing. All Rights Reserved.  V3.6.2858(3.6.2673)"};var r,n,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Footer
  },
  setup() {
    return {
      args
    };
  },
  template: '<Footer v-bind="args" />'
})`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const m=["Primary"];export{t as Primary,m as __namedExportsOrder,c as default};
//# sourceMappingURL=Footer.stories-7df4cd20.js.map
