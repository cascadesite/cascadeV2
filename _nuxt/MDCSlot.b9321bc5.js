import{f as i}from"./node.5e2463bb.js";import{d as u,Z as f,G as c,L as l,$ as d}from"./entry.d3fede31.js";const m=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:e}=f(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:e,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:e,tags:r,parent:n}){var a;try{let o=t;return typeof t=="string"&&(o=(n==null?void 0:n.slots[t])||((a=n==null?void 0:n.parent)==null?void 0:a.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?i(o(),r):[o()]:e?e():l("div")}catch{return l("div")}}}),_=m;export{_};
