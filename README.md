ndarray-moments
===============
Calculate unnormalized [moments](http://en.wikipedia.org/wiki/Moment_(mathematics)) of an [ndarray](https://github.com/mikolalysenko/ndarray).  Another name for these things is that they are the expected value of polynomials.  The first unnormalized moment is just the mean, the second is the expected value of x^2, the 3rd is E[x^3], etc.  Using this data, you can compute any polynomial statistic like variance, kurtosis, or skewness using the [method of moments](http://en.wikipedia.org/wiki/Method_of_moments) (aka [linearity of expectation](http://en.wikipedia.org/wiki/Expected_value)).

## Example

```javascript
var ndarray = require("ndarray")
var x = ndarray(new Float64Array([1, 2, 5, -10]))

//Compute moments
var moments = require("ndarray-moments")(2, x)

//Print out statistics
console.log("Mean:", moments[0])
console.log("Variance:", moments[1] - moments[0]*moments[0])
```

## Install

    npm install ndarray-moments

### `require("ndarray-moments")(n, array)`
Calcuates the first n moments of `array`

* `n` is the number of moments
* `array` is the array we are iterating over

**Returns** An array of moments of the array.

## Credits
(c) 2013 Mikola Lysenko. MIT License
