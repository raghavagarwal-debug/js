class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        rerturn `123`
    }
}
const Raghav= new user("Raghav")
// console.log(Raghav.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("iphone", "iphone@gmail.com")
console.log(Iphone.createId());