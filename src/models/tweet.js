const mongoose=require('mongoose');

const tweetSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
    },
    comments:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Comment"
    }]
},{timestamps:true})

//creating a virtual on shcema
// virtual- 1.it is a property which is computer in   runtime and not aviablabe in schema
tweetSchema.virtual('contentWithAuthor').get(function process() {
    return `${this.content} by ${this.userEmail}`;
  });

const Tweet= mongoose.model('Tweet',tweetSchema);

module.exports=Tweet;