import{_ as M,o as N,i as r,S as L,y as j,E as V,T as z,z as W,B as q,C as G,D as H,r as t,a as n,c as s,b as c,d as e,l,e as g,s as R,u as d,m as J,G as m,H as T,P as h,x as a,I as K,p as O,g as Q}from"./index-3fd5bb5b.js";const U={setup(){async function i(){try{m.log("Refreshing token.."),await T.refreshAccessToken()}catch(o){h.error(o)}}async function v(){try{await K.StartPlayer()}catch(o){h.error(o)}}async function p(){if(localStorage.getItem("access_token"))a.accessToken=localStorage.getItem("access_token"),a.refreshToken=localStorage.getItem("refresh_token"),m.log("Access Token",a.accessToken,a.refreshToken);else try{m.log(a.accessToken),await T.requestAuthCode()}catch(o){m.error(o)}v()}return N(()=>{p(),setInterval(i,6e5)}),{tracks:r(()=>a.tracks),activeTrack:r(()=>a.activeTrack),activeTimeblock:r(()=>a.activeTimeBlock),activeEvent:r(()=>a.activeEvent),gettingActiveTimeblock:r(()=>a.gettingActiveTimeblock)}},components:{SongSearchBar:L,Player:j,EventDropdown:V,TimeBlockList:z,ActiveTimeblockMusic:W,ActiveTimeblockSilent:q,EventSelect:G,CreateTimeblock:H}},X=i=>(O("data-v-68c9e5e7"),i=i(),Q(),i),Y={class:"full-app-view p-0"},Z={class:"row app-wrapper"},$={class:"col-12 col-md-3 left-panel p-0"},ee={class:"row"},te={class:"col-12 d-flex justify-content-center align-items-center"},oe=X(()=>c("div",{class:"add-wrapper"},[c("i",{class:"mdi mdi-plus add-button"})],-1)),ce={class:"active-song d-flex align-items-center justify-content-center invisible-scrollbar",type:"button","data-toggle":"modal","data-target":"#activesongmodal"},ne={class:"col-12 col-md-7 center-panel p-0"},se={class:"main-content row justify-content-center mx-1 background-img mt-3 mb-2"},ae={key:0,class:"row justify-content-center"},ie={key:1},re={key:0},le={key:1},_e={key:2},de={key:0},me={key:1},ve={class:"col-12 col-md-2 right-panel text-center"};function pe(i,v,p,o,ke,ge){const y=t("EventDropdown"),u=t("CreateEventForm"),_=t("ModalWrapper"),S=t("TimeBlockList"),b=t("ActiveSong"),f=t("SongSearchBar"),A=t("SearchedTrackCard"),E=t("ActiveTimeblockSilent"),w=t("ActiveTimeblockMusic"),B=t("EventSelect"),P=t("CreateTimeblock"),x=t("Player"),C=t("Profile"),I=t("TimeBlockTrackDetails"),F=t("EditTimerForm"),D=t("NotesForm");return n(),s(g,null,[c("section",Y,[c("section",Z,[c("div",$,[c("section",ee,[c("div",te,[e(y),e(_,{id:"create-event"},{button:l(()=>[oe]),body:l(()=>[e(u)]),_:1})])]),e(S),c("div",ce,[e(b)])]),c("div",ne,[e(f),c("div",se,[o.tracks[0]?(n(),s("div",ae,[(n(!0),s(g,null,R(o.tracks,k=>(n(),s("div",{key:k.id,class:"col-12 col-md-10 elevation-2 m-2 searched-song-card ms-2"},[e(A,{track:k},null,8,["track"])]))),128))])):o.activeTimeblock?(n(),s("div",ie,[o.activeTimeblock.isSilent?(n(),s("div",re,[e(E)])):d("",!0),o.activeTimeblock.isSilent?d("",!0):(n(),s("div",le,[e(w)]))])):(n(),s("div",_e,[o.activeEvent?d("",!0):(n(),s("div",de,[e(B)])),!o.gettingActiveTimeblock&&o.activeEvent?(n(),s("div",me,[e(P)])):d("",!0)]))]),e(x)]),c("div",ve,[e(C),J("x ")])])]),e(_,{id:"my-song"},{body:l(()=>[e(I)]),_:1}),e(_,{id:"edit-timer"},{body:l(()=>[e(F)]),_:1}),e(_,{id:"save-notes"},{body:l(()=>[e(D)]),_:1})],64)}const he=M(U,[["render",pe],["__scopeId","data-v-68c9e5e7"]]);export{he as default};