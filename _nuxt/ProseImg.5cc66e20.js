import{i as r,F as n,o as c,c as h,u as o,K as u,k as l,h as d,L as f}from"./entry.24fe5efe.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,a=n(()=>{var i;if((i=t.src)!=null&&i.startsWith("/")&&!t.src.startsWith("//")){const s=u(l(d().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(i,s)=>(c(),h("img",{src:o(a),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
