import{d as p,r as t,c as _,h as s,ao as f,g as v,n,H as l,ap as h,aa as g,e as y,k as V}from"./BnuBI7og.js";import{r}from"./CBSiQxLD.js";import"./76o_WpOd.js";const C={class:"summary"},k={class:"content"},w=p({__name:"Callout",props:{type:{type:String,default:"info",validator(a){return["info","success","warning","danger","primary"].includes(a)}},modelValue:{required:!1,default:()=>t(!1)}},emits:["update:modelValue"],setup(a,{emit:c}){const i=a,u=c,e=t(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(o,B)=>{const m=g;return y(),_("div",{class:n(["callout",[a.type]])},[s("span",{class:"preview",onClick:d},[s("span",C,[r(o.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),f(s("div",k,[r(o.$slots,"content",{},void 0,!0)],512),[[h,l(e)]])],2)}}}),N=V(w,[["__scopeId","data-v-63fa4c2e"]]);export{N as default};
