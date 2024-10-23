const readline = require("readline");

let response = "\nThank you for your valuable feedback.";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("1) What's your name? ", (answer) => {
  response += `\n1) Your name is ${answer}.`;

  rl.question("2) What's an activity you like doing? ", (answer) => {
    response += `\n2) Your activity is ${answer}.`;

    rl.question("3) What do you listen to while doing that? ", (answer) => {
      response += `\n3) You listen to ${answer}.`;
  
      rl.question("4) Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        response += `\n4) Your favourite meal is ${answer}.`;

        rl.question("5) What's your favourite thing to eat for that meal? ", (answer) => {
          response += `\n5) Your favourite thing to eat is ${answer}.`;

          rl.question("6) Which sport is your absolute favourite? ", (answer) => {
            response += `\n6) Your absolute favourite sport is ${answer}.`;

            rl.question("7) What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              response += `\n7) Your superpower is ${answer}.`;

              console.log(response);
              rl.close();
            });
          });
        });
      });
    });
  });
});
