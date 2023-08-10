import{u as m,e as f,s as R,a as k,_ as v}from"./index-c37d0faa.js";import{d as A,af as C,c as w,ag as x,f as o,i as S,j as q,k as i,l as u,n as g,t as _,v as c,u as y}from"./vue-62e5e94d.js";import{A as b}from"./AuthCard-9da09d94.js";import"./kongponents-0cdf713a.js";const B=A({name:"Registration",components:{AuthCard:b},setup(){const e=m().state.helpText,s=C(),p=f(),{authClientConfig:l}=R(p),r=w(()=>l.value.basicAuthEnabled),{portalApiV2:d}=k();function n(){s.push({path:"/login",query:{registered:!0}})}function a(t){return t.full_name=t.fullName,delete t.fullName,t}return x(()=>{r.value||s.push({path:"/login"})}),{registerEndpoint:d.value.getApiLink("/api/v2/developer"),onRegisterSuccess:n,isBasicAuthEnabled:r,wrapRegisterRequest:a,helpText:e}}});const N={id:"kong-auth-register-wrapper"},T={id:"login-encouragement-message",class:"mt-6 text-center"},E={class:"color-text_colors-primary"};function V(e,s,p,l,r,d){const n=o("kong-auth-register"),a=o("KIcon"),t=o("router-link"),h=o("AuthCard");return e.isBasicAuthEnabled?(S(),q(h,{key:0},{"below-card":i(()=>[u("div",T,[u("p",E,[g(_(e.helpText.registration.alreadyCreated)+" ",1),c(t,{to:{name:"login"}},{default:i(()=>[g(_(e.helpText.registration.login)+" ",1),c(a,{color:"var(--text_colors-link)",icon:"forward"})]),_:1})])])]),default:i(()=>[u("div",N,[c(n,{"wrapper-id":"kong-auth-register-wrapper","register-request-endpoint":e.registerEndpoint,"wrap-request":e.wrapRegisterRequest,"register-button-text":"Create Account",onRegisterSuccess:e.onRegisterSuccess},null,8,["register-request-endpoint","wrap-request","onRegisterSuccess"])])]),_:1})):y("",!0)}const L=v(B,[["render",V]]);export{L as default};
