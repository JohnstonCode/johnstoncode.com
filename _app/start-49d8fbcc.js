var nt=Object.defineProperty,at=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var X=(r,t,e)=>t in r?nt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,E=(r,t)=>{for(var e in t||(t={}))W.call(t,e)&&X(r,e,t[e]);if(V)for(var e of V(t))Y.call(t,e)&&X(r,e,t[e]);return r},F=(r,t)=>at(r,ot(t));var H=(r,t)=>{var e={};for(var s in r)W.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&V)for(var s of V(r))t.indexOf(s)<0&&Y.call(r,s)&&(e[s]=r[s]);return e};import{S as lt,i as ut,s as ct,e as ft,c as ht,a as dt,d as v,b as C,f as k,t as _t,g as pt,h as mt,j as L,k as gt,l as b,m as D,n as wt,o as q,p as B,q as K,r as I,u as y,v as U,w as N,x as g,y as bt,z as yt,A as vt,B as z,C as J}from"./chunks/vendor-2965b66e.js";import{_ as A}from"./chunks/preload-helper-ec9aa979.js";function Q(r){let t,e,s;const i=[r[2]||{}];var a=r[0][1];function n(o){let l={$$slots:{default:[Et]},$$scope:{ctx:o}};for(let u=0;u<i.length;u+=1)l=z(l,i[u]);return{props:l}}return a&&(t=new a(n(r))),{c(){t&&L(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&q(t,o,l),k(o,e,l),s=!0},p(o,l){const u=l&4?B(i,[K(o[2]||{})]):{};if(l&521&&(u.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){I();const c=t;y(c.$$.fragment,1,0,()=>{U(c,1)}),N()}a?(t=new a(n(o)),L(t.$$.fragment),g(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&g(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function Z(r){let t,e,s;const i=[r[3]||{}];var a=r[0][2];function n(o){let l={};for(let u=0;u<i.length;u+=1)l=z(l,i[u]);return{props:l}}return a&&(t=new a(n())),{c(){t&&L(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&q(t,o,l),k(o,e,l),s=!0},p(o,l){const u=l&8?B(i,[K(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){I();const c=t;y(c.$$.fragment,1,0,()=>{U(c,1)}),N()}a?(t=new a(n()),L(t.$$.fragment),g(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&g(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function Et(r){let t,e,s=r[0][2]&&Z(r);return{c(){s&&s.c(),t=b()},l(i){s&&s.l(i),t=b()},m(i,a){s&&s.m(i,a),k(i,t,a),e=!0},p(i,a){i[0][2]?s?(s.p(i,a),a&1&&g(s,1)):(s=Z(i),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(I(),y(s,1,1,()=>{s=null}),N())},i(i){e||(g(s),e=!0)},o(i){y(s),e=!1},d(i){s&&s.d(i),i&&v(t)}}}function kt(r){let t,e,s=r[0][1]&&Q(r);return{c(){s&&s.c(),t=b()},l(i){s&&s.l(i),t=b()},m(i,a){s&&s.m(i,a),k(i,t,a),e=!0},p(i,a){i[0][1]?s?(s.p(i,a),a&1&&g(s,1)):(s=Q(i),s.c(),g(s,1),s.m(t.parentNode,t)):s&&(I(),y(s,1,1,()=>{s=null}),N())},i(i){e||(g(s),e=!0)},o(i){y(s),e=!1},d(i){s&&s.d(i),i&&v(t)}}}function x(r){let t,e=r[5]&&tt(r);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var i=dt(t);e&&e.l(i),i.forEach(v),this.h()},h(){C(t,"id","svelte-announcer"),C(t,"aria-live","assertive"),C(t,"aria-atomic","true"),C(t,"class","svelte-1j55zn5")},m(s,i){k(s,t,i),e&&e.m(t,null)},p(s,i){s[5]?e?e.p(s,i):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&v(t),e&&e.d()}}}function tt(r){let t;return{c(){t=_t(r[6])},l(e){t=pt(e,r[6])},m(e,s){k(e,t,s)},p(e,s){s&64&&mt(t,e[6])},d(e){e&&v(t)}}}function Rt(r){let t,e,s,i;const a=[r[1]||{}];var n=r[0][0];function o(u){let c={$$slots:{default:[kt]},$$scope:{ctx:u}};for(let f=0;f<a.length;f+=1)c=z(c,a[f]);return{props:c}}n&&(t=new n(o(r)));let l=r[4]&&x(r);return{c(){t&&L(t.$$.fragment),e=gt(),l&&l.c(),s=b()},l(u){t&&D(t.$$.fragment,u),e=wt(u),l&&l.l(u),s=b()},m(u,c){t&&q(t,u,c),k(u,e,c),l&&l.m(u,c),k(u,s,c),i=!0},p(u,[c]){const f=c&2?B(a,[K(u[1]||{})]):{};if(c&525&&(f.$$scope={dirty:c,ctx:u}),n!==(n=u[0][0])){if(t){I();const h=t;y(h.$$.fragment,1,0,()=>{U(h,1)}),N()}n?(t=new n(o(u)),L(t.$$.fragment),g(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else n&&t.$set(f);u[4]?l?l.p(u,c):(l=x(u),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(u){i||(t&&g(t.$$.fragment,u),i=!0)},o(u){t&&y(t.$$.fragment,u),i=!1},d(u){t&&U(t,u),u&&v(e),l&&l.d(u),u&&v(s)}}}function $t(r,t,e){let{stores:s}=t,{page:i}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),yt(s.page.notify);let u=!1,c=!1,f=null;return vt(()=>{const h=s.page.subscribe(()=>{u&&(e(5,c=!0),e(6,f=document.title||"untitled page"))});return e(4,u=!0),h}),r.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,i=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,n=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[a,n,o,l,u,c,f,s,i]}class St extends lt{constructor(t){super();ut(this,t,$t,Rt,ct,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const p=[()=>A(()=>import("./pages/__layout.svelte-8dc34175.js"),["pages/__layout.svelte-8dc34175.js","chunks/vendor-2965b66e.js"]),()=>A(()=>import("./error.svelte-3ad7c9b9.js"),["error.svelte-3ad7c9b9.js","chunks/vendor-2965b66e.js"]),()=>A(()=>import("./pages/index.svelte-03d2be6f.js"),["pages/index.svelte-03d2be6f.js","chunks/vendor-2965b66e.js"]),()=>A(()=>import("./pages/about.svelte-df948ce0.js"),["pages/about.svelte-df948ce0.js","chunks/vendor-2965b66e.js"]),()=>A(()=>import("./pages/blog/index.svelte-2a8ecdcd.js"),["pages/blog/index.svelte-2a8ecdcd.js","chunks/preload-helper-ec9aa979.js","chunks/vendor-2965b66e.js"]),()=>A(()=>import("./pages/blog/hello-world.md-4892e4ab.js"),["pages/blog/hello-world.md-4892e4ab.js","chunks/vendor-2965b66e.js"])],Lt=[[/^\/$/,[p[0],p[2]],[p[1]]],[/^\/about\/?$/,[p[0],p[3]],[p[1]]],[/^\/blog\/?$/,[p[0],p[4]],[p[1]]],[/^\/blog\/hello-world\/?$/,[p[0],p[5]],[p[1]]]],qt=[p[0](),p[1]()];function Ut(r){let t=r.baseURI;if(!t){const e=r.getElementsByTagName("base");t=e.length?e[0].href:r.URL}return t}let et="";function At(r){et=r.base,r.assets}function M(){return{x:pageXOffset,y:pageYOffset}}function st(r){for(;r&&r.nodeName.toUpperCase()!=="A";)r=r.parentNode;return r}function rt(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}class jt{constructor({base:t,routes:e,trailing_slash:s,renderer:i}){this.base=t,this.routes=e,this.trailing_slash=s,this.renderer=i,i.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=F(E({},history.state||{}),{"sveltekit:scroll":M()});history.replaceState(a,document.title,window.location.href)},50)});const e=a=>{const n=st(a.target);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(n))};let s;const i=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",i),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=st(a.target);if(!n||!n.href)return;const o=rt(n);if(o.toString()===location.href){location.hash||a.preventDefault();return}const l=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||l&&l.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const u=n.hasAttribute("sveltekit:noscroll");history.pushState({},"",o.href),this._navigate(o,u?M():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),i=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:i,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:i=!1,state:a={}}={},n){const o=new URL(t,Ut(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?M():null,i,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,i,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}this.renderer.notify({path:n.path,query:n.query}),await this.renderer.update(n,i,!1,{hash:a,scroll:e,keepfocus:s})}}function it(r){return r instanceof Error||r&&r.name&&r.message?r:new Error(JSON.stringify(r))}function Tt(r){let t=5381,e=r.length;if(typeof r=="string")for(;e;)t=t*33^r.charCodeAt(--e);else for(;e;)t=t*33^r[--e];return(t>>>0).toString(36)}function It(r){const t=r.status&&r.status>=400&&r.status<=599&&!r.redirect;if(r.error||t){const e=r.status;if(!r.error&&t)return{status:e||500,error:new Error};const s=typeof r.error=="string"?new Error(r.error):r.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(r.redirect){if(!r.status||Math.floor(r.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof r.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(r.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return r}function Nt(r){const t=J(r);let e=!0;function s(){e=!0,t.update(n=>n)}function i(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:i,subscribe:a}}function Ot(r,t){const e=typeof r=="string"?r:r.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Tt(t.body)}"]`);const i=document.querySelector(s);if(i&&i.textContent){const a=JSON.parse(i.textContent),{body:n}=a,o=H(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(r,t)}class Pt{constructor({Root:t,fallback:e,target:s,session:i,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Nt({}),navigating:J(null),session:J(i)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:i}){const a=[];let n={},o,l;try{for(let u=0;u<s.length;u+=1){const c=u===s.length-1,f=await this._load_node({module:await s[u],page:i,stuff:n,status:c?t:void 0,error:c?e:void 0});if(a.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:i.path,query:i.query}}else f.loaded.stuff&&(n=E(E({},n),f.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:i,branch:a})}catch(u){if(e)throw u;o=await this._load_error({status:500,error:it(u),path:i.path,query:i.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s,i){const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(n.reload?location.reload():this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),i){const{hash:l,scroll:u,keepfocus:c}=i;c||document.body.focus();const f=l&&document.getElementById(l.slice(1));u?scrollTo(u.x,u.y):f?f.scrollIntoView():scrollTo(0,0)}if(await 0,dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:E({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const i=t.routes[s];if(i.length===1)return{reload:!0,props:{},state:this.current};let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===i[0].toString())o.length!==1&&o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:i,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),i=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:i&&i.loaded?i.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const u=s[l].loaded;a.props[`props_${l}`]=u?await u.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let u=!1;const c=()=>{this.cache.get(l)===a&&this.cache.delete(l),h(),clearTimeout(f)},f=setTimeout(c,o*1e3),h=this.stores.session.subscribe(()=>{u&&c()});u=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:i,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const u in i.params)Object.defineProperty(o,u,{get(){return n.uses.params.add(u),i.params[u]},enumerable:!0});const l=this.$session;if(s.load){const{started:u}=this,c={page:{host:i.host,params:o,get path(){return n.uses.path=!0,i.path},get query(){return n.uses.query=!0,i.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,E({},a)},fetch(h,$){const R=typeof h=="string"?h:h.url,{href:j}=new URL(R,new URL(i.path,document.baseURI));return n.uses.dependencies.push(j),u?fetch(h,$):Ot(h,$)}};e&&(c.status=t,c.error=e);const f=await s.load.call(null,c);if(!f)return;n.loaded=It(f),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:i}},a){const n=`${s}?${i}`;if(!a){const d=this.cache.get(n);if(d)return d}const[o,l,u,c]=t,f=c?c(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(f).filter(d=>this.current.page.params[d]!==f[d]),query:i.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},$={host:this.host,path:e,query:i,params:f};let R=[],j={},G=!1,O=200,T;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let _;try{if(!l[d])continue;const w=await l[d](),m=this.current.branch[d];if(!m||w!==m.module||h.path&&m.uses.path||h.params.some(S=>m.uses.params.has(S))||h.query&&m.uses.query||h.session&&m.uses.session||m.uses.dependencies.some(S=>this.invalid.has(S))||G&&m.uses.stuff){_=await this._load_node({module:w,page:$,stuff:j});const S=d===l.length-1;if(_&&_.loaded){if(_.loaded.error&&(O=_.loaded.status,T=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.stuff&&(G=!0)}else if(S&&w.load)return}else _=m}catch(w){O=500,T=it(w)}if(T){for(;d--;)if(u[d]){let w,m,P=d;for(;!(m=R[P]);)P-=1;try{if(w=await this._load_node({status:O,error:T,module:await u[d](),page:$,stuff:m.stuff}),w&&w.loaded&&w.loaded.error)continue;R=R.slice(0,P+1).concat(w);break t}catch(S){continue}}return await this._load_error({status:O,error:T,path:e,query:i})}else _&&_.loaded&&_.loaded.stuff&&(j=E(E({},j),_.loaded.stuff)),R.push(_)}return await this._get_navigation_result_from_branch({page:$,branch:R})}async _load_error({status:t,error:e,path:s,query:i}){const a={host:this.host,path:s,query:i,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Bt({paths:r,target:t,session:e,host:s,route:i,spa:a,trailing_slash:n,hydrate:o}){const l=new Pt({Root:St,fallback:qt,target:t,session:e,host:s}),u=i?new jt({base:r.base,routes:Lt,trailing_slash:n,renderer:l}):null;At(r),o&&await l.start(o),u&&(a&&u.goto(location.href,{replaceState:!0},[]),u.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Bt as start};
