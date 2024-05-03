import{getNotFound as be}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Re}from"./@qwik-city-static-paths.js";import{_ as Ae,a as _e,v as Te}from"./q-ZYKX__xi.js";import{s as xe,r as ke,m as Ce}from"./q-CTLJIuL_.js";import Me from"./@qwik-city-plan.js";var ie=class extends Error{constructor(e,t){super(t),this.status=e}};function De(e,t){let n="Server Error";return t!=null&&(typeof t.message=="string"?n=t.message:n=String(t)),"<html>"+se(e,n)+"</html>"}function se(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=ve(t):t="";const n=typeof t=="string"?"600px":"300px",r=e>=500?Oe:We;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${r}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${r}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${r}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var Pe=/[&<>]/g,ve=e=>e.replace(Pe,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),We="#006ce9",Oe="#713fc2",Ne={lax:"Lax",Lax:"Lax",None:"None",none:"None",strict:"Strict",Strict:"Strict"},$e={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},Le=(e,t,n)=>{const r=[`${e}=${t}`];typeof n.domain=="string"&&r.push(`Domain=${n.domain}`),typeof n.maxAge=="number"?r.push(`Max-Age=${n.maxAge}`):Array.isArray(n.maxAge)?r.push(`Max-Age=${n.maxAge[0]*$e[n.maxAge[1]]}`):typeof n.expires=="number"||typeof n.expires=="string"?r.push(`Expires=${n.expires}`):n.expires instanceof Date&&r.push(`Expires=${n.expires.toUTCString()}`),n.httpOnly&&r.push("HttpOnly"),typeof n.path=="string"&&r.push(`Path=${n.path}`);const a=Ie(n.sameSite);return a&&r.push(`SameSite=${a}`),n.secure&&r.push("Secure"),r.join("; ")};function J(e){try{return decodeURIComponent(e)}catch{return e}}var He=e=>{const t={};if(typeof e=="string"&&e!==""){const n=e.split(";");for(const r of n){const a=r.indexOf("=");a!==-1&&(t[J(r.slice(0,a).trim())]=J(r.slice(a+1).trim()))}}return t};function Ie(e){if(e===!0)return"Strict";if(e===!1)return"None";if(e)return Ne[e]}var C=Symbol("request-cookies"),F=Symbol("response-cookies"),A=Symbol("live-cookies"),oe,ce,Qe=class{constructor(e){this[oe]={},this[ce]={},this[C]=He(e),this[A]={...this[C]}}get(e,t=!0){const n=this[t?A:C][e];return n?{value:n,json(){return JSON.parse(n)},number(){return Number(n)}}:null}getAll(e=!0){return Object.keys(this[e?A:C]).reduce((t,n)=>(t[n]=this.get(n),t),{})}has(e,t=!0){return!!this[t?A:C][e]}set(e,t,n={}){this[A][e]=typeof t=="string"?t:JSON.stringify(t);const r=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[F][e]=Le(e,r,n)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0}),this[A][e]=null}headers(){return Object.values(this[F])}};oe=F,ce=A;var Ue=(e,t)=>{const n=t.headers();if(n.length>0){const r=new Headers(e);for(const a of n)r.append("Set-Cookie",a);return r}return e},B=class{},v=class extends B{},K=new WeakMap,G="qaction",ze="qfunc";function je(e){const{url:t,params:n,request:r,status:a,locale:i}=e,c={};r.headers.forEach((y,w)=>c[w]=y);const s=e.sharedMap.get(H),l=e.sharedMap.get(me),o=e.sharedMap.get(pe),f=e.sharedMap.get(at),d=e.request.headers,p=new URL(t.pathname+t.search,t),m=d.get("X-Forwarded-Host"),g=d.get("X-Forwarded-Proto");return m&&(p.port="",p.host=m),g&&(p.protocol=g),{url:p.href,requestHeaders:c,locale:i(),nonce:f,containerAttributes:{"q:route":o},qwikcity:{routeName:o,ev:e,params:{...n},loadedRoute:st(e),response:{status:a(),loaders:I(e),action:s,formData:l}}}}var Fe=(e,t,n,r,a)=>{const i=[],c=[],s=[],l=!!(t&&Ve(t[2]));if(e&&V(i,c,s,e,l,n),t){const o=t[0];r&&(n==="POST"||n==="PUT"||n==="PATCH"||n==="DELETE")&&s.unshift(Ye),l&&(n==="POST"&&s.push(Je),s.push(Ke),s.push(Ee)),s.push(Ze),V(i,c,s,t[2],l,n),l&&(s.push(f=>{f.sharedMap.set(pe,o)}),s.push(Be(i,c)),s.push(a))}return s},V=(e,t,n,r,a,i)=>{for(const c of r){typeof c.onRequest=="function"?n.push(c.onRequest):Array.isArray(c.onRequest)&&n.push(...c.onRequest);let s;switch(i){case"GET":{s=c.onGet;break}case"POST":{s=c.onPost;break}case"PUT":{s=c.onPut;break}case"PATCH":{s=c.onPatch;break}case"DELETE":{s=c.onDelete;break}case"OPTIONS":{s=c.onOptions;break}case"HEAD":{s=c.onHead;break}}if(typeof s=="function"?n.push(s):Array.isArray(s)&&n.push(...s),a){const l=Object.values(c).filter(f=>Y(f,"server_loader"));e.push(...l);const o=Object.values(c).filter(f=>Y(f,"server_action"));t.push(...o)}}},Y=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function Be(e,t){return async n=>{if(n.headersSent){n.exit();return}const{method:r}=n,a=I(n),i=Q(n)==="dev",c=n[L];if(i&&r==="GET"&&n.query.has(G)&&console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),r==="POST"){const s=n.query.get(G);if(s){const l=globalThis._qwikActionsMap,o=t.find(f=>f.__id===s)??(l==null?void 0:l.get(s));if(o){n.sharedMap.set(H,s);const f=await n.parseBody();if(!f||typeof f!="object")throw new Error("Expected request data to be an object");const d=await q(n,o.__validators,f,i);if(!d.success)a[s]=n.fail(d.status??500,d.error);else{const p=i?await O(n,o.__qrl.getSymbol().split("_",1)[0],()=>o.__qrl.call(n,d.data,n)):await o.__qrl.call(n,d.data,n);i&&W(c,p,o.__qrl),a[s]=p}}}}e.length>0&&await Promise.all(e.map(s=>{const l=s.__id;return a[l]=q(n,s.__validators,void 0,i).then(o=>o.success?i?O(n,s.__qrl.getSymbol().split("_",1)[0],()=>s.__qrl.call(n,n)):s.__qrl.call(n,n):n.fail(o.status??500,o.error)).then(o=>(typeof o=="function"?a[l]=o():(i&&W(c,o,s.__qrl),a[l]=o),o))}))}}async function q(e,t,n,r){let a={success:!0,data:n};if(t)for(const i of t)if(r?a=await O(e,"validator$",()=>i.validate(e,n)):a=await i.validate(e,n),a.success)n=a.data;else return a;return a}function Xe(e){return e?typeof e=="object"&&Symbol.asyncIterator in e:!1}async function Je(e){const t=e.query.get(ze);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const n=Q(e)==="dev",r=e[L],a=await e.parseBody();if(Array.isArray(a)){const[i,...c]=a;if(Ge(i)&&i.getHash()===t){let s;try{n?s=await O(e,`server_${i.getSymbol()}`,()=>i.apply(e,c)):s=await i.apply(e,c)}catch(l){e.headers.set("Content-Type","application/qwik-json"),e.send(500,await r._serializeData(l,!0));return}if(Xe(s)){e.headers.set("Content-Type","text/qwik-json-stream");const o=e.getWritableStream().getWriter();for await(const f of s){n&&W(r,f,i);const d=await r._serializeData(f,!0);if(e.signal.aborted)break;await o.write($.encode(`${d}
`))}o.close()}else{W(r,s,i),e.headers.set("Content-Type","application/qwik-json");const l=await r._serializeData(s,!0);e.send(200,l)}return}}throw e.error(500,"Invalid request")}}function Ke(e){const t=X(e),{basePathname:n,pathname:r,url:a,sharedMap:i}=e;if(!i.has(M)&&r!==n&&!r.endsWith(".html")){if(t){if(!r.endsWith("/"))throw e.redirect(302,r+"/"+a.search)}else if(r.endsWith("/"))throw e.redirect(302,r.slice(0,r.length-1)+a.search)}}function W(e,t,n){try{e._verifySerializable(t,void 0)}catch(r){throw r instanceof Error&&n.dev&&(r.loc=n.dev),r}}var Ge=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Ve(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function le(e,t){return e=new URL(e),e.pathname.endsWith(T)&&(e.pathname=e.pathname.slice(0,-T.length)),t?e.pathname.endsWith("/")||(e.pathname+="/"):e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),e.toString().substring(e.origin.length)}var $=new TextEncoder;function Ye(e){if(tt(e.request.headers,"application/x-www-form-urlencoded","multipart/form-data","text/plain")){const n=e.request.headers.get("origin"),r=e.url.origin;if(n!==r)throw e.error(403,`CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${r}".`)}}function qe(e){return async t=>{if(t.headersSent||t.sharedMap.has(M))return;t.request.headers.forEach((d,p)=>d);const r=t.headers;r.has("Content-Type")||r.set("Content-Type","text/html; charset=utf-8");const a=X(t),{readable:i,writable:c}=new TextEncoderStream,s=t.getWritableStream(),l=i.pipeTo(s,{preventClose:!0}),o=c.getWriter(),f=t.status();try{const d=Q(t)==="static",p=je(t),m=await e({base:t.basePathname+"build/",stream:o,serverData:p,containerAttributes:{"q:render":d?"static":"",...p.containerAttributes}}),g={loaders:I(t),action:t.sharedMap.get(H),status:f!==200?f:200,href:le(t.url,a)};typeof m.html=="string"&&await o.write(m.html),t.sharedMap.set("qData",g)}finally{await o.ready,await o.close(),await l}await s.close()}}async function Ze(e){if(e.sharedMap.has(M)){try{await e.next()}catch(i){if(!(i instanceof v))throw i}if(e.headersSent)return;const n=e.status(),r=e.headers.get("Location");if(n>=301&&n<=308&&r){const i=et(r);if(i){e.headers.set("Location",i),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}}}async function Ee(e){if(e.sharedMap.has(M)){if(await e.next(),e.headersSent||e.exited)return;const n=e.status(),r=e.headers.get("Location"),a=X(e);e.request.headers.forEach((o,f)=>o),e.headers.set("Content-Type","application/json; charset=utf-8");const i={loaders:I(e),action:e.sharedMap.get(H),status:n!==200?n:200,href:le(e.url,a),redirect:r??void 0},c=e.getWritableStream().getWriter(),l=await e[L]._serializeData(i,!0);c.write($.encode(l)),e.sharedMap.set("qData",i),c.close()}}function et(e){if(e.startsWith("/")){const t=T,n=new URL(e,"http://localhost");return(n.pathname.endsWith("/")?n.pathname.slice(0,-1):n.pathname)+(t.startsWith("/")?"":"/")+t+n.search}else return}function Z(){return typeof performance<"u"?performance.now():0}async function O(e,t,n){const r=Z();try{return await n()}finally{const a=Z()-r;let i=e.sharedMap.get("@serverTiming");i||e.sharedMap.set("@serverTiming",i=[]),i.push([t,a])}}function tt(e,...t){var n;const r=((n=e.get("content-type"))==null?void 0:n.split(/;,/,1)[0].trim())??"";return t.includes(r)}function nt(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),e.staleIfError&&t.push(`stale-if-error=${e.staleIfError}`),t.join(", ")}var rt=e=>e&&typeof e.then=="function",fe=Symbol("RequestEvLoaders"),ue=Symbol("RequestEvMode"),de=Symbol("RequestEvRoute"),L=Symbol("RequestEvQwikSerializer"),he=Symbol("RequestEvTrailingSlash"),pe="@routeName",H="@actionId",me="@actionFormData",at="@nonce";function it(e,t,n,r,a,i,c,s){const{request:l,platform:o,env:f}=e,d=new Map,p=new Qe(l.headers.get("cookie")),m=new Headers,g=new URL(l.url);g.pathname.endsWith(T)&&(g.pathname=g.pathname.slice(0,-ge),a&&!g.pathname.endsWith("/")&&(g.pathname+="/"),d.set(M,!0)),d.set("@manifest",r);let y=-1,w=null,_,x=e.locale,b=200;const Se=async()=>{for(y++;y<n.length;){const u=n[y],h=globalThis.qcAsyncRequestStore,S=h!=null&&h.run?h.run(R,u,R):u(R);rt(S)&&await S,y++}},k=()=>{if(w!==null)throw new Error("Response already sent")},D=(u,h)=>{if(k(),typeof u=="number"){b=u;const P=R.getWritableStream().getWriter();P.write(typeof h=="string"?$.encode(h):h),P.close()}else if(b=u.status,u.headers.forEach((S,P)=>{m.append(P,S)}),u.body){const S=R.getWritableStream();u.body.pipeTo(S)}else{if(b>=300&&b<400)return new v;R.getWritableStream().getWriter().close()}return U()},U=()=>(y=E,new B),z={},R={[fe]:z,[ue]:e.mode,[he]:a,[de]:t,[L]:c,cookie:p,headers:m,env:f,method:l.method,signal:l.signal,params:(t==null?void 0:t[1])??{},pathname:g.pathname,platform:o,query:g.searchParams,request:l,url:g,basePathname:i,sharedMap:d,get headersSent(){return w!==null},get exited(){return y>=E},get clientConn(){return e.getClientConn()},next:Se,exit:U,cacheControl:(u,h="Cache-Control")=>{k(),m.set(h,nt(u))},resolveValue:async u=>{const h=u.__id;if(u.__brand==="server_loader"&&!(h in z))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return z[h]},status:u=>typeof u=="number"?(k(),b=u,u):b,locale:u=>(typeof u=="string"&&(x=u),x||""),error:(u,h)=>(b=u,m.delete("Cache-Control"),new ie(u,h)),redirect:(u,h)=>{if(k(),b=u,h){const S=h.replace(/([^:])\/{2,}/g,"$1/");h!==S&&console.warn(`Redirect URL ${h} is invalid, fixing to ${S}`),m.set("Location",S)}return m.delete("Cache-Control"),u>301&&m.set("Cache-Control","no-store"),U(),new v},defer:u=>typeof u=="function"?u:()=>u,fail:(u,h)=>(k(),b=u,m.delete("Cache-Control"),{failed:!0,...h}),text:(u,h)=>(m.set("Content-Type","text/plain; charset=utf-8"),D(u,h)),html:(u,h)=>(m.set("Content-Type","text/html; charset=utf-8"),D(u,h)),parseBody:async()=>_!==void 0?_:_=ot(R.request,d,c),json:(u,h)=>(m.set("Content-Type","application/json; charset=utf-8"),D(u,JSON.stringify(h))),send:D,isDirty:()=>w!==null,getWritableStream:()=>{if(w===null){if(e.mode==="dev"){const u=d.get("@serverTiming");u&&m.set("Server-Timing",u.map(h=>`${h[0]};dur=${h[1]}`).join(","))}w=e.getWritableStream(b,m,p,s,R)}return w}};return Object.freeze(R)}function I(e){return e[fe]}function X(e){return e[he]}function st(e){return e[de]}function Q(e){return e[ue]}var E=Number.MAX_SAFE_INTEGER,ot=async(e,t,n)=>{var r;const a=((r=e.headers.get("content-type"))==null?void 0:r.split(/[;,]/,1)[0].trim())??"";if(a==="application/x-www-form-urlencoded"||a==="multipart/form-data"){const i=await e.formData();return t.set(me,i),ct(i)}else{if(a==="application/json")return await e.json();if(a==="application/qwik-json")return n._deserializeData(await e.text())}},ct=e=>[...e.entries()].reduce((n,[r,a])=>(r.split(".").reduce((i,c,s,l)=>{if(c.endsWith("[]")){const o=c.slice(0,-2);return i[o]=i[o]||[],i[o]=[...i[o],a]}return s<l.length-1?i[c]=i[c]||(Number.isNaN(+l[s+1])?{}:[]):i[c]=a},n),n),{}),N;import("node:async_hooks").then(e=>{const t=e.AsyncLocalStorage;N=new t,globalThis.qcAsyncRequestStore=N}).catch(e=>{console.warn("AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.",e)});function lt(e,t,n,r,a=!0,i="/",c){let s;const l=new Promise(f=>s=f),o=it(e,t,n,r,a,i,c,s);return{response:l,requestEv:o,completion:N?N.run(o,ee,o,s):ee(o,s)}}async function ee(e,t){try{await e.next()}catch(n){if(n instanceof v)await e.getWritableStream().close();else if(n instanceof ie){if(console.error(n),!e.headersSent){const r=De(n.status,n),a=n.status;e.html(a,r)}}else if(!(n instanceof B)){if(Q(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const r=e.getWritableStream();if(!r.locked){const a=r.getWriter();await a.write($.encode(se(500,"Internal Server Error"))),await a.close()}}catch{console.error("Unable to render error page")}return n}}finally{e.isDirty()||t(null)}}function ft(e,t){if(e.endsWith(T)){const n=e.length-ge+(t?1:0);e=e.slice(0,n),e===""&&(e="/")}return e}var M="@isQData",T="/q-data.json",ge=T.length;function ut(e,t){const n=re(e),r=te(e),a=re(t),i=te(t);return ye(e,n,r,t,a,i)}function ye(e,t,n,r,a,i){let c=null;for(;t<n;){const s=e.charCodeAt(t++),l=r.charCodeAt(a++);if(s===91){const o=we(e,t),f=t+(o?3:0),d=j(e,f,n,93),p=e.substring(f,d),m=j(e,d+1,n,47),g=e.substring(d+1,m);t=d+1;const y=a-1;if(o){const x=ht(p,g,r,y,i,e,t+g.length+1,n);if(x)return Object.assign(c||(c={}),x)}const w=j(r,y,i,47,g);if(w==-1)return null;const _=r.substring(y,w);if(!o&&!g&&!_)return null;a=w,(c||(c={}))[p]=decodeURIComponent(_)}else if(s!==l&&!(isNaN(l)&&dt(e,t)))return null}return ne(e,t)&&ne(r,a)?c||{}:null}function dt(e,t){return e.charCodeAt(t)===91&&we(e,t+1)}function te(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function ne(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function re(e){return e.charCodeAt(0)===47?1:0}function we(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function j(e,t,n,r,a=""){for(;t<n&&e.charCodeAt(t)!==r;)t++;const i=a.length;for(let c=0;c<i;c++)if(e.charCodeAt(t-i+c)!==a.charCodeAt(c))return-1;return t-i}function ht(e,t,n,r,a,i,c,s){n.charCodeAt(r)===47&&r++;let l=a;const o=t+"/";let f=5;for(;l>=r&&f--;){const d=ye(i,c,s,n,l,a);if(d){let p=n.substring(r,Math.min(l,a));return p.endsWith(o)&&(p=p.substring(0,p.length-o.length)),d[e]=decodeURIComponent(p),d}l=pt(n,r,o,l,r-1)+o.length}return null}function pt(e,t,n,r,a){let i=e.lastIndexOf(n,r);return i==r-n.length&&(i=e.lastIndexOf(n,r-n.length-1)),i>t?i:a}var mt=async(e,t,n,r)=>{if(Array.isArray(e))for(const a of e){const i=a[0],c=ut(i,r);if(c){const s=a[1],l=a[3],o=new Array(s.length),f=[],d=gt(t,r);let p;return s.forEach((m,g)=>{ae(m,f,y=>o[g]=y,n)}),ae(d,f,m=>p=m==null?void 0:m.default,n),f.length>0&&await Promise.all(f),[i,c,o,p,l]}}return null},ae=(e,t,n,r)=>{if(typeof e=="function"){const a=K.get(e);if(a)n(a);else{const i=e();typeof i.then=="function"?t.push(i.then(c=>{r!==!1&&K.set(e,c),n(c)})):i&&n(i)}}},gt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(r=>r[0]===t||t.startsWith(r[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}};async function yt(e,t,n){const{render:r,qwikCityPlan:a,manifest:i,checkOrigin:c}=t,s=e.url.pathname,l=ft(s,a.trailingSlash),o=await wt(a,l,e.request.method,c??!0,r);return o?lt(e,o[0],o[1],i,a.trailingSlash,a.basePathname,n):null}async function wt(e,t,n,r,a){const{routes:i,serverPlugins:c,menus:s,cacheModules:l}=e,o=await mt(i,s,l,t),f=Fe(c,o,n,r,qe(a));return f.length>0?[o,f]:null}var St="x-vercel-ip-country",bt="x-real-ip";function Rt(e){const t={_deserializeData:Ae,_serializeData:_e,_verifySerializable:Te};e.manifest&&xe(e.manifest);async function n(r){try{const a=new URL(r.url);if(Re(r.method,a))return new Response(null,{headers:{"x-middleware-next":"1"}});const i=globalThis.process,s=await yt({mode:"server",locale:void 0,url:a,request:r,env:{get(o){return i.env[o]}},getWritableStream:(o,f,d,p)=>{const{readable:m,writable:g}=new TransformStream,y=new Response(m,{status:o,headers:Ue(f,d)});return p(y),g},platform:{},getClientConn:()=>({ip:r.headers.get(bt)??void 0,country:r.headers.get(St)??void 0})},e,t);if(s){s.completion.then(f=>{f&&console.error(f)});const o=await s.response;if(o)return o}const l=be(a.pathname);return new Response(l,{status:404,headers:{"Content-Type":"text/html; charset=utf-8","X-Not-Found":a.pathname}})}catch(a){return console.error(a),new Response(String(a||"Error"),{status:500,headers:{"Content-Type":"text/plain; charset=utf-8","X-Error":"vercel-edge"}})}}return n}const Ct=Rt({render:ke,qwikCityPlan:Me,manifest:Ce});export{Ct as default};
