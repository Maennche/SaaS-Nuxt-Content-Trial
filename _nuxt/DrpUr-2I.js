import{u as $,_ as N}from"./CqcXsPUY.js";import{d as b,x as A,u as B,a5 as w,c as f,L as S,$ as j,w as a,f as _,i as s,g as v,t as z,a9 as e,N as U,R as O,S as V,U as y,e as C,n as m,M as g,h as P,ax as D,ay as I,r as K,D as L,aj as R,az as T,aA as E,ae as M,am as q}from"./CrpHfodz.js";const F={class:"hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"},G=b({__name:"ContentSearchButton",props:{label:{type:String,default:"Search..."}},setup(n){const r=A(),{$ui:l}=B(),{toggleContentSearch:t}=w(),{metaSymbol:c}=$();return(o,u)=>{var p,d,x,k;const i=N,h=O;return f(),S(h,U({icon:e(r).ui.icons.search,label:n.label,truncate:""},n.label?(d=(p=e(l))==null?void 0:p.button)==null?void 0:d.input:(k=(x=e(l))==null?void 0:x.button)==null?void 0:k.secondary,{"aria-label":"Search",class:[!!n.label&&"flex-1"],onClick:e(t)}),j({_:2},[n.label?{name:"trailing",fn:a(()=>[_("div",F,[s(i,null,{default:a(()=>[v(z(e(c)),1)]),_:1}),s(i,null,{default:a(()=>u[0]||(u[0]=[v(" K ")])),_:1})])]),key:"0"}:void 0]),1040,["icon","label","class","onClick"])}}}),H=Object.assign(G,{__name:"UContentSearchButton"}),J={class:"relative"},Q=b({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const r={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},l=n,{ui:t,attrs:c}=V("aside",y(l,"ui"),r,y(l,"class"),!0);return(o,u)=>{const i=D;return f(),C("aside",U({class:e(t).wrapper},e(c)),[_("div",J,[o.$slots.top?(f(),C("div",{key:0,class:m(e(t).top.wrapper)},[_("div",{class:m(e(t).top.header)},null,2),_("div",{class:m(e(t).top.body)},[g(o.$slots,"top")],2),_("div",{class:m(e(t).top.footer)},null,2)],2)):P("",!0),g(o.$slots,"links",{},()=>[s(i,{links:n.links},null,8,["links"])]),g(o.$slots,"default"),g(o.$slots,"bottom")])],16)}}}),W=Object.assign(Q,{__name:"UAside"}),Z=b({__name:"docs",setup(n){const r=I("navigation",K([])),l=L(()=>{var t;return((t=r.value.find(c=>c._path==="/docs"))==null?void 0:t.children)??[]});return(t,c)=>{const o=H,u=E,i=W,h=M,p=q,d=R;return f(),S(d,null,{default:a(()=>[s(p,null,{left:a(()=>[s(i,null,{top:a(()=>[s(o,{class:"rounded-md",size:"sm"})]),default:a(()=>[s(u,{links:("mapContentNavigation"in t?t.mapContentNavigation:e(T))(e(l))},null,8,["links"])]),_:1})]),default:a(()=>[s(h)]),_:1})]),_:1})}}});export{Z as default};
