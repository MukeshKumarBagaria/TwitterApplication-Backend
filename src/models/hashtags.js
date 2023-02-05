import mongoose from "mongoose";
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

const Hashtag= mongoose.model('Hashtag',hashtagShcema);

export default Hashtag;