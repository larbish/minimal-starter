import{_ as o}from"./ContentRendererMarkdown.vue.edc958b8.js";import{i as l,f as s,j as d,l as c}from"./entry.24fe5efe.js";import"./index.288f722b.js";import"./preview.fbbd06b6.js";const g=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,a,i;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(a=t==null?void 0:t.value)==null?void 0:a._path}.${(i=t==null?void 0:t.value)==null?void 0:i._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,f;const n=d(),{value:e,excerpt:a,tag:i}=t,r=a?e==null?void 0:e.excerpt:e==null?void 0:e.body;return!((u=r==null?void 0:r.children)!=null&&u.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:a,tag:i,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:a,tag:i,...this.$attrs}):(r==null?void 0:r.type)==="root"&&((f=r==null?void 0:r.children)!=null&&f.length)?c(o,{value:e,excerpt:a,tag:i,...this.$attrs}):c("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:a,tag:i},null,2))}});export{g as default};
