const mongoose =require('mongoose');

const hashtagShcema= new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
});

const hashtag= mongoose.model('hashtag',hashtagShcema);

module.exports=hashtag;