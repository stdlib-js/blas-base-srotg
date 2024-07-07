"use strict";var p=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=p(function(D,m){"use strict";var a=require("@stdlib/number-float64-base-to-float32"),x=require("@stdlib/math-base-special-absf"),O=require("@stdlib/math-base-special-sqrtf"),y=require("@stdlib/math-base-special-abs2f"),F=require("@stdlib/math-base-special-copysignf");function R(e,r,i,f,t){var v,g,q,c,s,n,l,u;return q=x(e),c=x(r),q>c?g=F(1,e):g=F(1,r),v=a(q+c),v===0?(n=1,l=0,s=0,u=0):(s=a(v*O(a(y(a(e/v))+y(a(r/v))))),s=a(s*g),n=a(e/s),l=a(r/s),u=1,q>c?u=l:n!==0&&(u=a(1/n))),e=s,r=u,i[t]=e,i[t+f]=r,i[t+2*f]=n,i[t+3*f]=l,i}m.exports=R});var z=p(function(E,w){"use strict";var T=require("@stdlib/array-float32"),h=o();function j(e,r){var i=new T(4);return h(e,r,i,1,0)}w.exports=j});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),A=z(),B=o();k(A,"assign",B);module.exports=A;
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
