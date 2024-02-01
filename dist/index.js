"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=p(function(D,m){
var a=require('@stdlib/number-float64-base-to-float32/dist'),x=require('@stdlib/math-base-special-absf/dist'),O=require('@stdlib/math-base-special-sqrtf/dist'),y=require('@stdlib/math-base-special-abs2f/dist'),F=require('@stdlib/math-base-special-copysignf/dist');function R(e,r,i,f,t){var v,g,q,c,s,n,l,u;return q=x(e),c=x(r),q>c?g=F(1,e):g=F(1,r),v=a(q+c),v===0?(n=1,l=0,s=0,u=0):(s=a(v*O(a(y(a(e/v))+y(a(r/v))))),s=a(s*g),n=a(e/s),l=a(r/s),u=1,q>c?u=l:n!==0&&(u=a(1/n))),e=s,r=u,i[t]=e,i[t+f]=r,i[t+2*f]=n,i[t+3*f]=l,i}m.exports=R
});var z=p(function(E,w){
var T=require('@stdlib/array-float32/dist'),h=o();function j(e,r){var i=new T(4);return h(e,r,i,1,0)}w.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),B=o();k(A,"assign",B);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
