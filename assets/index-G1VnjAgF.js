import{c as Z,d as W,o as V,au as he,h as A,b as J,ae as $e,R as Ve,$ as Be,a1 as Ie,O as be,a8 as ie,a as n,n as L,t as Q,P as ce,ao as T,aZ as Te,j as oe,I as F,w as ee,m as K,av as ze,aE as Me,a6 as Le,a_ as ue,a9 as de,a$ as Ae,b0 as Ee,az as Ne,aB as Re,aG as Oe,u as je,b1 as De,a5 as Ue,af as qe,ai as He,e as Fe,r as Ye,g as Xe,f as Ge,k as Je,b2 as Ke,_ as te,x as j,p as me,q as H,A as Y,F as _e,C as Qe,z as Ze,G as O,D as m,b3 as We,L as ye,y as o,b4 as xe,ap as M,H as et,J as tt,M as at,b5 as G,aJ as nt,b6 as fe,b7 as ot,as as lt}from"./index-DDCgj_Ao.js";const[st,U]=Z("image"),rt={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:L,height:L,radius:L,lazyLoad:Boolean,iconSize:L,showError:Q,errorIcon:ce("photo-fail"),iconPrefix:String,showLoading:Q,loadingIcon:ce("photo"),crossorigin:String,referrerpolicy:String};var it=W({name:st,props:rt,emits:["load","error"],setup(e,{emit:f,slots:l}){const g=V(!1),s=V(!0),r=V(),{$Lazyload:b}=he().proxy,i=A(()=>{const a={width:J(e.width),height:J(e.height)};return $e(e.radius)&&(a.overflow="hidden",a.borderRadius=J(e.radius)),a});Ve(()=>e.src,()=>{g.value=!1,s.value=!0});const _=a=>{s.value&&(s.value=!1,f("load",a))},v=()=>{const a=new Event("load");Object.defineProperty(a,"target",{value:r.value,enumerable:!0}),_(a)},d=a=>{g.value=!0,s.value=!1,f("error",a)},x=(a,c,$)=>$?$():n(F,{name:a,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),h=()=>{if(s.value&&e.showLoading)return n("div",{class:U("loading")},[x(e.loadingIcon,U("loading-icon"),l.loading)]);if(g.value&&e.showError)return n("div",{class:U("error")},[x(e.errorIcon,U("error-icon"),l.error)])},P=()=>{if(g.value||!e.src)return;const a={alt:e.alt,class:U("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?T(n("img",oe({ref:r},a),null),[[Te("lazy"),e.src]]):n("img",oe({ref:r,src:e.src,onLoad:_,onError:d},a),null)},C=({el:a})=>{const c=()=>{a===r.value&&s.value&&v()};r.value?c():ie(c)},y=({el:a})=>{a===r.value&&!g.value&&d()};return b&&Be&&(b.$on("loaded",C),b.$on("error",y),Ie(()=>{b.$off("loaded",C),b.$off("error",y)})),be(()=>{ie(()=>{var a;(a=r.value)!=null&&a.complete&&!e.lazyLoad&&v()})}),()=>{var a;return n("div",{class:U({round:e.round,block:e.block}),style:i.value},[P(),h(),(a=l.default)==null?void 0:a.call(l)])}}});const le=ee(it),[ct,q]=Z("slider"),ut={min:K(0),max:K(100),step:K(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:L,buttonSize:L,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var dt=W({name:ct,props:ut,emits:["change","dragEnd","dragStart","update:modelValue"],setup(e,{emit:f,slots:l}){let g,s,r;const b=V(),i=[V(),V()],_=V(),v=ze(),d=A(()=>Number(e.max)-Number(e.min)),x=A(()=>{const t=e.vertical?"width":"height";return{background:e.inactiveColor,[t]:J(e.barHeight)}}),h=t=>e.range&&Array.isArray(t),P=()=>{const{modelValue:t,min:u}=e;return h(t)?`${(t[1]-t[0])*100/d.value}%`:`${(t-Number(u))*100/d.value}%`},C=()=>{const{modelValue:t,min:u}=e;return h(t)?`${(t[0]-Number(u))*100/d.value}%`:"0%"},y=A(()=>{const u={[e.vertical?"height":"width"]:P(),background:e.activeColor};_.value&&(u.transition="none");const w=()=>e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left";return u[w()]=C(),u}),a=t=>{const u=+e.min,w=+e.max,p=+e.step;t=Oe(t,u,w);const k=Math.round((t-u)/p)*p;return Ee(u,k)},c=()=>{const t=e.modelValue;h(t)?r=t.map(a):r=a(t)},$=t=>{var u,w;const p=(u=t[0])!=null?u:Number(e.min),k=(w=t[1])!=null?w:Number(e.max);return p>k?[k,p]:[p,k]},B=(t,u)=>{h(t)?t=$(t).map(a):t=a(t),ue(t,e.modelValue)||f("update:modelValue",t),u&&!ue(t,r)&&f("change",t)},D=t=>{if(t.stopPropagation(),e.disabled||e.readonly)return;c();const{min:u,reverse:w,vertical:p,modelValue:k}=e,z=de(b),Ce=()=>p?w?z.bottom-t.clientY:t.clientY-z.top:w?z.right-t.clientX:t.clientX-z.left,Pe=p?z.height:z.width,X=Number(u)+Ce()/Pe*d.value;if(h(k)){const[se,re]=k,pe=(se+re)/2;X<=pe?B([X,re],!0):B([se,X],!0)}else B(X,!0)},N=t=>{e.disabled||e.readonly||(v.start(t),s=e.modelValue,c(),_.value="start")},R=t=>{if(e.disabled||e.readonly)return;_.value==="start"&&f("dragStart",t),Ne(t,!0),v.move(t),_.value="dragging";const u=de(b),w=e.vertical?v.deltaY.value:v.deltaX.value,p=e.vertical?u.height:u.width;let k=w/p*d.value;if(e.reverse&&(k=-k),h(r)){const z=e.reverse?1-g:g;s[z]=r[z]+k}else s=r+k;B(s)},E=t=>{e.disabled||e.readonly||(_.value==="dragging"&&(B(s,!0),f("dragEnd",t)),_.value="")},S=t=>typeof t=="number"?q("button-wrapper",["left","right"][t]):q("button-wrapper",e.reverse?"left":"right"),I=(t,u)=>{const w=_.value==="dragging";if(typeof u=="number"){const p=l[u===0?"left-button":"right-button"];let k;if(w&&Array.isArray(s)&&(k=s[0]>s[1]?g^1:g),p)return p({value:t,dragging:w,dragIndex:k})}return l.button?l.button({value:t,dragging:w}):n("div",{class:q("button"),style:Re(e.buttonSize)},null)},ae=t=>{const u=typeof t=="number"?e.modelValue[t]:e.modelValue;return n("div",{ref:i[t??0],role:"slider",class:S(t),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":u,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:w=>{typeof t=="number"&&(g=t),N(w)},onTouchend:E,onTouchcancel:E,onClick:Ae},[I(u,t)])};return B(e.modelValue),Me(()=>e.modelValue),i.forEach(t=>{Le("touchmove",R,{target:t})}),()=>n("div",{ref:b,style:x.value,class:q({vertical:e.vertical,disabled:e.disabled}),onClick:D},[n("div",{class:q("bar"),style:y.value},[e.range?[ae(0),ae(1)]:ae()])])}});const we=ee(dt),[Se,ve]=Z("tabbar"),mt={route:Boolean,fixed:Q,border:Q,zIndex:L,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:K(0),safeAreaInsetBottom:{type:Boolean,default:null}},ke=Symbol(Se);var ft=W({name:Se,props:mt,emits:["change","update:modelValue"],setup(e,{emit:f,slots:l}){const g=V(),{linkChildren:s}=je(ke),r=De(g,ve),b=()=>{var v;return(v=e.safeAreaInsetBottom)!=null?v:e.fixed},i=()=>{var v;const{fixed:d,zIndex:x,border:h}=e;return n("div",{ref:g,role:"tablist",style:Ue(x),class:[ve({fixed:d}),{[qe]:h,"van-safe-area-bottom":b()}]},[(v=l.default)==null?void 0:v.call(l)])};return s({props:e,setActive:(v,d)=>{He(e.beforeChange,{args:[v],done(){f("update:modelValue",v),f("change",v),d()}})}}),()=>e.fixed&&e.placeholder?r(i):i()}});const vt=ee(ft),[gt,ne]=Z("tabbar-item"),ht=Fe({},Ye,{dot:Boolean,icon:String,name:L,badge:L,badgeProps:Object,iconPrefix:String});var bt=W({name:gt,props:ht,emits:["click"],setup(e,{emit:f,slots:l}){const g=Xe(),s=he().proxy,{parent:r,index:b}=Ge(ke);if(!r)return;const i=A(()=>{var d;const{route:x,modelValue:h}=r.props;if(x&&"$route"in s){const{$route:P}=s,{to:C}=e,y=Ke(C)?C:{path:C};return!!P.matched.find(a=>{const c="path"in y&&y.path===a.path,$="name"in y&&y.name===a.name;return c||$})}return((d=e.name)!=null?d:b.value)===h}),_=d=>{var x;i.value||r.setActive((x=e.name)!=null?x:b.value,g),f("click",d)},v=()=>{if(l.icon)return l.icon({active:i.value});if(e.icon)return n(F,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var d;const{dot:x,badge:h}=e,{activeColor:P,inactiveColor:C}=r.props,y=i.value?P:C;return n("div",{role:"tab",class:ne({active:i.value}),style:{color:y},tabindex:0,"aria-selected":i.value,onClick:_},[n(Je,oe({dot:x,class:ne("icon"),content:h},e.badgeProps),{default:v}),n("div",{class:ne("text")},[(d=l.default)==null?void 0:d.call(l,{active:i.value})])])}}});const _t=ee(bt),yt={__name:"index",setup(e){const f=V(0),l=V([{name:"video-o",path:"/video",label:"影片"},{name:"wap-home-o",path:"/main",label:"首頁"},{name:"list-switch",path:"/category",label:"分類"},{name:"user-circle-o",path:"/user",label:"我的"}]);return(g,s)=>{const r=_t,b=vt;return j(),me(b,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=i=>f.value=i),route:"","active-color":"#f97316"},{default:H(()=>[(j(!0),Y(_e,null,Qe(l.value,i=>(j(),me(r,{replace:"",key:i.name,to:i.path,icon:i.name},{default:H(()=>[Ze(O(i.label),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}},xt=te(yt,[["__scopeId","data-v-f1344f9a"]]),wt={},St={class:"flex justify-between items-center"},kt={class:"flex"},Ct=We('<div class="songInfo flex flex-col"><div class="flex items-center"><div class="title">title123</div><span class="p-1 ml-2 border-stone-500 border-2 rounded-md"><p class="text-xs text-stone-500">播放中</p></span></div><div class="artist text-sm text-stone-500">singer</div></div>',1);function Pt(e,f){const l=le,g=F;return j(),Y("div",St,[m("div",kt,[n(l,{class:"mx-2",width:"4rem",height:"4rem",radius:"6",fit:"cover",position:"center",src:"https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"}),Ct]),n(g,{name:"like-o"})])}const pt=te(wt,[["render",Pt]]),ge=e=>{const f=Math.floor(e/60).toString().padStart(2,"0"),l=Math.floor(e%60).toString().padStart(2,"0");return`${f}:${l}`},$t=e=>(et("data-v-44d47907"),e=e(),tt(),e),Vt={class:"flex flex-col h-full items-center"},Bt={class:"title"},It={class:"artist text-sm text-stone-500"},Tt={class:"progressList w-full flex justify-between items-center"},zt={class:"controller flex justify-between items-center"},Mt=$t(()=>m("div",{class:"w-full mt-4 -mb-10 px-4 pt-2 grow rounded-md bg-stone-600 relative overflow-hidden",relative:""},[m("div",{class:"absolute tracking-wide text-stone-800"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione aliquam magni aperiam ad! Recusandae quasi aliquid itaque voluptatibus impedit quisquam perferendis exercitationem magni magnam eius omnis, ab, non consectetur. ")],-1)),Lt={__name:"MusicPopup",setup(e){const{isPlaying:f,play:l,pause:g,currentTrackSong:s,currentTime:r,duration:b,changePlayMode:i,changeCurrentTime:_,nextTrack:v,prevTrack:d,playMode:x,PlayModes:h}=ye("musicPlayer"),P=A(()=>f.value),C=A(()=>x.value===h.RANDOM),y=A(()=>x.value===h.LOOP);return(a,c)=>{var N,R,E;const $=le,B=we,D=F;return j(),Y("div",Vt,[n($,{class:"mb-8 mx-4 max-w-md",radius:"6",fit:"cover",position:"center",src:(N=o(s))==null?void 0:N.cover},null,8,["src"]),m("div",Bt,O((R=o(s))==null?void 0:R.title),1),m("div",It,O((E=o(s))==null?void 0:E.singer),1),m("div",Tt,[m("div",null,O(o(ge)(o(r))),1),n(B,{class:"mx-4 my-8",max:o(b),modelValue:o(r),"onUpdate:modelValue":c[0]||(c[0]=S=>xe(r)?r.value=S:null),"active-color":"#f97316","button-size":"16px",onChange:o(_)},null,8,["max","modelValue","onChange"]),m("div",null,O(o(ge)(o(b))),1)]),m("div",zt,[T(m("span",{onClick:c[1]||(c[1]=S=>o(i)(o(h).RANDOM)),class:"material-symbols-outlined"}," shuffle ",512),[[M,!C.value]]),T(m("span",{onClick:c[2]||(c[2]=S=>o(i)(o(h).SEQUENCE)),class:"material-symbols-outlined text-orange-400"}," shuffle ",512),[[M,C.value]]),m("span",{onClick:c[3]||(c[3]=(...S)=>o(d)&&o(d)(...S)),class:"iconArrow material-symbols-outlined"}," skip_previous "),T(n(D,{onClick:o(l),name:"play-circle",size:"72"},null,8,["onClick"]),[[M,!P.value]]),T(n(D,{onClick:o(g),name:"pause-circle",size:"72"},null,8,["onClick"]),[[M,P.value]]),m("span",{onClick:c[4]||(c[4]=(...S)=>o(v)&&o(v)(...S)),class:"iconArrow material-symbols-outlined"}," skip_next "),m("div",{onClick:c[7]||(c[7]=(...S)=>a.changeIcon&&a.changeIcon(...S))},[T(m("span",{class:"material-symbols-outlined",onClick:c[5]||(c[5]=S=>o(i)(o(h).LOOP))}," repeat ",512),[[M,!y.value]]),T(m("span",{onClick:c[6]||(c[6]=S=>o(i)(o(h).SEQUENCE)),class:"material-symbols-outlined text-orange-400"}," repeat_one ",512),[[M,y.value]])])]),Mt])}}},At=te(Lt,[["__scopeId","data-v-44d47907"]]),Et={class:"relative"},Nt={class:"h-16"},Rt={class:"flex h-full justify-between items-center"},Ot={class:"flex"},jt={class:"songInfo flex flex-col text-xs"},Dt={class:"title"},Ut={class:"artist text-stone-500"},qt={class:"flex"},Ht={__name:"MusicPlayer",props:{isShow:{type:Boolean,default:!1}},setup(e){const f=at(),{changeCurrentTime:l,duration:g,currentTime:s,isPlaying:r,play:b,pause:i,currentTrackSong:_}=ye("musicPlayer"),v=A(()=>r.value),d=V(!1),x=y=>{d.value=y},h=()=>{f.setIsMusicPlayerShow(!1),i()},P=V(!1),C=y=>{P.value=y};return(y,a)=>{var R,E,S;const c=we,$=F,B=le,D=pt,N=nt;return T((j(),Y("div",Et,[m("div",{onClick:a[4]||(a[4]=I=>x(!0)),class:"fixed bottom-12 bg-slate-200"},[n(c,{modelValue:o(s),"onUpdate:modelValue":a[0]||(a[0]=I=>xe(s)?s.value=I:null),max:o(g),"active-color":"#f97316","button-size":"0px",readonly:!0,onChange:o(l)},null,8,["modelValue","max","onChange"]),m("div",Nt,[m("div",Rt,[m("div",Ot,[n($,{onClick:a[1]||(a[1]=G(I=>h(),["stop"])),class:"self-center text-stone-500",name:"close",size:"18"}),n(B,{class:"mx-2",width:"3rem",height:"3rem",radius:"6",fit:"cover",position:"center",src:(R=o(_))==null?void 0:R.cover},null,8,["src"]),m("div",jt,[m("div",Dt,O((E=o(_))==null?void 0:E.title),1),m("div",Ut,O((S=o(_))==null?void 0:S.singer),1)])]),m("div",qt,[n($,{onClick:a[2]||(a[2]=G(I=>C(!0),["stop"])),name:"bars",size:"32"}),n(N,{show:P.value,"onUpdate:show":a[3]||(a[3]=I=>P.value=I),position:"bottom",round:"",closeable:"","close-icon":"close",class:"p-6 py-14"},{default:H(()=>[n(D)]),_:1},8,["show"]),T(n($,{onClick:G(o(b),["stop"]),class:"mx-2",name:"play-circle-o",size:"32"},null,8,["onClick"]),[[M,!v.value]]),T(n($,{onClick:G(o(i),["stop"]),class:"mx-2",name:"pause-circle-o",size:"32"},null,8,["onClick"]),[[M,v.value]])])])])]),n(N,{show:d.value,"onUpdate:show":a[5]||(a[5]=I=>d.value=I),position:"bottom",round:"",closeable:"","close-icon":"close",style:{padding:"64px"}},{default:H(()=>[n(At)]),_:1},8,["show"])],512)),[[M,e.isShow]])}}},Ft=te(Ht,[["__scopeId","data-v-48b9c626"]]),Yt={id:"footer"},Gt={__name:"index",props:{leftArrow:{type:Boolean,default:!1},isSearch:{type:Boolean,default:!1},leftText:{type:String,default:""},clickable:{type:Boolean,default:!0},forTitle:{type:String,default:""},isShow:{type:Boolean,default:!1}},setup(e){const f=V(0);return be(()=>{const l=window.innerHeight-50;f.value=l}),(l,g)=>(j(),Y(_e,null,[n(ot,{"left-arrow":e.leftArrow,"left-text":e.leftText,"is-search":e.isSearch,clickable:e.clickable,"for-title":e.forTitle},{right:H(()=>[fe(l.$slots,"headerRight")]),_:3},8,["left-arrow","left-text","is-search","clickable","for-title"]),m("main",{id:"scroll-wrapper",class:"px-6 pt-14 flex flex-col overflow-x-hidden overflow-y-scroll",style:lt({height:`${f.value}px`})},[fe(l.$slots,"default")],4),m("footer",Yt,[n(Ft,{"is-show":e.isShow},null,8,["is-show"]),n(xt)])],64))}};export{le as I,Gt as _};
