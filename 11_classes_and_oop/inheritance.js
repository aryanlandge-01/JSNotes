class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const Aryan = new Teacher("Jack","aryan@fb.com","heil#");

Aryan.addCourse();

const tina = new User("Megha");

tina.logme()
