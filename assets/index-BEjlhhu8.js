import{c as K,d as Q,F as $,aj as ve,h as M,b as H,a3 as Ve,R as Be,H as Ie,K as Te,Z as ge,U as le,a as d,n as L,t as Y,M as re,ad as T,aS as ze,j as te,I as Z,w as W,m as F,ak as pe,ax as Ae,S as Le,aT as ie,V as se,aU as Me,aV as Ee,ao as Ne,aL as Re,az as Oe,u as je,aW as Ue,Q as De,a4 as qe,a7 as He,e as Fe,r as Ye,g as Xe,f as Ke,k as Qe,aX as Ze,_ as ae,q as R,l as ce,o as X,as as G,av as he,at as We,s as Ge,aY as E,aZ as be,au as n,v as g,a_ as ye,ae as A,y as Je,z as et,a$ as ue,aC as tt,b0 as de,b1 as at,ah as nt}from"./index-C7OD-U3f.js";const[ot,N]=K("image"),lt={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:L,height:L,radius:L,lazyLoad:Boolean,iconSize:L,showError:Y,errorIcon:re("photo-fail"),iconPrefix:String,showLoading:Y,loadingIcon:re("photo"),crossorigin:String,referrerpolicy:String};var rt=Q({name:ot,props:lt,emits:["load","error"],setup(e,{emit:v,slots:r}){const b=$(!1),o=$(!0),l=$(),{$Lazyload:h}=ve().proxy,s=M(()=>{const a={width:H(e.width),height:H(e.height)};return Ve(e.radius)&&(a.overflow="hidden",a.borderRadius=H(e.radius)),a});Be(()=>e.src,()=>{b.value=!1,o.value=!0});const _=a=>{o.value&&(o.value=!1,v("load",a))},m=()=>{const a=new Event("load");Object.defineProperty(a,"target",{value:l.value,enumerable:!0}),_(a)},f=a=>{b.value=!0,o.value=!1,v("error",a)},y=(a,i,B)=>B?B():d(Z,{name:a,size:e.iconSize,class:i,classPrefix:e.iconPrefix},null),c=()=>{if(o.value&&e.showLoading)return d("div",{class:N("loading")},[y(e.loadingIcon,N("loading-icon"),r.loading)]);if(b.value&&e.showError)return d("div",{class:N("error")},[y(e.errorIcon,N("error-icon"),r.error)])},V=()=>{if(b.value||!e.src)return;const a={alt:e.alt,class:N("img"),style:{objectFit:e.fit,objectPosition:e.position},crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy};return e.lazyLoad?T(d("img",te({ref:l},a),null),[[ze("lazy"),e.src]]):d("img",te({ref:l,src:e.src,onLoad:_,onError:f},a),null)},k=({el:a})=>{const i=()=>{a===l.value&&o.value&&m()};l.value?i():le(i)},x=({el:a})=>{a===l.value&&!b.value&&f()};return h&&Ie&&(h.$on("loaded",k),h.$on("error",x),Te(()=>{h.$off("loaded",k),h.$off("error",x)})),ge(()=>{le(()=>{var a;(a=l.value)!=null&&a.complete&&!e.lazyLoad&&m()})}),()=>{var a;return d("div",{class:N({round:e.round,block:e.block}),style:s.value},[V(),c(),(a=r.default)==null?void 0:a.call(r)])}}});const _e=W(rt),[it,j]=K("slider"),st={min:F(0),max:F(100),step:F(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:L,buttonSize:L,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var ct=Q({name:it,props:st,emits:["change","dragEnd","dragStart","update:modelValue"],setup(e,{emit:v,slots:r}){let b,o,l;const h=$(),s=[$(),$()],_=$(),m=pe(),f=M(()=>Number(e.max)-Number(e.min)),y=M(()=>{const t=e.vertical?"width":"height";return{background:e.inactiveColor,[t]:H(e.barHeight)}}),c=t=>e.range&&Array.isArray(t),V=()=>{const{modelValue:t,min:u}=e;return c(t)?`${(t[1]-t[0])*100/f.value}%`:`${(t-Number(u))*100/f.value}%`},k=()=>{const{modelValue:t,min:u}=e;return c(t)?`${(t[0]-Number(u))*100/f.value}%`:"0%"},x=M(()=>{const u={[e.vertical?"height":"width"]:V(),background:e.activeColor};_.value&&(u.transition="none");const w=()=>e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left";return u[w()]=k(),u}),a=t=>{const u=+e.min,w=+e.max,C=+e.step;t=Oe(t,u,w);const S=Math.round((t-u)/C)*C;return Ee(u,S)},i=()=>{const t=e.modelValue;c(t)?l=t.map(a):l=a(t)},B=t=>{var u,w;const C=(u=t[0])!=null?u:Number(e.min),S=(w=t[1])!=null?w:Number(e.max);return C>S?[S,C]:[C,S]},I=(t,u)=>{c(t)?t=B(t).map(a):t=a(t),ie(t,e.modelValue)||v("update:modelValue",t),u&&!ie(t,l)&&v("change",t)},z=t=>{if(t.stopPropagation(),e.disabled||e.readonly)return;i();const{min:u,reverse:w,vertical:C,modelValue:S}=e,p=se(h),Ce=()=>C?w?p.bottom-t.clientY:t.clientY-p.top:w?p.right-t.clientX:t.clientX-p.left,Pe=C?p.height:p.width,q=Number(u)+Ce()/Pe*f.value;if(c(S)){const[ne,oe]=S,$e=(ne+oe)/2;q<=$e?I([q,oe],!0):I([ne,q],!0)}else I(q,!0)},U=t=>{e.disabled||e.readonly||(m.start(t),o=e.modelValue,i(),_.value="start")},D=t=>{if(e.disabled||e.readonly)return;_.value==="start"&&v("dragStart",t),Ne(t,!0),m.move(t),_.value="dragging";const u=se(h),w=e.vertical?m.deltaY.value:m.deltaX.value,C=e.vertical?u.height:u.width;let S=w/C*f.value;if(e.reverse&&(S=-S),c(l)){const p=e.reverse?1-b:b;o[p]=l[p]+S}else o=l+S;I(o)},O=t=>{e.disabled||e.readonly||(_.value==="dragging"&&(I(o,!0),v("dragEnd",t)),_.value="")},P=t=>typeof t=="number"?j("button-wrapper",["left","right"][t]):j("button-wrapper",e.reverse?"left":"right"),ke=(t,u)=>{const w=_.value==="dragging";if(typeof u=="number"){const C=r[u===0?"left-button":"right-button"];let S;if(w&&Array.isArray(o)&&(S=o[0]>o[1]?b^1:b),C)return C({value:t,dragging:w,dragIndex:S})}return r.button?r.button({value:t,dragging:w}):d("div",{class:j("button"),style:Re(e.buttonSize)},null)},J=t=>{const u=typeof t=="number"?e.modelValue[t]:e.modelValue;return d("div",{ref:s[t??0],role:"slider",class:P(t),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":u,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:w=>{typeof t=="number"&&(b=t),U(w)},onTouchend:O,onTouchcancel:O,onClick:Me},[ke(u,t)])};return I(e.modelValue),Ae(()=>e.modelValue),s.forEach(t=>{Le("touchmove",D,{target:t})}),()=>d("div",{ref:h,style:y.value,class:j({vertical:e.vertical,disabled:e.disabled}),onClick:z},[d("div",{class:j("bar"),style:x.value},[e.range?[J(0),J(1)]:J()])])}});const xe=W(ct),[we,me]=K("tabbar"),ut={route:Boolean,fixed:Y,border:Y,zIndex:L,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:F(0),safeAreaInsetBottom:{type:Boolean,default:null}},Se=Symbol(we);var dt=Q({name:we,props:ut,emits:["change","update:modelValue"],setup(e,{emit:v,slots:r}){const b=$(),{linkChildren:o}=je(Se),l=Ue(b,me),h=()=>{var m;return(m=e.safeAreaInsetBottom)!=null?m:e.fixed},s=()=>{var m;const{fixed:f,zIndex:y,border:c}=e;return d("div",{ref:b,role:"tablist",style:De(y),class:[me({fixed:f}),{[qe]:c,"van-safe-area-bottom":h()}]},[(m=r.default)==null?void 0:m.call(r)])};return o({props:e,setActive:(m,f)=>{He(e.beforeChange,{args:[m],done(){v("update:modelValue",m),v("change",m),f()}})}}),()=>e.fixed&&e.placeholder?l(s):s()}});const mt=W(dt),[ft,ee]=K("tabbar-item"),vt=Fe({},Ye,{dot:Boolean,icon:String,name:L,badge:L,badgeProps:Object,iconPrefix:String});var gt=Q({name:ft,props:vt,emits:["click"],setup(e,{emit:v,slots:r}){const b=Xe(),o=ve().proxy,{parent:l,index:h}=Ke(Se);if(!l)return;const s=M(()=>{var f;const{route:y,modelValue:c}=l.props;if(y&&"$route"in o){const{$route:V}=o,{to:k}=e,x=Ze(k)?k:{path:k};return!!V.matched.find(a=>{const i="path"in x&&x.path===a.path,B="name"in x&&x.name===a.name;return i||B})}return((f=e.name)!=null?f:h.value)===c}),_=f=>{var y;s.value||l.setActive((y=e.name)!=null?y:h.value,b),v("click",f)},m=()=>{if(r.icon)return r.icon({active:s.value});if(e.icon)return d(Z,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var f;const{dot:y,badge:c}=e,{activeColor:V,inactiveColor:k}=l.props,x=s.value?V:k;return d("div",{role:"tab",class:ee({active:s.value}),style:{color:x},tabindex:0,"aria-selected":s.value,onClick:_},[d(Qe,te({dot:y,class:ee("icon"),content:c},e.badgeProps),{default:m}),d("div",{class:ee("text")},[(f=r.default)==null?void 0:f.call(r,{active:s.value})])])}}});const ht=W(gt),bt={__name:"index",setup(e){const v=$(0),r=$([{name:"video-o",path:"/video",label:"影片"},{name:"wap-home-o",path:"/main",label:"首頁"},{name:"list-switch",path:"/category",label:"分類"},{name:"user-circle-o",path:"/user",label:"我的"}]);return(b,o)=>{const l=ht,h=mt;return R(),ce(h,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=s=>v.value=s),route:"","active-color":"#f97316"},{default:X(()=>[(R(!0),G(he,null,We(r.value,s=>(R(),ce(l,{replace:"",key:s.name,to:s.path,icon:s.name},{default:X(()=>[Ge(E(s.label),1)]),_:2},1032,["to","icon"]))),128))]),_:1},8,["modelValue"])}}},yt=ae(bt,[["__scopeId","data-v-f1344f9a"]]),fe=e=>{const v=Math.floor(e/60).toString().padStart(2,"0"),r=Math.floor(e%60).toString().padStart(2,"0");return`${v}:${r}`},_t=e=>(Je("data-v-44d47907"),e=e(),et(),e),xt={class:"flex flex-col h-full items-center"},wt={class:"title"},St={class:"artist text-sm text-stone-500"},kt={class:"progressList w-full flex justify-between items-center"},Ct={class:"controller flex justify-between items-center"},Pt=_t(()=>g("div",{class:"w-full mt-4 -mb-10 px-4 pt-2 grow rounded-md bg-stone-600 relative overflow-hidden",relative:""},[g("div",{class:"absolute tracking-wide text-stone-800"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ratione aliquam magni aperiam ad! Recusandae quasi aliquid itaque voluptatibus impedit quisquam perferendis exercitationem magni magnam eius omnis, ab, non consectetur. ")],-1)),$t={__name:"MusicPopup",setup(e){const{isPlaying:v,play:r,pause:b,currentTrackSong:o,currentTime:l,duration:h,changePlayMode:s,changeCurrentTime:_,nextTrack:m,prevTrack:f,playMode:y,PlayModes:c}=be("musicPlayer"),V=M(()=>v.value),k=M(()=>y.value===c.RANDOM),x=M(()=>y.value===c.LOOP);return(a,i)=>{var U,D,O;const B=_e,I=xe,z=Z;return R(),G("div",xt,[d(B,{class:"mb-8 mx-4 max-w-md",radius:"6",fit:"cover",position:"center",src:(U=n(o))==null?void 0:U.cover},null,8,["src"]),g("div",wt,E((D=n(o))==null?void 0:D.title),1),g("div",St,E((O=n(o))==null?void 0:O.singer),1),g("div",kt,[g("div",null,E(n(fe)(n(l))),1),d(I,{class:"mx-4 my-8",max:n(h),modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=P=>ye(l)?l.value=P:null),"active-color":"#f97316","button-size":"16px",onChange:n(_)},null,8,["max","modelValue","onChange"]),g("div",null,E(n(fe)(n(h))),1)]),g("div",Ct,[T(g("span",{onClick:i[1]||(i[1]=P=>n(s)(n(c).RANDOM)),class:"material-symbols-outlined"}," shuffle ",512),[[A,!k.value]]),T(g("span",{onClick:i[2]||(i[2]=P=>n(s)(n(c).SEQUENCE)),class:"material-symbols-outlined text-orange-400"}," shuffle ",512),[[A,k.value]]),g("span",{onClick:i[3]||(i[3]=(...P)=>n(f)&&n(f)(...P)),class:"iconArrow material-symbols-outlined"}," skip_previous "),T(d(z,{onClick:n(r),name:"play-circle",size:"72"},null,8,["onClick"]),[[A,!V.value]]),T(d(z,{onClick:n(b),name:"pause-circle",size:"72"},null,8,["onClick"]),[[A,V.value]]),g("span",{onClick:i[4]||(i[4]=(...P)=>n(m)&&n(m)(...P)),class:"iconArrow material-symbols-outlined"}," skip_next "),g("div",{onClick:i[7]||(i[7]=(...P)=>a.changeIcon&&a.changeIcon(...P))},[T(g("span",{class:"material-symbols-outlined",onClick:i[5]||(i[5]=P=>n(s)(n(c).LOOP))}," repeat ",512),[[A,!x.value]]),T(g("span",{onClick:i[6]||(i[6]=P=>n(s)(n(c).SEQUENCE)),class:"material-symbols-outlined text-orange-400"}," repeat_one ",512),[[A,x.value]])])]),Pt])}}},Vt=ae($t,[["__scopeId","data-v-44d47907"]]),Bt={class:"relative"},It={class:"h-16"},Tt={class:"flex h-full justify-between items-center"},zt={class:"flex"},pt={class:"songInfo flex flex-col"},At={class:"title"},Lt={class:"artist text-sm text-stone-500"},Mt={__name:"MusicPlayer",props:{isShow:{type:Boolean,default:!1}},setup(e){const{isPlaying:v,play:r,pause:b,currentTrackSong:o,duration:l,currentTime:h,changeCurrentTime:s}=be("musicPlayer"),_=M(()=>v.value),m=$(!1),f=y=>{m.value=y};return(y,c)=>{var i,B,I;const V=xe,k=_e,x=Z,a=tt;return T((R(),G("div",Bt,[g("div",{onClick:c[1]||(c[1]=z=>f(!0)),class:"fixed bottom-12 bg-slate-200"},[d(V,{modelValue:n(h),"onUpdate:modelValue":c[0]||(c[0]=z=>ye(h)?h.value=z:null),max:n(l),"active-color":"#f97316","button-size":"0px",readonly:!0,onChange:n(s)},null,8,["modelValue","max","onChange"]),g("div",It,[g("div",Tt,[g("div",zt,[d(k,{class:"mx-4",width:"3rem",height:"3rem",radius:"6",fit:"cover",position:"center",src:(i=n(o))==null?void 0:i.cover},null,8,["src"]),g("div",pt,[g("div",At,E((B=n(o))==null?void 0:B.title),1),g("div",Lt,E((I=n(o))==null?void 0:I.singer),1)])]),T(d(x,{onClick:ue(n(r),["stop"]),class:"mx-4",name:"play-circle-o",size:"40"},null,8,["onClick"]),[[A,!_.value]]),T(d(x,{onClick:ue(n(b),["stop"]),class:"mx-4",name:"pause-circle-o",size:"40"},null,8,["onClick"]),[[A,_.value]])])])]),d(a,{show:m.value,"onUpdate:show":c[2]||(c[2]=z=>m.value=z),position:"bottom",round:"",closeable:"","close-icon":"close",style:{padding:"64px"}},{default:X(()=>[d(Vt)]),_:1},8,["show"])],512)),[[A,e.isShow]])}}},Et=ae(Mt,[["__scopeId","data-v-c14fa6a3"]]),Nt={id:"footer"},Ot={__name:"index",props:{leftArrow:{type:Boolean,default:!1},isSearch:{type:Boolean,default:!1},leftText:{type:String,default:""},clickable:{type:Boolean,default:!0},forTitle:{type:String,default:""}},setup(e){const v=$(0);return $(!1),ge(()=>{const r=window.innerHeight-50;v.value=r}),(r,b)=>(R(),G(he,null,[d(at,{"left-arrow":e.leftArrow,"left-text":e.leftText,"is-search":e.isSearch,clickable:e.clickable,"for-title":e.forTitle},{right:X(()=>[de(r.$slots,"headerRight")]),_:3},8,["left-arrow","left-text","is-search","clickable","for-title"]),g("main",{id:"scroll-wrapper",class:"px-6 pt-12 flex flex-col overflow-x-hidden overflow-y-scroll",style:nt({height:`${v.value}px`})},[de(r.$slots,"default")],4),g("footer",Nt,[d(Et,{"is-show":!0}),d(yt)])],64))}};export{_e as I,Ot as _};
