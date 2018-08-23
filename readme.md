# asyncLoop.js

A single method to handle iterating through arrays and running asynchronous functions every iteration.

## Installation

1. Clone or download repository and copy asyncLoop.js file into your project.

## Parameters

**data** : array

The array to be looped through

**iterationCallback** : function(item, next, exit)

The function that will be called during every iteration of the loop. This will be where you add your asynchronous actions. 

When you have finished with your action, `next();` needs to be called to go to the next iteration. If you want to exit the loop, `exit();` can be called also.

**finishedCallback**

This function will be called when the loop has iteration through all the items in the array that was passed as the first parameter.


## Usage

```javascript 
const asyncLoop = require('./asyncLoop');

var myArray = ['Apples', 'Grapes', 'Bananas', 'Oranges' ];

asyncLoop(myArray, (item, next, exit) => {
    
    //Call exit(); to exit loop early

    //Run asynchronous function
    setTimeout(function() {
        console.log(item);
        //Call next to run next iteration
        next();
    }, 1000);

}, () => {

    console.log('FINISED');
    process.exit(0);

});

```

or

index.html
```html
<script src="/path/to/js/asyncLoop.js"></script>
<script src="/path/to/js/myScript.js"></script>
```

myScript.js
```javascript 
var myArray = ['Apples', 'Grapes', 'Bananas', 'Oranges' ];

asyncLoop(myArray, function(item, next, exit) {
    
    //Call exit(); to exit loop early

    //Run asynchronous function
    setTimeout(function() {
        console.log(item);
        //Call next to run next iteration
        next();
    }, 1000);

}, function() => {

    console.log('FINISED');

});

```
