import { UserRepository } from "../repository/index.js"
class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async Signup(data){
        console.log(data);
        try {
            const user= await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("somethign went wrong in the UserService");
        }
    }
}
export default UserService;