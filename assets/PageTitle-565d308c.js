import{u as v,c as $,_ as d}from"./index-c37d0faa.js";import{d as _,f as n,i as u,q as y,v as s,k as c,l as a,t as r,m as i}from"./vue-62e5e94d.js";const g=_({name:"CopyButton",props:{textToCopy:{type:String,required:!0},label:{type:String,default:""}},setup(e){const{notify:o}=$(),t=v().state.helpText.copyButton;return{copyTokenToClipboard:l=>{l(e.textToCopy)||o({appearance:"danger",message:t.copyFailed.start+e.textToCopy+t.copyFailed.end}),o({message:t.copySucceeded.start+e.textToCopy+t.copySucceeded.end})},helpText:t}}});const x={class:"my-4"},k={class:"truncate"};function B(e,o,t,p,l,f){const T=n("KIcon"),m=n("KButton"),C=n("KClipboardProvider"),b=n("KTooltip");return u(),y("div",x,[s(b,{label:e.helpText.clickToCopy},{default:c(()=>[s(C,null,{default:c(({copyToClipboard:h})=>[s(m,{"is-rounded":!1,"aria-label":e.helpText.ariaLabel,class:"clipboard-button w-100 justify-content-between","data-testid":"copy-button",appearance:"secondary",onClick:j=>e.copyTokenToClipboard(h)},{default:c(()=>[a("span",k,r(e.label)+" "+r(e.textToCopy),1),s(T,{title:e.helpText.copyToClipboard,icon:"copy",color:"var(--steel-300)"},null,8,["title"])]),_:2},1032,["aria-label","onClick"])]),_:1})]),_:1},8,["label"])])}const N=d(g,[["render",B]]),K=_({name:"PageTitle",props:{title:{type:String,default:""}}});const S={class:"flex flex-col sm:flex-row justify-between sm:items-center"},P={class:"flex-1"},w={class:"m-0 type-xl color-text_colors-headings"};function I(e,o,t,p,l,f){return u(),y("header",S,[a("div",P,[i(e.$slots,"default",{},()=>[a("h1",w,r(e.title),1)],!0)]),a("div",null,[i(e.$slots,"right",{},void 0,!0)])])}const V=d(K,[["render",I],["__scopeId","data-v-50c9d603"]]);export{N as C,V as P};
