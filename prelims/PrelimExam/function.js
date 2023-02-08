//Your task is to build a message module with three functions - greet, congratulations, and farewell. The greet function should say hello to someone by printing "Hello, [Name]!" in the console. The congratulations function should print "Congratulations, [Name]!" and the farewell function should print "Goodbye, [Name]!" in the console.

//Finally, test your modules by running the application file using Node.js to see the messages printed in the console.

//Files should be created locally and submission are screenshots of the the codes and sample output.

function greet(name){
  return "Hello, " + name + "!";
}

function congratulations(name){
  return "Congratulations, " + name + "!";
}

function farewell(name){
  return "Goodbye, " + name + "!";
}

module.exports = { greet, congratulations, farewell };