/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.
var users = [];
//code here


//Now create and push into your users array 3 seperate instances of User using the data 
//from above in that exact order
users.push(new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS'));
users.push(new User("Cahlan", "cahlan@devmounta.in", 'iLoveHashtags'));
users.push(new User("Lenny", "lenny@theLenster.com", 'iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information

User.prototype.report = function() {
    return ("Name: " + this.name + ", email: " + this.email + ", password: " + this.pw);
};


for (var i = 0; i < users.length; i++) {
    if (users[i].name === "Tyler") {
        console.log(users[i].report());
    }
}

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

for (var i = 0; i < users.length; i++) {
    if (users[i].name === "Lenny") {
        console.log(users[i].report());
    }
}


//Now create another instance of User using your own information and then add that
//to your users array.

var user4 = new User("Jacob", "jwrob1026@gmail.com", "TheCakeIsALie");
users.push(user4);

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

for (var i = 0; i < users.length; i++) {
    console.log(users[i].report());
}
