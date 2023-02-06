import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }
    async create(data){
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

   

    async getWithComments(id){
        try {
            const tweet=Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    
    async update(id,data){
        try {
           const tweet=Tweet.findByIdAndUpdate(id,data,{new:true});
           return tweet;
        } catch (error) {
            console.log(error);
            
        }
    }

   

    async getAll(offset,limit){
        try {
            const tweet= Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}
export default TweetRepository;