"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=o(function(E,w){"use strict";var a=require("@stdlib/number-float64-base-to-float32"),x=require("@stdlib/math-base-special-absf"),O=require("@stdlib/math-base-special-sqrtf"),y=require("@stdlib/math-base-special-abs2f"),m=require("@stdlib/math-base-special-copysignf");function R(e,r,i,g,q){var v,l,t,c,s,n,f,u;return t=x(e),c=x(r),t>c?l=m(1,e):l=m(1,r),v=a(t+c),v===0?(n=1,f=0,s=0,u=0):(s=a(v*O(a(y(a(e/v))+y(a(r/v))))),s=a(s*l),n=a(e/s),f=a(r/s),u=1,t>c?u=f:n!==0&&(u=a(1/n))),e=s,r=u,i[q]=e,i[q+g]=r,i[q+2*g]=n,i[q+3*g]=f,i}w.exports=R});var A=o(function(G,z){"use strict";var h=require("@stdlib/array-float32"),j=p();function k(e,r){var i=new h(4);return j(e,r,i,1,0)}z.exports=k});var B=require("@stdlib/utils-define-nonenumerable-read-only-property"),F=A(),C=p();B(F,"assign",C);module.exports=F;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
