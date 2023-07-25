var ft=Object.defineProperty;var gt=(r,t,l)=>t in r?ft(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l;var Q=(r,t,l)=>(gt(r,typeof t!="symbol"?t+"":t,l),l);import{d as pt,a as R,w as wt,c as M,F as $t,j as K}from"./vue.esm-bundler-2bd5134c.js";import{g as Dt,b as X}from"./index.esm-3f2bcfb7.js";import{c as vt,a as Tt}from"./_commonjsHelpers-87174ba5.js";import{i as tt}from"./index-0b144c19.js";var ut={exports:{}};(function(r,t){(function(l,h){r.exports=h()})(vt,function(){var l=1e3,h=6e4,V=36e5,b="millisecond",x="second",v="minute",T="hour",$="day",C="week",y="month",F="quarter",f="year",S="date",I="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,dt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ht={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var s=["th","st","nd","rd"],e=a%100;return"["+a+(s[(e-20)%10]||s[e]||s[0])+"]"}},G=function(a,s,e){var o=String(a);return!o||o.length>=s?a:""+Array(s+1-o.length).join(e)+a},mt={s:G,z:function(a){var s=-a.utcOffset(),e=Math.abs(s),o=Math.floor(e/60),n=e%60;return(s<=0?"+":"-")+G(o,2,"0")+":"+G(n,2,"0")},m:function a(s,e){if(s.date()<e.date())return-a(e,s);var o=12*(e.year()-s.year())+(e.month()-s.month()),n=s.clone().add(o,y),u=e-n<0,i=s.clone().add(o+(u?-1:1),y);return+(-(o+(e-n)/(u?n-i:i-n))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:y,y:f,w:C,d:$,D:S,h:T,m:v,s:x,ms:b,Q:F}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},k="en",H={};H[k]=ht;var J=function(a){return a instanceof W},P=function a(s,e,o){var n;if(!s)return k;if(typeof s=="string"){var u=s.toLowerCase();H[u]&&(n=u),e&&(H[u]=e,n=u);var i=s.split("-");if(!n&&i.length>1)return a(i[0])}else{var c=s.name;H[c]=s,n=c}return!o&&n&&(k=n),n||!o&&k},p=function(a,s){if(J(a))return a.clone();var e=typeof s=="object"?s:{};return e.date=a,e.args=arguments,new W(e)},d=mt;d.l=P,d.i=J,d.w=function(a,s){return p(a,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var W=function(){function a(e){this.$L=P(e.locale,null,!0),this.parse(e)}var s=a.prototype;return s.parse=function(e){this.$d=function(o){var n=o.date,u=o.utc;if(n===null)return new Date(NaN);if(d.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var i=n.match(N);if(i){var c=i[2]-1||0,g=(i[7]||"0").substring(0,3);return u?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,g)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,g)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return d},s.isValid=function(){return this.$d.toString()!==I},s.isSame=function(e,o){var n=p(e);return this.startOf(o)<=n&&n<=this.endOf(o)},s.isAfter=function(e,o){return p(e)<this.startOf(o)},s.isBefore=function(e,o){return this.endOf(o)<p(e)},s.$g=function(e,o,n){return d.u(e)?this[o]:this.set(n,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,o){var n=this,u=!!d.u(o)||o,i=d.p(e),c=function(A,D){var Y=d.w(n.$u?Date.UTC(n.$y,D,A):new Date(n.$y,D,A),n);return u?Y:Y.endOf($)},g=function(A,D){return d.w(n.toDate()[A].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(D)),n)},m=this.$W,w=this.$M,O=this.$D,_="set"+(this.$u?"UTC":"");switch(i){case f:return u?c(1,0):c(31,11);case y:return u?c(1,w):c(0,w+1);case C:var E=this.$locale().weekStart||0,j=(m<E?m+7:m)-E;return c(u?O-j:O+(6-j),w);case $:case S:return g(_+"Hours",0);case T:return g(_+"Minutes",1);case v:return g(_+"Seconds",2);case x:return g(_+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,o){var n,u=d.p(e),i="set"+(this.$u?"UTC":""),c=(n={},n[$]=i+"Date",n[S]=i+"Date",n[y]=i+"Month",n[f]=i+"FullYear",n[T]=i+"Hours",n[v]=i+"Minutes",n[x]=i+"Seconds",n[b]=i+"Milliseconds",n)[u],g=u===$?this.$D+(o-this.$W):o;if(u===y||u===f){var m=this.clone().set(S,1);m.$d[c](g),m.init(),this.$d=m.set(S,Math.min(this.$D,m.daysInMonth())).$d}else c&&this.$d[c](g);return this.init(),this},s.set=function(e,o){return this.clone().$set(e,o)},s.get=function(e){return this[d.p(e)]()},s.add=function(e,o){var n,u=this;e=Number(e);var i=d.p(o),c=function(w){var O=p(u);return d.w(O.date(O.date()+Math.round(w*e)),u)};if(i===y)return this.set(y,this.$M+e);if(i===f)return this.set(f,this.$y+e);if(i===$)return c(1);if(i===C)return c(7);var g=(n={},n[v]=h,n[T]=V,n[x]=l,n)[i]||1,m=this.$d.getTime()+e*g;return d.w(m,this)},s.subtract=function(e,o){return this.add(-1*e,o)},s.format=function(e){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||I;var u=e||"YYYY-MM-DDTHH:mm:ssZ",i=d.z(this),c=this.$H,g=this.$m,m=this.$M,w=n.weekdays,O=n.months,_=function(D,Y,Z,z){return D&&(D[Y]||D(o,u))||Z[Y].slice(0,z)},E=function(D){return d.s(c%12||12,D,"0")},j=n.meridiem||function(D,Y,Z){var z=D<12?"AM":"PM";return Z?z.toLowerCase():z},A={YY:String(this.$y).slice(-2),YYYY:this.$y,M:m+1,MM:d.s(m+1,2,"0"),MMM:_(n.monthsShort,m,O,3),MMMM:_(O,m),D:this.$D,DD:d.s(this.$D,2,"0"),d:String(this.$W),dd:_(n.weekdaysMin,this.$W,w,2),ddd:_(n.weekdaysShort,this.$W,w,3),dddd:w[this.$W],H:String(c),HH:d.s(c,2,"0"),h:E(1),hh:E(2),a:j(c,g,!0),A:j(c,g,!1),m:String(g),mm:d.s(g,2,"0"),s:String(this.$s),ss:d.s(this.$s,2,"0"),SSS:d.s(this.$ms,3,"0"),Z:i};return u.replace(dt,function(D,Y){return Y||A[D]||i.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,o,n){var u,i=d.p(o),c=p(e),g=(c.utcOffset()-this.utcOffset())*h,m=this-c,w=d.m(this,c);return w=(u={},u[f]=w/12,u[y]=w,u[F]=w/3,u[C]=(m-g)/6048e5,u[$]=(m-g)/864e5,u[T]=m/V,u[v]=m/h,u[x]=m/l,u)[i]||m,n?w:d.a(w)},s.daysInMonth=function(){return this.endOf(y).$D},s.$locale=function(){return H[this.$L]},s.locale=function(e,o){if(!e)return this.$L;var n=this.clone(),u=P(e,o,!0);return u&&(n.$L=u),n},s.clone=function(){return d.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},a}(),q=W.prototype;return p.prototype=q,[["$ms",b],["$s",x],["$m",v],["$H",T],["$W",$],["$M",y],["$y",f],["$D",S]].forEach(function(a){q[a[1]]=function(s){return this.$g(s,a[0],a[1])}}),p.extend=function(a,s){return a.$i||(a(s,W,p),a.$i=!0),p},p.locale=P,p.isDayjs=J,p.unix=function(a){return p(1e3*a)},p.en=H[k],p.Ls=H,p.p={},p})})(ut);var yt=ut.exports;const B=Tt(yt),Mt=/^now(([-+])(\d+)([m|h|d|w|M|y|Y]))?(\/[m|h|d|w|M|y|Y|fy])?/;let St=class{constructor(t){Q(this,"value",[]);this.init(t)}init(t){this.value=t==null?void 0:t.map((l,h)=>typeof l=="number"?B(l).format("YYYY-MM-DD HH:mm:ss"):typeof l=="string"?this.transformTimeString(l,h?"to":"from"):l)}transformTimeString(t,l){let h=null;const V=t.match(Mt);if(V){h=B();const[b,,x,v,T,$]=V;x==="-"&&v&&T&&(h=h.subtract(+v,T)),x==="+"&&v&&T&&(h=h.add(+v,T)),$&&(l==="from"&&(h=h.startOf($.replace("/",""))),l==="to"&&(h=h.endOf($.replace("/","")))),b!==t&&(h=B(null))}else{const b=xt(t);h=B(b)}return h.isValid()?h:null}format(t="YYYY-MM-DD HH:mm:ss"){return this.value.map(l=>{var h;return((h=l==null?void 0:l.format)==null?void 0:h.call(l,t))||null})}unix(){return this.value.map(t=>{var l;return((l=t==null?void 0:t.unix)==null?void 0:l.call(t))||null})}};const xt=r=>/^\d{1}$|^([1-9]\d{1,12})$/.test(r)?parseInt(r,10):r,bt=r=>new St(r).format("YYYY-MM-DD HH:mm:ss");const lt=["now/d","now/d"],et=[{text:"近5分钟",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-60*1e3*5),[t,r]},short:["now-5m","now"],data:{n:-5,unit:"m"}},{text:"近15分钟",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-60*1e3*15),[t,r]},short:["now-15m","now"],data:{n:-15,unit:"m"}},{text:"近30分钟",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-60*1e3*30),[t,r]},short:["now-30m","now"],data:{n:-30,unit:"m"}},{text:"近1小时",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3),[t,r]},short:["now-1h","now"],data:{n:-1,unit:"h"}},{text:"近3小时",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*3),[t,r]},short:["now-3h","now"],data:{n:-1,unit:"h"}},{text:"近6小时",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*6),[t,r]},short:["now-6h","now"],data:{n:-6,unit:"h"}},{text:"近12小时",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*12),[t,r]},short:["now-12h","now"],data:{n:-12,unit:"h"}},{text:"近24小时",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24),[t,r]},short:["now-24h","now"],data:{n:-24,unit:"h"}},{text:"近2天",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*2),[t,r]},short:["now-2d","now"],data:{n:-2,unit:"d"}},{text:"近7天",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*7),[t,r]},short:["now-7d","now"],data:{n:-7,unit:"d"}},{text:"近30天",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*30),[t,r]},short:["now-30d","now"],data:{n:-30,unit:"d"}},{text:"今天",value(){const r=new Date;r.setSeconds(59,0),r.setMinutes(59),r.setHours(23);const t=new Date;return t.setSeconds(0,0),t.setMinutes(0),t.setHours(0),[t,r]},short:["now/d","now/d"]},{text:"昨天",value(){const r=new Date;r.setSeconds(0,0),r.setMinutes(0),r.setHours(0),r.setTime(r.getTime()-3600*1e3*24);const t=new Date;return t.setSeconds(59,0),t.setMinutes(59),t.setHours(23),[r,t]},short:["now-1d/d","now-1d/d"]},{text:"前天",value(){const r=new Date,t=new Date;return t.setTime(t.getTime()-3600*1e3*24*2),[t,r]},short:["now-2d/d","now-2d/d"]}],ct=pt({name:"TimeRange",props:{short:Boolean,readonly:{type:Boolean,default:!1},modelValue:{type:Array,default:()=>lt}},emits:{change:r=>r},setup(r,{emit:t}){const l=R(r.modelValue),h=et.findIndex(f=>f.short.join("")===r.modelValue.join("")),V=R(h||11),b=R(!1),x=R(null),v=R("Asia/Shanghai"),T=R(""),$=R(["",""]);wt(()=>r.modelValue,f=>{y(f)},{deep:!0,immediate:!0});function C(f,S){S==="shortcut"?t("change",l.value):t("change",f)}function y(f){l.value=[...f];const S=bt(f);$.value=[S[0],S[1]]}function F(f,S){if(f){const[I,N]=f.short;t("change",[I,N]),l.value=[I,N]}}return{shortcutSelectedIndex:V,datePicker:x,localValue:l,timezone:v,timestamp:$,timeDisplay:T,isPanelTimeRange:b,changeTime:C,onShortcutChange:F}},render(){var r,t;return M("div",{class:`time-range time-range-${this.short?"short":"wrap"} flex-row align-items-center `},[this.short?M($t,null,[M("i",{class:"bkvision-icon icon-ic_fuwushijian"},null),M("span",{class:"ml-small mr-min"},[(r=this.datePicker)==null?void 0:r.displayValue]),M("span",{class:"time-range-arrow"},[(t=this.datePicker)!=null&&t.visible?M(tt.AngleUp,null,null):M(tt.AngleDown,null,null)])]):"",M(Dt,{ref:"datePicker",modelValue:this.timestamp,"onUpdate:modelValue":l=>this.timestamp=l,clearable:!1,onChange:this.changeTime,shortcuts:et,readonly:this.readonly,shortcutSelectedIndex:this.shortcutSelectedIndex,useShortcutText:!0,shortcutClose:!0,"onShortcut-change":this.onShortcutChange,format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期范围",type:"daterange"},{header:()=>M("div",{class:"time-range-custom"},[M("span",{class:"pr-small"},[K("从")]),M(X,{class:"custom-input",size:"small",modelValue:this.localValue[0],"onUpdate:modelValue":l=>this.localValue[0]=l},null),M("span",{class:"pl-normal pr-normal"},[K("至")]),M(X,{class:"custom-input",size:"small",modelValue:this.localValue[1],"onUpdate:modelValue":l=>this.localValue[1]=l},null)])})])}}),Ct={title:"Example/TimeRange",parameters:{docs:{description:{component:"时间过滤"}}},component:ct,argTypes:{short:{type:{name:"boolean",required:!1},defaultValue:!1,control:"boolean"},readonly:{type:{name:"boolean",required:!1},defaultValue:!1,control:"boolean"},modelValue:{control:"object",table:{category:"List",defaultValue:lt}}}},U=r=>({components:{TimeRange:ct},setup(){return{args:r}},template:'<TimeRange v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</TimeRange>'}),L=U.bind({});L.args={short:!0};var nt,st,rt;U.parameters={...U.parameters,docs:{...(nt=U.parameters)==null?void 0:nt.docs,source:{originalSource:`args => ({
  components: {
    TimeRange
  },
  setup() {
    return {
      args
    };
  },
  template: '<TimeRange v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</TimeRange>'
})`,...(rt=(st=U.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var at,ot,it;L.parameters={...L.parameters,docs:{...(at=L.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    TimeRange
  },
  setup() {
    return {
      args
    };
  },
  template: '<TimeRange v-bind="args" :label="label"  v-model="isShow">{{ slotContent }}</TimeRange>'
})`,...(it=(ot=L.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};const At=["Primary","Short"];export{U as Primary,L as Short,At as __namedExportsOrder,Ct as default};
//# sourceMappingURL=TimeRange.stories-93fd4c4f.js.map