class user{
    constructor(email,password){
        this.email= email
        this.password= password
    }
    get password(){
        return `${this._password}raghav`
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
    this._email = value
    }
    set password(value){
        this.password = value
    }
}
const raghav = new user("raghav@gmail.com", "abc")
console.log(raghav.password);
