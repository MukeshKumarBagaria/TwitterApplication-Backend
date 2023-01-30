const Comment = require('../models/comment');
const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data){
        try {
            const tweet = Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async get(id){
        try {
            const tweet= Tweet.findById(id);
            return tweet;
        }catch (error) {
            console.log(error);
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
            
        }
    }

    async destroy(id){
        try {
            const tweet=Tweet.findByIdAndRemove(id);
            
        } catch (error) {
            
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

module.exports=TweetRepository;