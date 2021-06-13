<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Path Delimiter

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Platform-specific path delimiter.

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-path-delimiter
```

</section>

<section class="usage">

## Usage

```javascript
var PATH_DELIMITER = require( '@stdlib/constants-path-delimiter' );
```

#### PATH_DELIMITER

Platform-specific path delimiter.

```javascript
var IS_WINDOWS = require( '@stdlib/assert-is-windows' );

var bool;
if ( IS_WINDOWS ) {
    bool = ( PATH_DELIMITER === ';' );
    // returns true
} else {
    bool = ( PATH_DELIMITER === ':' );
    // returns true
}
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var IS_WINDOWS = require( '@stdlib/assert-is-windows' );
var PATH_DELIMITER = require( '@stdlib/constants-path-delimiter' );

var paths;
var PATH;

if ( IS_WINDOWS ) {
    PATH = 'C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\node\\';
} else {
    PATH = '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin';
}
paths = PATH.split( PATH_DELIMITER );
console.log( paths );
// => [...]
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-path-delimiter.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-path-delimiter

[test-image]: https://github.com/stdlib-js/constants-path-delimiter/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/constants-path-delimiter/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-path-delimiter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-path-delimiter?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-path-delimiter
[dependencies-url]: https://david-dm.org/stdlib-js/constants-path-delimiter/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-path-delimiter/main/LICENSE

</section>

<!-- /.links -->
