# filter-pipe [![Build Status](https://travis-ci.org/bendrucker/filter-pipe.svg?branch=master)](https://travis-ci.org/bendrucker/filter-pipe)

> Pass a value through synchronous filter functions


## Install

```
$ npm install --save filter-pipe
```

## Usage

```js
var filter = require('filter-pipe')

var submitValid = pipe(isValid, submit)
submitValid({name: 'B'})
//=> submit not called

function isValid (value) {
  return value.name.length > 1
}

function submit (value) {
  sendToServer(value)
}

```

## API

#### `filter(functions...)` -> `function`

##### functions

*Required*  
Type: `function` / `array[function]`

A set of functions to use to filter the value. At least one is required. You can pass the functions as arguments or pass a single array of functions.


## License

MIT © [Ben Drucker](http://bendrucker.me)
