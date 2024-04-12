<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# srotg

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Construct a Givens plane rotation.



<section class="usage">

## Usage

To use in Observable,

```javascript
srotg = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-srotg@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var srotg = require( 'path/to/vendor/umd/blas-base-srotg/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-srotg@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.srotg;
})();
</script>
```

#### srotg( a, b )

Constructs a Givens plane rotation provided two single-precision floating-point values `a` and `b`.

```javascript
var out = srotg( 0.0, 2.0 );
// returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
```

The function has the following parameters:

-   **a**: rotational elimination parameter.
-   **b**: rotational elimination parameter.

#### srotg.assign( a, b, out, stride, offset )

Constructs a Givens plane rotation provided two single-precision floating-point values `a` and `b` and assigns results to an output array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 4 );

var y = srotg.assign( 0.0, 2.0, out, 1, 0 );
// returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]

var bool = ( y === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `srotg()` corresponds to the [BLAS][blas] level 1 function [`srotg`][srotg].

</section>

<!-- /.notes -->

<section class="examples">

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var srotg = require( '@stdlib/blas-base-srotg' );

var out;
var i;
for ( i = 0; i < 100; i++ ) {
    out = srotg( discreteUniform( -5, 5 ), discreteUniform( -5, 5 ) );
    console.log( out );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-srotg.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-srotg

[test-image]: https://github.com/stdlib-js/blas-base-srotg/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-srotg/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-srotg/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-srotg?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-srotg.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-srotg/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-srotg/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-srotg/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-srotg/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-srotg/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-srotg/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-srotg/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-srotg/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-srotg/main/LICENSE

[blas]: http://www.netlib.org/blas

[srotg]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

</section>

<!-- /.links -->
