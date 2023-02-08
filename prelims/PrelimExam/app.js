//Then, you need to create another file called app.js that will use the message module. In the app.js file, you will set a name variable to "your name" and use the functions from the message module to display the messages: "Hello, [Your name here]!", "Congratulations, [Your name here]!", and "Goodbye, [Your name here]!" in the console.

var { greet, congratulations, farewell } = require('./function.js');

console.log(greet('Giann Kenneth Lachica'));
console.log(congratulations('Giann Kenneth Lachica'));
console.log(farewell('Giann Kenneth Lachica'));
