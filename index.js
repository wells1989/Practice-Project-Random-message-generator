let userName = "Paul, ";

let welcomeMessage = ("Please pick a yes or no question to find out the liklihood of it coming true");

let userQuestion = "Will I find a house?";

console.log(userName);

console.log(welcomeMessage);

console.log(userQuestion);

const getTruth = () => {
    
    let truth = Math.floor(Math.random() * 2)
    let randomPositiveMessages= [" you will do it", " it's very likely", " the future is bright"]

    let randomNegativeMessages= [" you can't do this", " no chance mofo" , " no chance in hell", " better luck next time"]
    let message = ""
    let percentage = 0

    if (truth === 0) {
        truth = true
        message = randomPositiveMessages[Math.floor(Math.random() * randomPositiveMessages.length)]
        percentage = Math.floor(Math.random() * (100-50) + 50)
    } else if (truth === 1) {
        truth = false
        message= randomNegativeMessages[Math.floor(Math.random() * randomNegativeMessages.length)]
        percentage = Math.floor(Math.random() * 50 + 1)
    }
    return truth + message + ". Percentage of occurence is: " + percentage + "%"
}

console.log(getTruth());

/* 

// getting a random number from combo of 2 random numbers
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}

console.log(rollTheDice());


// Initialise variables for the users name, a question to ask, a random number, and an empty variable for the eight ball
let userName = 'Gabriel';
const userQuestion = 'Will I get desert twice?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// If the user enters a name assign to userName, else, say hello.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Log to the console the question the suer asked
console.log(`${userName} asked: ${userQuestion}`);

// Create each conditional statement to be assigned to eightBall depending on the number generated from random Number
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
  default:
    console.log(`There appears to be a problem ${userName}! Please contact nine bal services.`);
}

// Print the eightBalls answer to the console
console.log(`Magic Eightball: ${eightBall}`);

*/