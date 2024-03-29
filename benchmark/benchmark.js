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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var Float32Array = require( '@stdlib/array-float32' );
var pkg = require( './../package.json' ).name;
var srotg = require( './../lib' );


// VARIABLES //

var OPTS = {
	'dtype': 'float32'
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var x;
	var y;
	var i;

	x = discreteUniform( 100, -5, 5, OPTS );
	y = discreteUniform( 100, -5, 5, OPTS );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = srotg( x[ i%x.length ], y[ i%y.length ] );
		if ( isnanf( out[ i%4 ] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( out[ i%4 ] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign', function benchmark( b ) {
	var out;
	var x;
	var y;
	var z;
	var i;

	x = discreteUniform( 100, -5, 5, OPTS );
	y = discreteUniform( 100, -5, 5, OPTS );
	out = new Float32Array( 4 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = srotg.assign( x[ i%x.length ], y[ i%y.length ], out, 1, 0 );
		if ( typeof z !=='object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( isnanf( z[ i%4 ] ) ) {
		b.fail( 'should return the output array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
