import{d as v,p as C,Y as g,av as D,s as w,L as o,U as d}from"./BnuBI7og.js";import _ from"./BEWIcWwb.js";import S from"./CH1-s2QE.js";import"./DtnyFdwM.js";import"./76o_WpOd.js";const q=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=C().public.content,e=g(),{tag:m,excerpt:a,path:s,query:i,head:r}=f,u=r===void 0?c:r,l={...i||{},path:s||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:a,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:a,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),B=q;export{B as default};
