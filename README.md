# stackgl-readme-css
![](http://img.shields.io/badge/stability-experimental-orange.svg?style=flat)
![](http://img.shields.io/npm/v/stackgl-readme-css.svg?style=flat)
![](http://img.shields.io/npm/dm/stackgl-readme-css.svg?style=flat)
![](http://img.shields.io/npm/l/stackgl-readme-css.svg?style=flat)

Reusable CSS for styling README/Markdown content consistently.

**[example here](http://stack.gl/stackgl-readme-css)**

## Usage

[![NPM](https://nodei.co/npm/stackgl-readme-css.png)](https://nodei.co/npm/stackgl-readme-css/)

Can be imported using [sheetify](http://github.com/sheetify/sheetify) or
[rework-npm](https://github.com/reworkcss/rework-npm) like so:

``` css
@import 'stackgl-readme-css';
```

Or required as a string from [browserify](http://browserify.org/) or node:

``` javascript
require('insert-css')(require('stackgl-readme-css'))
```

## Fonts

### Roboto

For headings. Can be sourced easily from [Google Fonts](http://www.google.com/fonts/).

### Fantasque Sans Mono

For body text and code. It's [Open Source](https://github.com/belluzj/fantasque-sans)!
A copy has also been included in this repo for hosting on `gh-pages` with.

## Colors

* Blue: `#66C4FF`
* Yellow: `#FFE169`
* Red: `#FF6F5C`
* Green: `#61FF90`
* Black: `#34363B`
* Dark Grey: `#4A4F5E`
* Grey: `#5B6173`
* Light Grey: `#A9B0C2`
* Lighter Grey: `#DEE7FF`
* White: `#FFFFFF`

## License

MIT. See [LICENSE.md](http://github.com/hughsk/stackgl-readme-css/blob/master/LICENSE.md) for details.
