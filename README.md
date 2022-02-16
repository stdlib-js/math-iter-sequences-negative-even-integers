<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# iterNegativeEvenIntegersSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a sequence of negative even integers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-sequences-negative-even-integers
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var iterNegativeEvenIntegersSeq = require( '@stdlib/math-iter-sequences-negative-even-integers' );
```

#### iterNegativeEvenIntegersSeq( \[options] )

Returns an iterator which generates a sequence of negative even integers.

<!-- eslint-disable id-length -->

```javascript
var it = iterNegativeEvenIntegersSeq();
// returns <Object>

var v = it.next().value;
// returns -2

v = it.next().value;
// returns -4

v = it.next().value;
// returns -6

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `4503599627370496`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

<!-- eslint-disable id-length -->

```javascript
var opts = {
    'iter': 2
};
var it = iterNegativeEvenIntegersSeq( opts );
// returns <Object>

var v = it.next().value;
// returns -2

v = it.next().value;
// returns -4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var iterNegativeEvenIntegersSeq = require( '@stdlib/math-iter-sequences-negative-even-integers' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterNegativeEvenIntegersSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/iter/sequences/even-integers`][@stdlib/math/iter/sequences/even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved sequence of even integers.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/integers`][@stdlib/math/iter/sequences/integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates an interleaved integer sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/negative-integers`][@stdlib/math/iter/sequences/negative-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negative integer sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/negative-odd-integers`][@stdlib/math/iter/sequences/negative-odd-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of negative odd integers.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/positive-even-integers`][@stdlib/math/iter/sequences/positive-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of positive even integers.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/nonpositive-even-integers`][@stdlib/math/iter/sequences/nonpositive-even-integers]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of nonpositive even integers.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-negative-even-integers.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-negative-even-integers

[test-image]: https://github.com/stdlib-js/math-iter-sequences-negative-even-integers/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-iter-sequences-negative-even-integers/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-negative-even-integers/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-negative-even-integers?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-negative-even-integers.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-negative-even-integers/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-negative-even-integers/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-negative-even-integers/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-negative-even-integers/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-negative-even-integers/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/iter/sequences/even-integers]: https://github.com/stdlib-js/math-iter-sequences-even-integers

[@stdlib/math/iter/sequences/integers]: https://github.com/stdlib-js/math-iter-sequences-integers

[@stdlib/math/iter/sequences/negative-integers]: https://github.com/stdlib-js/math-iter-sequences-negative-integers

[@stdlib/math/iter/sequences/negative-odd-integers]: https://github.com/stdlib-js/math-iter-sequences-negative-odd-integers

[@stdlib/math/iter/sequences/positive-even-integers]: https://github.com/stdlib-js/math-iter-sequences-positive-even-integers

[@stdlib/math/iter/sequences/nonpositive-even-integers]: https://github.com/stdlib-js/math-iter-sequences-nonpositive-even-integers

<!-- </related-links> -->

</section>

<!-- /.links -->
