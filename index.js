let userName = "Paul, ";

let welcomeMessage = ("Please pick a yes or no question to find out the liklihood of it coming true");

let userQuestion = "Will I find a house?";

console.log(userName);

console.log(welcomeMessage);

console.log(userQuestion);

let randomMessage = {
    beginning: ["you", "it", "this", "that", "question"],
    middle: [" will", " will definately", " certainly will", " might", " may", " won't", " will definately not", " 100% will not"],
    end: [" happen in the next 10 years", " acontecer", " passar na sua vida", " come to fruition", "occur in your lifetime", "chegar a acontecer"],  
}

function playGame () {
    let randomMessageBeginning = randomMessage.beginning[Math.floor(Math.random() * randomMessage.beginning.length + 1)];
    let randomMessageMiddle = randomMessage.middle[Math.floor(Math.random() * randomMessage.middle.length + 1)];
    let randomMessageend = randomMessage.end[Math.floor(Math.random() * randomMessage.end.length + 1)];

    return randomMessageBeginning + randomMessageMiddle + randomMessageend;
}

console.log(playGame())
