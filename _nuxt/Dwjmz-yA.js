import{d as j,D as C,X as O,S as T,U as w,c as r,e as o,M as g,i as y,w as f,f as v,n as d,a9 as e,h as p,N as _,aj as Y,g as L,t as U,F as P,K as q,L as $,R as H,k as V,aF as J,aG as K,aH as W,r as N,aI as I,aJ as Q,aK as Z,as as ee,aL as te,aM as z,at as ne,au as R,av as ae,aw as F,E as G,G as se,af as re,ag as oe,ah as ie,ai as le,q as ce,al as de}from"./CrpHfodz.js";import{_ as ue}from"./DXrLsMNg.js";import{_ as X}from"./JC0tpFP5.js";const ge=j({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){const a=s,u=C(()=>{const n=O("gap-16 sm:gap-y-24",a.orientation==="vertical"&&"flex flex-col",a.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),l=a.orientation==="vertical"?"text-center":"",m=O("mt-10 flex flex-wrap gap-x-6 gap-y-3",a.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:n,base:l,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:m}}),{ui:t,attrs:h}=T("landing.hero",w(a,"ui"),u,w(a,"class"),!0);return(n,l)=>{const m=H,k=Y;return r(),o("div",_({class:e(t).wrapper},e(h)),[g(n.$slots,"top"),y(k,{class:d(e(t).container)},{default:f(()=>{var i;return[v("div",{class:d(e(t).base)},[n.$slots.headline?(r(),o("div",{key:0,class:d(e(t).headline)},[g(n.$slots,"headline")],2)):p("",!0),v("h1",{class:d(e(t).title)},[g(n.$slots,"title",{},()=>[L(U(s.title),1)])],2),s.description||n.$slots.description?(r(),o("div",{key:1,class:d(e(t).description)},[g(n.$slots,"description",{},()=>[L(U(s.description),1)])],2)):p("",!0),(i=s.links)!=null&&i.length||n.$slots.links?(r(),o("div",{key:2,class:d(e(t).links)},[g(n.$slots,"links",{},()=>[(r(!0),o(P,null,q(s.links,(x,b)=>(r(),$(m,_({key:b,ref_for:!0},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):p("",!0)],2),g(n.$slots,"default")]}),_:3},8,["class"]),g(n.$slots,"bottom")],16)}}}),pe=Object.assign(ge,{__name:"ULandingHero"}),fe={},me={class:"bg-gray-900/5 dark:bg-white/5 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 rounded-xl lg:-m-4 p-4"};function ye(s,a){return r(),o("div",me,a[0]||(a[0]=[J('<div class="aspect-w-16 aspect-h-9 rounded-lg relative overflow-hidden border border-dashed border-gray-900/10 dark:border-white/10"><svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%"></rect></svg></div>',1)]))}const he=Object.assign(V(fe,[["render",ye]]),{__name:"ImagePlaceholder"}),be=K(W);function _e(s,a={}){const{x:u,y:t}=be(a),h=N(s??(window==null?void 0:window.document.body)),n=N(0),l=N(0);return I&&Q([h,u,t],()=>{var A;const m=Z(h);if(!m)return;const{left:k,top:i}=m.getBoundingClientRect(),x=u.value-(k+I.scrollX),b=t.value-(i+I.scrollY);Math.abs(x)>1500||Math.abs(b)>1500||((A=I.screen)==null?void 0:A.width)<=800||(n.value=x,l.value=b)},{immediate:!0,throttle:50}),{x:u,y:t,elementX:n,elementY:l}}const ke=j({inheritAttrs:!1,__name:"LandingCard",props:{...ee,title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},color:{type:String,default:"primary"},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){te(c=>({"31e863d4":e(u),"706c1e10":e(t)}));const a=s,u=C(()=>{var c;return a.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=z[a.color])==null?void 0:c["500"])||z[a.color]||a.color}),t=C(()=>{var c;return a.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((c=z[a.color])==null?void 0:c["400"])||z[a.color]||a.color}),h=C(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"transition-shadow duration-200",base:"flex-1 flex flex-col overflow-hidden",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",a.orientation==="vertical"&&"flex flex-col",!!l.default&&a.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),n=N(),l=ne(),{elementX:m,elementY:k}=_e(n),{ui:i,attrs:x}=T("landing.card",w(a,"ui"),h,w(a,"class"),!0),b=C(()=>R(a)),A=C(()=>(a.title||l.title&&ae(l.title())||"Card link").trim());return(c,B)=>{const D=F,E=G,S=X;return r(),o("div",_({ref_key:"el",ref:n,style:{"--x":`${e(m)}px`,"--y":`${e(k)}px`},class:[e(i).wrapper,c.to&&[e(i).to,"to"]]},e(x)),[y(S,{ui:e(i)},{default:f(()=>[v("div",{class:d(e(i).container)},[c.to?(r(),$(D,_({key:0,"aria-label":e(A)},e(b),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>B[0]||(B[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):p("",!0),s.icon||c.$slots.icon?(r(),o("div",{key:1,class:d(e(i).icon.wrapper)},[g(c.$slots,"icon",{},()=>[y(E,{name:s.icon,class:d(e(i).icon.base)},null,8,["name","class"])],!0)],2)):p("",!0),s.title||c.$slots.title?(r(),o("p",{key:2,class:d(e(i).title)},[g(c.$slots,"title",{},()=>[L(U(s.title),1)],!0)],2)):p("",!0),s.description||c.$slots.description?(r(),o("div",{key:3,class:d(e(i).description)},[g(c.$slots,"description",{},()=>[L(U(s.description),1)],!0)],2)):p("",!0),g(c.$slots,"container",{},void 0,!0)],2),c.$slots.default?g(c.$slots,"default",{key:0},void 0,!0):p("",!0)]),_:3},8,["ui"])],16)}}}),xe=Object.assign(V(ke,[["__scopeId","data-v-e6ea2c8e"]]),{__name:"ULandingCard"}),ve=j({inheritAttrs:!1,__name:"PageGrid",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){const a={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},u=s,{ui:t,attrs:h}=T("page.grid",w(u,"ui"),a,w(u,"class"),!0);return(n,l)=>(r(),o("div",_({class:e(t).wrapper},e(h)),[g(n.$slots,"default")],16))}}),we=Object.assign(ve,{__name:"UPageGrid"}),$e=j({inheritAttrs:!1,__name:"LandingTestimonial",props:{icon:{type:String,default:void 0},quote:{type:String,required:!0},author:{type:Object,default:void 0},card:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){const a=s,u=C(()=>{const n={};a.card||(n.ring="",n.rounded="",n.background="",n.shadow="",n.divide="");const l=a.card?void 0:"";return{...n,body:{base:"flex flex-col",padding:l},wrapper:"relative",quote:"text-gray-600 dark:text-gray-300",icon:{wrapper:"mb-6 flex",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},author:{wrapper:"flex items-center gap-3 mt-6 relative",name:"font-semibold text-gray-900 dark:text-white text-sm",description:"text-gray-500 dark:text-gray-400 text-sm",avatar:{base:"",size:"md"}}}}),{ui:t,attrs:h}=T("landing.testimonial",w(a,"ui"),u,w(a,"class"),!0);return(n,l)=>{const m=G,k=se,i=X;return r(),$(i,_({class:e(t).wrapper},e(h),{ui:e(t)}),{default:f(()=>[v("div",null,[s.icon||n.$slots.icon?(r(),o("div",{key:0,class:d(e(t).icon.wrapper)},[g(n.$slots,"icon",{},()=>[y(m,{name:s.icon,class:d(e(t).icon.base)},null,8,["name","class"])])],2)):p("",!0),s.quote||n.$slots.quote?(r(),o("q",{key:1,class:d(e(t).quote)},[g(n.$slots,"quote",{},()=>[L(U(s.quote),1)])],2)):p("",!0),s.author?(r(),o("div",{key:2,class:d(e(t).author.wrapper)},[s.author.avatar?(r(),$(k,_({key:0,alt:s.author.name},{size:e(t).author.avatar.size,...s.author.avatar},{class:e(t).author.avatar.base}),null,16,["alt","class"])):p("",!0),v("div",null,[s.author.to?(r(),$(e(F),_({key:0,"aria-label":s.author.name},e(R)(s.author),{class:"focus:outline-none",tabindex:"-1"}),{default:f(()=>l[0]||(l[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):p("",!0),v("p",{class:d(e(t).author.name)},U(s.author.name),3),v("p",{class:d(e(t).author.description)},U(s.author.description),3)])],2)):p("",!0)])]),_:3},16,["class","ui"])}}}),Se=Object.assign($e,{__name:"ULandingTestimonial"}),Ue=j({inheritAttrs:!1,__name:"PageColumns",props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){const a={wrapper:"column-1 md:columns-2 lg:columns-3 gap-8 space-y-8"},u=s,{ui:t,attrs:h}=T("page.columns",w(u,"ui"),a,w(u,"class"),!0);return(n,l)=>(r(),o("div",_({class:e(t).wrapper},e(h)),[g(n.$slots,"default")],16))}}),Ce=Object.assign(Ue,{__name:"UPageColumns"}),Le={key:1},je=j({inheritAttrs:!1,__name:"LandingCTA",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},card:{type:Boolean,default:!0},links:{type:Array,default:()=>[]},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(s){const a=s,u=C(()=>{const n={};a.card?n.rounded="rounded-xl":(n.ring="",n.rounded="",n.background="",n.shadow="",n.divide="");const l=O("",a.align==="center"&&"text-center",a.align==="right"&&"lg:order-last"),m=O("flex flex-col",a.align!=="center"&&"lg:grid lg:grid-cols-2 lg:items-center","gap-16 sm:gap-y-24"),k=a.card?"py-24 sm:py-32 sm:px-16":"py-24 sm:py-32 px-6 lg:px-8",i=O("mt-10 flex items-center gap-x-6",a.align==="center"&&"justify-center");return{...n,wrapper:"relative",container:l,body:{base:m,padding:k},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:i}}),{ui:t,attrs:h}=T("landing.cta",w(a,"ui"),u,w(a,"class"),!0);return(n,l)=>{const m=H,k=X;return r(),$(k,_({class:e(t).wrapper},e(h),{ui:e(t)}),{default:f(()=>{var i;return[v("div",{class:d(e(t).container)},[s.title||n.$slots.title?(r(),o("h2",{key:0,class:d(e(t).title)},[g(n.$slots,"title",{},()=>[L(U(s.title),1)])],2)):p("",!0),s.description||n.$slots.description?(r(),o("div",{key:1,class:d(e(t).description)},[g(n.$slots,"description",{},()=>[L(U(s.description),1)])],2)):p("",!0),(i=s.links)!=null&&i.length||n.$slots.links?(r(),o("div",{key:2,class:d(e(t).links)},[g(n.$slots,"links",{},()=>[(r(!0),o(P,null,q(s.links,(x,b)=>(r(),$(m,_({key:b,ref_for:!0},x,{onClick:x.click}),null,16,["onClick"]))),128))])],2)):p("",!0)],2),n.$slots.default?g(n.$slots,"default",{key:0}):s.align==="right"?(r(),o("div",Le)):p("",!0)]}),_:3},16,["class","ui"])}}}),Ae=Object.assign(je,{__name:"ULandingCTA"}),Oe={key:0},Te=j({__name:"index",async setup(s){let a,u;const{data:t}=([a,u]=re(()=>le("index",()=>ce("/").findOne())),a=await a,u(),a);if(!t.value)throw oe({statusCode:404,statusMessage:"Page not found",fatal:!0});return ie({titleTemplate:"",title:t.value.title,ogTitle:t.value.title,description:t.value.description,ogDescription:t.value.description}),(h,n)=>{const l=F,m=G,k=de,i=pe,x=he,b=ue,A=xe,c=we,B=Se,D=Ce,E=Ae;return e(t)?(r(),o("div",Oe,[y(i,{title:e(t).hero.title,description:e(t).hero.description,links:e(t).hero.links},{headline:f(()=>[e(t).hero.headline?(r(),$(k,{key:0,variant:"subtle",size:"lg",class:"relative rounded-full font-semibold"},{default:f(()=>[y(l,{to:e(t).hero.headline.to,target:"_blank",class:"focus:outline-none",tabindex:"-1"},{default:f(()=>n[0]||(n[0]=[v("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},8,["to"]),L(" "+U(e(t).hero.headline.label)+" ",1),e(t).hero.headline.icon?(r(),$(m,{key:0,name:e(t).hero.headline.icon,class:"ml-1 w-4 h-4 pointer-events-none"},null,8,["name"])):p("",!0)]),_:1})):p("",!0)]),default:f(()=>[n[1]||(n[1]=v("div",{class:"absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"},null,-1))]),_:1},8,["title","description","links"]),y(b,{class:"!pt-0"},{default:f(()=>[y(x)]),_:1}),(r(!0),o(P,null,q(e(t).sections,(S,M)=>(r(),$(b,{key:M,title:S.title,description:S.description,align:S.align,features:S.features},{default:f(()=>[y(x)]),_:2},1032,["title","description","align","features"]))),128)),y(b,{title:e(t).features.title,description:e(t).features.description},{default:f(()=>[y(c,null,{default:f(()=>[(r(!0),o(P,null,q(e(t).features.items,(S,M)=>(r(),$(A,_({key:M,ref_for:!0},S),null,16))),128))]),_:1})]),_:1},8,["title","description"]),y(b,{headline:e(t).testimonials.headline,title:e(t).testimonials.title,description:e(t).testimonials.description},{default:f(()=>[y(D,{class:"xl:columns-4"},{default:f(()=>[(r(!0),o(P,null,q(e(t).testimonials.items,(S,M)=>(r(),o("div",{key:M,class:"break-inside-avoid"},[y(B,_({ref_for:!0},S,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]))),128))]),_:1})]),_:1},8,["headline","title","description"]),y(b,null,{default:f(()=>[y(E,_(e(t).cta,{class:"bg-gray-100/50 dark:bg-gray-800/50"}),null,16)]),_:1})])):p("",!0)}}}),Be=V(Te,[["__scopeId","data-v-b064f615"]]);export{Be as default};
