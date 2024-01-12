class User {
    constructor(username){
        this.username = username
    }

    logMe(){
       console.log(`UserName: ${this.username}`);
    }
    // not for all object this method should be accsed
    static createId(){
        return `123`
    }
}

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const aryan = new User("Aryan");
// console.log(aryan.createId());

aryan.logMe();

const user1 = new Teacher("iphone","i@phone.com");
console.log(user1.logMe());