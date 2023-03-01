// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var s=l&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return y.call(r);t=r[p],u=p,n=null!=(o=r)&&v.call(o,u);try{r[p]=void 0}catch(n){return y.call(r)}return e=y.call(r),n?r[p]=t:delete r[p],e}:function(r){return y.call(r)},b="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null;var _,d="function"==typeof Float32Array?Float32Array:void 0;_=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A([1,3.14,-3.14,5e40]),t=n,r=(b&&t instanceof Float32Array||"[object Float32Array]"===s(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===w}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var m=_,h="function"==typeof Math.fround?Math.fround:null,g=new m(1);var U="function"==typeof h?h:function(r){return g[0]=r,g[0]};function j(r){return Math.abs(r)}var F=Math.sqrt;function I(r){return r!=r}var O=Math.floor;function S(r){return O(r)===r}function E(r){return S(r/2)}function N(r){return E(r>0?r-1:r+1)}var H=Number.NEGATIVE_INFINITY;function T(r){return r===w||r===H}function G(r){return Math.abs(r)}var M="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null;var L,V="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=L,k="function"==typeof Float64Array;var x="function"==typeof Float64Array?Float64Array:null;var Y,q="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),t=n,r=(k&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C=Y,z="function"==typeof Uint8Array;var B="function"==typeof Uint8Array?Uint8Array:null;var D,J="function"==typeof Uint8Array?Uint8Array:void 0;D=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,256,257]),t=n,r=(z&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Uint16Array;var R="function"==typeof Uint16Array?Uint16Array:null;var X,Z="function"==typeof Uint16Array?Uint16Array:void 0;X=function(){var r,n,t;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Q&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $,rr={uint16:X,uint8:K};($=new rr.uint16(1))[0]=4660;var nr,tr,er=52===new rr.uint8($.buffer)[0];!0===er?(nr=1,tr=0):(nr=0,tr=1);var or={HIGH:nr,LOW:tr},ur=new C(1),ir=new W(ur.buffer),ar=or.HIGH,fr=or.LOW;function cr(r,n,t,e){return ur[0]=r,n[e]=ir[ar],n[e+t]=ir[fr],n}function lr(r){return cr(r,[0,0],1,0)}c(lr,"assign",cr);var yr=!0===er?0:1,vr=new C(1),pr=new W(vr.buffer);function sr(r,n){return vr[0]=r,pr[yr]=n>>>0,vr[0]}function br(r){return 0|r}var wr,Ar,_r=!0===er?1:0,dr=new C(1),mr=new W(dr.buffer);function hr(r){return dr[0]=r,mr[_r]}!0===er?(wr=1,Ar=0):(wr=0,Ar=1);var gr={HIGH:wr,LOW:Ar},Ur=new C(1),jr=new W(Ur.buffer),Fr=gr.HIGH,Ir=gr.LOW;function Or(r,n){return jr[Fr]=r,jr[Ir]=n,Ur[0]}var Sr=[0,0];function Er(r,n){var t,e;return lr.assign(r,Sr,1,0),t=Sr[0],t&=2147483647,e=hr(n),Or(t|=e&=2147483648,Sr[1])}var Nr=!0===er?1:0,Hr=new C(1),Tr=new W(Hr.buffer);function Gr(r,n){return Hr[0]=r,Tr[Nr]=n>>>0,Hr[0]}var Mr=[1,1.5],Pr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8];function Vr(r,n,t,e){return I(r)||T(r)?(n[e]=r,n[e+t]=0,n):0!==r&&G(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Vr(r,[0,0],1,0)}),"assign",Vr);var Wr=[0,0],kr=[0,0];function xr(r,n){var t,e;return 0===n||0===r||I(r)||T(r)?r:(Vr(r,Wr,1,0),n+=Wr[1],n+=function(r){var n=hr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Wr[0]),n<-1074?Er(0,r):n>1023?r<0?H:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,lr.assign(r,kr,1,0),t=kr[0],t&=2148532223,e*Or(t|=n+1023<<20,kr[1])))}var Yr=1e300,qr=1e-300,Cr=[0,0],zr=[0,0];function Br(r,n){var t,e,o,u,i,a,f,c,l,y,v,p,s,b;if(I(r)||I(n))return NaN;if(lr.assign(n,Cr,1,0),i=Cr[0],0===Cr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return F(r);if(-.5===n)return 1/F(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(T(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:G(r)<1==(n===w)?0:w}(r,n)}if(lr.assign(r,Cr,1,0),u=Cr[0],0===Cr[1]){if(0===u)return function(r,n){return n===H?w:n===w?0:n>0?N(n)?r:0:N(n)?Er(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&N(n))return-1;if(T(r))return r===H?Br(-0,-n):n<0?0:w}if(r<0&&!1===S(n))return(r-r)/(r-r);if(o=G(r),t=2147483647&u|0,e=2147483647&i|0,f=i>>>31|0,a=(a=u>>>31|0)&&N(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&hr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Yr*Yr:a*qr*qr;if(t>1072693248)return 0===f?a*Yr*Yr:a*qr*qr;v=function(r,n){var t,e,o,u,i,a;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=sr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(zr,o)}else v=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p,s,b,w,A,_,d,m,h,g,U;return m=0,t<1048576&&(m-=53,t=hr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,m+=1,t-=1048576),i=sr(o=(_=(n=Gr(n,t))-(c=Mr[g]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=Gr(0,e+=g<<18),A=(u=o*o)*u*(0===(U=u)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),f=sr(f=3+(u=i*i)+(A+=(a=d*(_-i*f-i*(n-(f-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=sr(y=(_=i*f)+(d=a*f+(A-(f-3-u))*o),0))+.9617966939259756*(d-(y-_))+Lr[g])-((s=sr(s=(v=.9617967009544373*y)+p+(l=Pr[g])+(w=m),0))-w-l-v),r[0]=s,r[1]=b,r}(zr,o,t);if(p=(y=(n-(c=sr(n,0)))*v[0]+n*v[1])+(l=c*v[0]),lr.assign(p,Cr,1,0),s=br(Cr[0]),b=br(Cr[1]),s>=1083179008){if(0!=(s-1083179008|b))return a*Yr*Yr;if(y+8008566259537294e-32>p-l)return a*Yr*Yr}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return a*qr*qr;if(y<=p-l)return a*qr*qr}return p=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Gr(0,e)),r=br(r=hr(c=1-((c=(i=.6931471824645996*(u=sr(u=t+n,0)))+(a=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?xr(c,l):Gr(c,r)}(s,l,y),a*p}var Dr=new m(1),Jr=new W(Dr.buffer);function Kr(r){return Dr[0]=r,Jr[0]}var Qr=new W(1),Rr=new m(Qr.buffer);function Xr(r,n){var t,e,o;return r=U(r),n=U(n),t=Kr(r),t&=2147483647,e=Kr(n),o=t|=e&=2147483648,Qr[0]=o,Rr[0]}function Zr(r,n,t,e,o){var u,i,a,f,c,l,y,v,p;return i=Xr(1,(a=j(r))>(f=j(n))?r:n),0===(u=U(a+f))?(l=1,y=0,c=0,v=0):(c=U(u*U((p=U(Br(U(r/u),2)+Br(U(n/u),2)),U(F(U(p)))))),c=U(c*i),l=U(r/c),y=U(n/c),v=1,a>f?v=y:0!==l&&(v=U(1/l))),r=c,n=v,t[o]=r,t[o+e]=n,t[o+2*e]=l,t[o+3*e]=y,t}function $r(r,n){return Zr(r,n,new m(4),1,0)}c($r,"assign",Zr);export{Zr as assign,$r as default};
//# sourceMappingURL=mod.js.map
