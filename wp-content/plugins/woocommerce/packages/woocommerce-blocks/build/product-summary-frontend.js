(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[8185],{8281:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>m});var o=r(9307),n=r(4184),s=r.n(n),c=r(987);const l=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),a=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e;var i=r(5266);const u=({source:t,maxLength:e=15,countType:r="words",className:n="",style:s={}})=>{const u=(0,o.useMemo)((()=>((t,e=15,r="words")=>{const o=(0,c.autop)(t);if((0,i.count)(o,r)<=e)return o;const n=(t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)})(o);return(0,i.count)(n,r)<=e?n:"words"===r?((t,e,r="&hellip;",o=!0)=>{const n=l(t),s=n.split(" ").splice(0,e).join(" ");return s===n?o?(0,c.autop)(n):n:o?(0,c.autop)(a(s,r)):a(s,r)})(n,e):((t,e,r=!0,o="&hellip;",n=!0)=>{const s=l(t),i=s.slice(0,e);if(i===s)return n?(0,c.autop)(s):s;if(r)return(0,c.autop)(a(i,o));const u=i.match(/([\s]+)/g),d=u?u.length:0,p=s.slice(0,e+d);return n?(0,c.autop)(a(p,o)):a(p,o)})(n,e,"characters_including_spaces"===r)})(t,e,r)),[t,e,r]);return(0,o.createElement)(o.RawHTML,{style:s,className:n},u)};var d=r(5271),p=r(2864),f=r(3611),v=r(721);r(385);const m=(0,v.withProductDataContext)((t=>{const{className:e}=t,{parentClassName:r}=(0,p.useInnerBlockLayoutContext)(),{product:n}=(0,p.useProductDataContext)(),c=(0,f.F)(t);if(!n)return(0,o.createElement)("div",{className:s()(e,"wc-block-components-product-summary",{[`${r}__product-summary`]:r})});const l=n.short_description?n.short_description:n.description;return l?(0,o.createElement)(u,{className:s()(e,c.className,"wc-block-components-product-summary",{[`${r}__product-summary`]:r}),source:l,maxLength:150,countType:d.Cm.wordCountType||"words",style:c.style}):null}))},3611:(t,e,r)=>{"use strict";r.d(e,{F:()=>i});var o=r(4184),n=r.n(o),s=r(7884),c=r(2646),l=r(1473),a=r(2661);const i=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let r=e.style;return(0,c.H)(r)&&(r=JSON.parse(r)||{}),(0,s.Kn)(r)||(r={}),{...e,style:r}})(t),r=(0,a.vc)(e),o=(0,a.l8)(e),i=(0,a.su)(e),u=(0,l.f)(e);return{className:n()(u.className,r.className,o.className,i.className),style:{...u.style,...r.style,...o.style,...i.style}}}},1473:(t,e,r)=>{"use strict";r.d(e,{f:()=>s});var o=r(7884),n=r(2646);const s=t=>{const e=(0,o.Kn)(t.style.typography)?t.style.typography:{},r=(0,n.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:r,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,r)=>{"use strict";r.d(e,{l8:()=>d,su:()=>p,vc:()=>u});var o=r(4184),n=r.n(o),s=r(9784),c=r(2289),l=r(7884);function a(t={}){const e={};return(0,c.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,r,o,s,c,u,d;const{backgroundColor:p,textColor:f,gradient:v,style:m}=t,y=i("background-color",p),g=i("color",f),h=function(t){if(t)return`has-${t}-gradient-background`}(v),b=h||(null==m||null===(e=m.color)||void 0===e?void 0:e.gradient);return{className:n()(g,h,{[y]:!b&&!!y,"has-text-color":f||(null==m||null===(r=m.color)||void 0===r?void 0:r.text),"has-background":p||(null==m||null===(o=m.color)||void 0===o?void 0:o.background)||v||(null==m||null===(s=m.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,l.Kn)(null==m||null===(c=m.elements)||void 0===c?void 0:c.link)?null==m||null===(u=m.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==m?void 0:m.color)||{}})}}function d(t){var e;const r=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:r,style:o}=t,s=r?i("border-color",r):"";return n()({"has-border-color":!!r||!(null==o||null===(e=o.border)||void 0===e||!e.color),[s]:!!s})}(t),style:a({border:r})}}function p(t){var e;return{className:void 0,style:a({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,r)=>{"use strict";r.d(e,{F:()=>o});const o=t=>null===t},7884:(t,e,r)=>{"use strict";r.d(e,{$n:()=>s,Kn:()=>n});var o=r(8519);const n=t=>!(0,o.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return n(t)&&e in t}},2646:(t,e,r)=>{"use strict";r.d(e,{H:()=>o});const o=t=>"string"==typeof t},1290:(t,e,r)=>{"use strict";r.d(e,{$:()=>s});var o=r(7582),n=r(307);function s(t,e){return void 0===e&&(e={}),(0,n.B)(t,(0,o.pi)({delimiter:"."},e))}},385:()=>{},9562:(t,e,r)=>{"use strict";function o(t){return t.toLowerCase()}r.d(e,{U:()=>o})},307:(t,e,r)=>{"use strict";r.d(e,{B:()=>c});var o=r(9562),n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],s=/[^A-Z0-9]+/gi;function c(t,e){void 0===e&&(e={});for(var r=e.splitRegexp,c=void 0===r?n:r,a=e.stripRegexp,i=void 0===a?s:a,u=e.transform,d=void 0===u?o.U:u,p=e.delimiter,f=void 0===p?" ":p,v=l(l(t,c,"$1\0$2"),i,"\0"),m=0,y=v.length;"\0"===v.charAt(m);)m++;for(;"\0"===v.charAt(y-1);)y--;return v.slice(m,y).split("\0").map(d).join(f)}function l(t,e,r){return e instanceof RegExp?t.replace(e,r):e.reduce((function(t,e){return t.replace(e,r)}),t)}},9784:(t,e,r)=>{"use strict";r.d(e,{o:()=>s});var o=r(7582),n=r(1290);function s(t,e){return void 0===e&&(e={}),(0,n.$)(t,(0,o.pi)({delimiter:"-"},e))}},7582:(t,e,r)=>{"use strict";r.d(e,{pi:()=>o});var o=function(){return o=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},o.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);