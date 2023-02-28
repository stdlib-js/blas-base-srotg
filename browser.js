// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return p.call(r);t=r[s],i=s,n=null!=(o=r)&&v.call(o,i);try{r[s]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[s]=t:delete r[s],e}:function(r){return p.call(r)},w="function"==typeof Float32Array,A=Number.POSITIVE_INFINITY,d="function"==typeof Float32Array?Float32Array:null,m="function"==typeof Float32Array?Float32Array:void 0;l=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,5e40]),t=n,r=(w&&t instanceof Float32Array||"[object Float32Array]"===b(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===A}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var _=l,h="function"==typeof Math.fround?Math.fround:null,g=new _(1),U="function"==typeof h?h:function(r){return g[0]=r,g[0]};function j(r){return Math.abs(r)}var F=Math.sqrt;function I(r){return r!=r}var O=Math.floor;function S(r){return O(r)===r}function E(r){return S(r/2)}function N(r){return E(r>0?r-1:r+1)}var T=Number.NEGATIVE_INFINITY;function H(r){return r===A||r===T}function G(r){return Math.abs(r)}var M,P="function"==typeof Uint32Array,L="function"==typeof Uint32Array?Uint32Array:null,V="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(P&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,x=M,k="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,q="function"==typeof Float64Array?Float64Array:void 0;W=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),t=n,r=(k&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z=W,B="function"==typeof Uint8Array,D="function"==typeof Uint8Array?Uint8Array:null,J="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var r,n,t;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,256,257]),t=n,r=(B&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=C,R="function"==typeof Uint16Array,X="function"==typeof Uint16Array?Uint16Array:null,Z="function"==typeof Uint16Array?Uint16Array:void 0;K=function(){var r,n,t;if("function"!=typeof X)return!1;try{n=new X(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Z:function(){throw new Error("not implemented")};var $,rr={uint16:K,uint8:Q};($=new rr.uint16(1))[0]=4660;var nr,tr,er=52===new rr.uint8($.buffer)[0];!0===er?(nr=1,tr=0):(nr=0,tr=1);var or={HIGH:nr,LOW:tr},ir=new z(1),ur=new x(ir.buffer),fr=or.HIGH,ar=or.LOW;function cr(r,n,t,e){return ir[0]=r,n[e]=ur[fr],n[e+t]=ur[ar],n}function lr(r){return cr(r,[0,0],1,0)}c(lr,"assign",cr);var yr=!0===er?0:1,pr=new z(1),vr=new x(pr.buffer);function sr(r,n){return pr[0]=r,vr[yr]=n>>>0,pr[0]}function br(r){return 0|r}var wr,Ar,dr=2147483647,mr=!0===er?1:0,_r=new z(1),hr=new x(_r.buffer);function gr(r){return _r[0]=r,hr[mr]}!0===er?(wr=1,Ar=0):(wr=0,Ar=1);var Ur={HIGH:wr,LOW:Ar},jr=new z(1),Fr=new x(jr.buffer),Ir=Ur.HIGH,Or=Ur.LOW;function Sr(r,n){return Fr[Ir]=r,Fr[Or]=n,jr[0]}var Er=[0,0];function Nr(r,n){var t,e;return lr.assign(r,Er,1,0),t=Er[0],t&=dr,e=gr(n),Sr(t|=e&=2147483648,Er[1])}var Tr=!0===er?1:0,Hr=new z(1),Gr=new x(Hr.buffer);function Mr(r,n){return Hr[0]=r,Gr[Tr]=n>>>0,Hr[0]}var Pr=1023,Lr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],xr=[0,1.350039202129749e-8];function kr(r,n,t,e){return I(r)||H(r)?(n[e]=r,n[e+t]=0,n):0!==r&&G(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return kr(r,[0,0],1,0)}),"assign",kr);var Yr=[0,0],qr=[0,0];function Cr(r,n){var t,e;return 0===n||0===r||I(r)||H(r)?r:(kr(r,Yr,1,0),n+=Yr[1],n+=function(r){var n=gr(r);return(n=(2146435072&n)>>>20)-Pr|0}(r=Yr[0]),n<-1074?Nr(0,r):n>1023?r<0?T:A:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,lr.assign(r,qr,1,0),t=qr[0],t&=2148532223,e*Sr(t|=n+Pr<<20,qr[1])))}var zr=1048575,Br=1048576,Dr=1083179008,Jr=1e300,Kr=1e-300,Qr=[0,0],Rr=[0,0];function Xr(r,n){var t,e,o,i,u,f,a,c,l,y,p,v,s,b;if(I(r)||I(n))return NaN;if(lr.assign(n,Qr,1,0),u=Qr[0],0===Qr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return F(r);if(-.5===n)return 1/F(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(H(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:G(r)<1==(n===A)?0:A}(r,n)}if(lr.assign(r,Qr,1,0),i=Qr[0],0===Qr[1]){if(0===i)return function(r,n){return n===T?A:n===A?0:n>0?N(n)?r:0:N(n)?Nr(A,r):A}(r,n);if(1===r)return 1;if(-1===r&&N(n))return-1;if(H(r))return r===T?Xr(-0,-n):n<0?0:A}if(r<0&&!1===S(n))return(r-r)/(r-r);if(o=G(r),t=i&dr|0,e=u&dr|0,a=u>>>31|0,f=(f=i>>>31|0)&&N(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(gr(r)&dr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Jr*Jr:f*Kr*Kr;if(t>1072693248)return 0===a?f*Jr*Jr:f*Kr*Kr;p=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=sr(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Rr,o)}else p=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,w,A,d,m,_,h,g,U;return _=0,t<Lr&&(_-=53,t=gr(n*=9007199254740992)),_+=(t>>20)-Pr|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,_+=1,t-=Lr),u=sr(o=(d=(n=Mr(n,t))-(c=Vr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=g<<18),A=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=sr(a=3+(i=u*u)+(A+=(f=m*(d-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=sr(y=(d=u*a)+(m=f*a+(A-(a-3-i))*o),0))+.9617966939259756*(m-(y-d))+xr[g])-((s=sr(s=(p=.9617967009544373*y)+v+(l=Wr[g])+(w=_),0))-w-l-p),r[0]=s,r[1]=b,r}(Rr,o,t);if(v=(y=(n-(c=sr(n,0)))*p[0]+n*p[1])+(l=c*p[0]),lr.assign(v,Qr,1,0),s=br(Qr[0]),b=br(Qr[1]),s>=Dr){if(0!=(s-Dr|b))return f*Jr*Jr;if(y+8008566259537294e-32>v-l)return f*Jr*Jr}else if((s&dr)>=1083231232){if(0!=(s-3230714880|b))return f*Kr*Kr;if(y<=v-l)return f*Kr*Kr}return v=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&dr|0)>>20)-Pr|0,c=0,l>1071644672&&(o=Mr(0,((c=r+(Br>>y+1)>>>0)&~(zr>>(y=((c&dr)>>20)-Pr|0)))>>>0),c=(c&zr|Br)>>20-y>>>0,r<0&&(c=-c),n-=o),r=br(r=gr(a=1-((a=(i=.6931471824645996*(o=sr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Cr(a,c):Mr(a,r)}(s,l,y),f*v}var Zr=new _(1),$r=new x(Zr.buffer);function rn(r){return Zr[0]=r,$r[0]}var nn=new x(1),tn=new _(nn.buffer);function en(r,n){var t,e,o;return r=U(r),n=U(n),t=rn(r),t&=2147483647,e=rn(n),o=t|=e&=2147483648,nn[0]=o,tn[0]}function on(r,n,t,e,o){var i,u,f,a,c,l,y,p,v;return u=en(1,(f=j(r))>(a=j(n))?r:n),0===(i=U(f+a))?(l=1,y=0,c=0,p=0):(c=U(i*U((v=U(Xr(U(r/i),2)+Xr(U(n/i),2)),U(F(U(v)))))),c=U(c*u),l=U(r/c),y=U(n/c),p=1,f>a?p=y:0!==l&&(p=U(1/l))),r=c,n=p,t[o]=r,t[o+e]=n,t[o+2*e]=l,t[o+3*e]=y,t}function un(r,n){return on(r,n,new _(4),1,0)}return c(un,"assign",on),un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).srotg=n();
//# sourceMappingURL=browser.js.map
