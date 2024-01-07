// Singleton
//when we make an object constructor

// Object literal ***** when we make an object with constructor we will not get singleton **** interview

const mySym = Symbol("key1"); //defining a symbol

const user = {
   "full name": "aryan",
    age: 20,
    location: "Mumbai",
    email: "aryan@google.com",
    isLoggecIn : false,
    lastlogin: ["mon","sat","tue"],
    [mySym]: "mykey1",
    greeting: function (name){
        console.log(`hello ${name}`)
    },
    team : {
        lead: "ME",
        Editor: "Isshan",
        miniwork: "Ayush",
        freeloader: "Gandhar"
    }
}

console.log(user.age);
console.log(user["full name"]);
console.log(user[mySym]);
// user.email = "starx@billon.com";
// Object.freeze(user);
// user.email = "main@jee.com";

console.log(user.lastlogin[0]);

user.applause = function () {
    console.log(`good !!!!! ${this["full name"]}`)
}
console.log(user.greeting("Meha"))
console.log(user.applause())


console.log(user.team["lead"]);

console.log(user);

// ********************************** Object (constuctor) *****************************************

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Array of object 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  prototype and inhertance

// Json and api Javascript object notation
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]