import{_ as m,w as f,i as b,r as s,a as c,c as n,b as e,d as o,l as g,e as _,s as k,x as a,k as w,P as y,p as C,g as E}from"./index-33cc2847.js";const x={setup(){f(()=>{a.account,t()});async function t(){try{if(!a.account.id)return;await w.getMyEvents()}catch(r){y.error(r)}}return{events:b(()=>a.events)}}},i=t=>(C("data-v-4dbb55a1"),t=t(),E(),t),S={class:"row"},P=i(()=>e("div",{class:"col-11 text-center"},[e("h1",null,"Test Page")],-1)),T={class:"col-1 test-button"},I=i(()=>e("i",{class:"mdi mdi-home home-button"},null,-1)),B={class:"container"},F={class:"row justify-content-center"},$={class:"col-6"},M={class:"row m-5"},N={class:"col-7"},V={class:"mb-5 searched-song-card rounded p-4"};function j(t,r,A,l,H,L){const p=s("router-link"),u=s("CreateEventForm"),v=s("SearchedTrackCard"),h=s("EventCard");return c(),n(_,null,[e("header",null,[e("div",S,[P,e("div",T,[o(p,{to:{name:"Home"}},{default:g(()=>[I]),_:1})])])]),e("section",B,[e("div",F,[e("div",$,[o(u)])])]),e("div",M,[e("div",N,[e("section",V,[o(v)])])]),e("section",null,[(c(!0),n(_,null,k(l.events,d=>(c(),n("div",{key:d.id,class:"col-12 col-md-10 elevation-2 m-2 p-2 card clickable"},[o(h,{event:d},null,8,["event"])]))),128))])],64)}const z=m(x,[["render",j],["__scopeId","data-v-4dbb55a1"]]);export{z as default};
