const mongoose=require('mongoose');

const tweetSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,"a tweet can't contain more than 250 characters"]
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'hashtag'
        }
    ]
  
},{timestamps:true})


const Tweet= mongoose.model('Tweet',tweetSchema);

module.exports=Tweet;