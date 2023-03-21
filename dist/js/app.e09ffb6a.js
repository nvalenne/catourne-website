(function(){"use strict";var e={478:function(e,t,n){var r=n(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],a={name:"App",data:()=>({})},s=a,l=n(1),u=(0,l.Z)(s,o,i,!1,null,null,null),c=u.exports,d=n(345),m=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"main-container"},[t("div",{staticClass:"container-options"},[t("div",[t("div",{staticClass:"container-select"},[t("label",{attrs:{for:"models"}},[e._v("Modèles")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.model_selected,expression:"model_selected"}],attrs:{id:"models"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.model_selected=t.target.multiple?n:n[0]}}},[e._m(0)])]),e.model_selected?t("div",{staticClass:"container-select"},[t("label",{attrs:{for:"musics"}},[e._v("Musiques")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.music_selected,expression:"music_selected"}],attrs:{id:"musics"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.music_selected=t.target.multiple?n:n[0]},function(t){return e.changeMusic(e.music_selected)}]}},[e._m(1)])]):e._e()]),e.model_selected?t("div",[t("label",{staticClass:"partyText",attrs:{for:"check_party_mode"}},[e._v("PARTY MODE")]),t("input",{attrs:{type:"checkbox",id:"check_party_mode"},on:{click:function(t){return e.party_mode()}}})]):e._e()]),e.model_selected?t("Renderer3D",{attrs:{modele:e.model_selected}}):e._e()],1),e._m(2),t("div",{staticStyle:{position:"fixed",bottom:"0","margin-bottom":"10px"}},[e._v("by Nathan V.")])])},p=[function(){var e=this,t=e._self._c;return t("optgroup",{attrs:{label:"Modèles"}},[t("option",{attrs:{value:"capybara"}},[e._v("Capybara")]),t("option",{attrs:{value:"maxwell"}},[e._v("Maxwell")]),t("option",{attrs:{value:"floppa_cube"}},[e._v("Floppa")]),t("option",{attrs:{value:"el_gato"}},[e._v("El Gato")]),t("option",{attrs:{value:"gangnam_style"}},[e._v("Gangnam Style")]),t("option",{attrs:{value:"steve"}},[e._v("Steve")]),t("option",{attrs:{value:"shrek"}},[e._v("Shrek")])])},function(){var e=this,t=e._self._c;return t("optgroup",{attrs:{label:"Musiques"}},[t("option",{attrs:{value:"around_the_world"}},[e._v("Around The World")]),e._v(" "),t("option",{attrs:{value:"ok_i_pull_up"}},[e._v("Ok I Pull Up")]),t("option",{attrs:{value:"you_spin_me_right_round"}},[e._v("You spin me right round")]),t("option",{attrs:{value:"maxwell_theme"}},[e._v("Maxwell theme")])])},function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"https://marrantmaispastrop.fun/feur",target:"_blank"}},[e._v(" quoi ")])])}],f=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"container"}}),t("div",[e._v(e._s(e.modele))])])},v=[],h=n(477),_=n(836);let g=new h.xsS,b=null;var y={name:"Renderer3D",data(){return{camera:null,renderer:null,mesh:null}},methods:{init:function(){let e=document.getElementById("container");while(g.children.length>0)g.remove(g.children[0]);0!==e.childNodes.length&&e.replaceChildren(),this.camera=new h.cPb(90,window.innerWidth/window.innerHeight),this.camera.position.set(0,1,1),g.add(new h.Mig(16777215,1));const t=new _.E;t.load(`models/${this.modele}/scene.gltf`,(function(e){let t=e.scene.children[0],n=(new h.ZzF).setFromObject(t),r=n.getSize(new h.Pa4).length(),o=1/r;t.userData.scale=o,t.scale.set(o,o,o),t.position.set(0,.6,0),g.add(t)}),void 0,(function(e){console.error(e)})),this.renderer=new h.CP7({alpha:!0}),this.renderer.setSize(window.innerWidth/1.3,window.innerHeight/1.3),e.appendChild(this.renderer.domElement),g.rotation.y=0},animate:function(){b=requestAnimationFrame(this.animate),g.rotation.y+=.03,this.renderer.render(g,this.camera)},start(){null!=b&&cancelAnimationFrame(b),this.init(),this.animate()}},mounted(){this.start()},updated(){this.start()},props:{modele:String}},w=y,k=(0,l.Z)(w,f,v,!1,null,"1f42151f",null),x=k.exports;let M;var O={name:"HomeView",components:{Renderer3D:x},data(){return{music_selected:"",model_selected:"",music_playing:null}},methods:{stopMusic(){this.music_playing.pause()},changeMusic(e){this.music_playing&&this.stopMusic(),this.music_playing=new Audio(`./musics/${e}.mp3`),this.music_playing.play(),this.music_playing.loop=!0},party_mode(){document.getElementById("check_party_mode").checked?(document.getElementById("musics").disabled=!0,M=setInterval((()=>{document.documentElement.style.background=`rgb(${255*Math.random()},${255*Math.random()},${255*Math.random()})`}),400),this.changeMusic("caramelldansen")):(clearInterval(M),document.getElementById("musics").disabled=!1,this.music_selected?this.changeMusic(this.music_selected):this.stopMusic(),document.documentElement.style.background="black")}}},E=O,P=(0,l.Z)(E,m,p,!1,null,"483e9f4e",null),C=P.exports;r.ZP.use(d.ZP);const S=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,78))}],j=new d.ZP({routes:S});var A=j;r.ZP.config.productionTip=!1,new r.ZP({router:A,render:e=>e(c)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.75efa7d7.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="rotating-models-website:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkrotating_models_website"]=self["webpackChunkrotating_models_website"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(478)}));r=n.O(r)})();
//# sourceMappingURL=app.e09ffb6a.js.map