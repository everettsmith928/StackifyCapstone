import{_ as d,o as u,i as s,H as f,P as g,r as a,a as m,c as y,b as t,m as i,d as l,l as h,t as x,e as S,x as r,p as v,g as w}from"./index-80bc12a2.js";const k={setup(){return u(()=>localStorage.clear()),{user:s(()=>r.user),account:s(()=>r.account),token:s(()=>localStorage.getItem("access_token")),async spotifyConnect(){try{await f.spotifyConnect()}catch(o){g.error("connection to spotify failed",o)}}}}},e=o=>(v("data-v-ae772f67"),o=o(),w(),o),C=e(()=>t("section",{class:"row login-panel d-flex justify-content-center"},null,-1)),L={class:"row welcome"},b={class:"col-12 text-center welcome-text"},I={class:"login-title"},P=e(()=>t("span",{class:"stackify-accent"},"Stackify",-1)),B={class:"row my-3 d-flex justify-content-center"},N={class:"col-1"},V=e(()=>t("div",{class:"col-12 text-center"},[t("h3",{class:"login-text"},"Let's get your Spotify Premium Account Connected"),t("img",{class:"img-fluid spotify-logo p-5 rounded",src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png",alt:"spotify-logo"})],-1)),$={class:"col-12 text-center p-3"},j=e(()=>t("b",null,"Connect Spotify",-1)),A=[j];function H(o,n,M,c,D,E){const _=a("router-link"),p=a("Login");return m(),y(S,null,[C,t("section",L,[t("div",b,[t("h2",I,[t("b",null,[i("Welcome to "),l(_,{to:{name:"Home"}},{default:h(()=>[P]),_:1}),i(" "+x(c.account.name),1)])]),t("section",B,[t("div",N,[l(p)])])]),V,t("div",$,[t("button",{onClick:n[0]||(n[0]=F=>c.spotifyConnect()),class:"btn connect-button"},A)])])],64)}const K=d(k,[["render",H],["__scopeId","data-v-ae772f67"]]);export{K as default};
