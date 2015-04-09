//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var User = function(name, email, password, totalScore) {
    this.name: name;
    this.email: email;
    this.password: password;
    this.totalScore: totalScore;
};


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title, answersArray, rightAnswer, difficulty) {
    this.title: title;
    this.answersArray: answersArray[];
    this.rightAnswer: rightAnswer;
    this.difficulty: difficulty;
}


//Create a users Array which is going to hold all of our users.

var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

users.push(new User("Jake", "jwrob1026@gmail.com", "theCakeIsALie", 100));
users.push(new User("Adam", "chickensoup@yahoo.com", "Bubbles", 80));
users.push(new User("Emily", "trueblue@Hotmail.com", "CottonCandy", 75));



//Create a questions Array which is going to hold all of our questions

var questionarr = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version "of" Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

questionarr.push(new Question("Inheritance is achieved in JavaScript through Prototypes?", "True or False", "True", "3"));
questionarr.push(new Question("JavaScript is just a scripting version of Java", "True or False", "False", "2"));
questionarr.push(new Question("In Javascript, == doesn't check 'type' but just the value - where === checks type and value", "True or False", "True", "4"));



//Now push all of your instances of Question into the questions Array

//code here

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
User.prototype.report = function() {
    return ("Name: " + this.name + ", email: " + this.email + ", password: " + this.pw + " Total Score " + this.totalScore);
};
Question.prototype.quiz = function() {
    return ("Title: " + this.title + ", Pick one: " + this.answersArray + ", Correct Answer: "
        this.rightAnswer + ", difficulty: " + this.difficulty);
};

for (var i = 0; i < questionarr.length; i++) {
    console.log(questionarr[i].quiz());
}
for (var i = 0; i < users.length; i++) {
    console.log(users[i].report());
}
