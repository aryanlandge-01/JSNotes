// Reusable part of code called as function 


// ############# basic syntax of function inside a function ################
function sayMyName() {
    console.log(               // ********************* function not returning anything *******************
        "Hello"
    );
}

 sayMyName();  //(this is how you execute a function in js)

function addtwonumber(num1,num2) {
    console.log(num1 + num2);
}

function addtwonumber(num1,num2) {
  return num1 + num2;
}


 const result =  addtwonumber(3,4);

 console.log("Result: ",result);

function loginUserMessage(username = "sammy") {
    if (!username) {
        console.log("please enter a username");
        return
    } 
    
    return `${username} just Logged in`
}

console.log((loginUserMessage("Aryan")))

// Rest operator in js 
function calculateCardPrice(val1,val2,...num1) {
    return num1;
}

console.log(calculateCardPrice(200,800,6878,890,90));

// ++++++++++++++++++++++++++++++++++++ How to pass object inside a function ++++++++++++++++++++++++++++

const user = {
    username: "aryan",
    price: 199
}

function handleObject(anyobject) {
    console.log(`${anyobject.username} total ${anyobject.price}`);
}

handleObject(user)
// handleObject({username: "nikita",price: 399});

// _________________________________ Passing the Array inside a function ___________________________________

const myarray = [3,49999,5,7];

function returnarrayvalue(getArray) {
    return getArray[1]
}

console.log(returnarrayvalue([3,454,3343,2355]));