import{_ as S}from"../chunks/preload-helper-ec9aa979.js";import{S as V,i as $,s as g,e as j,t as x,k,c as E,a as w,g as D,d as f,n as P,b,f as d,H as y,h as q,l as A,I as C,J as L}from"../chunks/vendor-f3548c02.js";function I(o,t,s){const a=o.slice();return a[1]=t[s].path,a[2]=t[s].title,a}function J(o){let t,s,a=o[2]+"",r,p,u;return{c(){t=j("p"),s=j("a"),r=x(a),u=k(),this.h()},l(n){t=E(n,"P",{});var i=w(t);s=E(i,"A",{href:!0,class:!0});var _=w(s);r=D(_,a),_.forEach(f),u=P(i),i.forEach(f),this.h()},h(){b(s,"href",p=`${o[1].replace(".md","")}`),b(s,"class","svelte-r6b1hf")},m(n,i){d(n,t,i),y(t,s),y(s,r),y(t,u)},p(n,i){i&1&&a!==(a=n[2]+"")&&q(r,a),i&1&&p!==(p=`${n[1].replace(".md","")}`)&&b(s,"href",p)},d(n){n&&f(t)}}}function N(o){let t,s,a,r,p,u,n,i,_,m=o[0],h=[];for(let e=0;e<m.length;e+=1)h[e]=J(I(o,m,e));return{c(){t=j("h1"),s=x("Chris Johnston"),a=k(),r=j("a"),p=x("chris@johnstoncode.com"),u=k(),n=j("div"),i=k();for(let e=0;e<h.length;e+=1)h[e].c();_=A(),this.h()},l(e){t=E(e,"H1",{});var c=w(t);s=D(c,"Chris Johnston"),c.forEach(f),a=P(e),r=E(e,"A",{href:!0,class:!0});var l=w(r);p=D(l,"chris@johnstoncode.com"),l.forEach(f),u=P(e),n=E(e,"DIV",{class:!0}),w(n).forEach(f),i=P(e);for(let v=0;v<h.length;v+=1)h[v].l(e);_=A(),this.h()},h(){b(r,"href","mailto:chris@johnstoncode.com"),b(r,"class","svelte-r6b1hf"),b(n,"class","spacer svelte-r6b1hf")},m(e,c){d(e,t,c),y(t,s),d(e,a,c),d(e,r,c),y(r,p),d(e,u,c),d(e,n,c),d(e,i,c);for(let l=0;l<h.length;l+=1)h[l].m(e,c);d(e,_,c)},p(e,[c]){if(c&1){m=e[0];let l;for(l=0;l<m.length;l+=1){const v=I(e,m,l);h[l]?h[l].p(v,c):(h[l]=J(v),h[l].c(),h[l].m(_.parentNode,_))}for(;l<h.length;l+=1)h[l].d(1);h.length=m.length}},i:C,o:C,d(e){e&&f(t),e&&f(a),e&&f(r),e&&f(u),e&&f(n),e&&f(i),L(h,e),e&&f(_)}}}const H={"./blog/hello-world.md":()=>S(()=>import("./blog/hello-world.md-a0a666fa.js"),["pages/blog/hello-world.md-a0a666fa.js","chunks/vendor-f3548c02.js"])};let R=[];for(const o in H)R.push(H[o]().then(({metadata:t})=>({path:o,title:t.title,date:t.date})));async function B(){const o=await Promise.all(R);return o.sort((t,s)=>new Date(s.date)-new Date(t.date)),{props:{posts:o}}}function O(o,t,s){let{posts:a}=t;return o.$$set=r=>{"posts"in r&&s(0,a=r.posts)},[a]}class F extends V{constructor(t){super();$(this,t,O,N,g,{posts:0})}}export{F as default,B as load};
