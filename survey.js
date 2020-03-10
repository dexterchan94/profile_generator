const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What do you like to do? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`My name is ${name} and I like to ${activity}. While I ${activity} I like to listen to ${music}. My favourite thing to eat for ${meal} is ${food}. My favourite sport is ${sport}. My superpower is ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

