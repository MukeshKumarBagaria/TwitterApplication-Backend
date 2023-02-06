import { LikeRepository,TweetRepository } from "../repository/index.js";

class LikeService{
constructor(){
    this.likeRepository=new LikeRepository();
    this.tweetRepository= new TweetRepository();
}


async toggleLike(modelId,modelType,userId){

    if(modelType=="Tweet"){
        var likeable= await this.tweetRepository.find(modelId);
       
    }else if(modelType=="Comment"){

    }else {
        throw new Error("unknow model type, currently like service is avialable only for tweet and comment ")
    }

const exists=await this.likeRepository.findByUserAndLikeable({
    User:userId,
    onModel:modelType,
    likeable:modelId,
})

if(exists){

likeable.likes.pull(exists.id);
await likeable.save();
await exists.remove();

var isAdded=false;

}else{
const newLike= await this.likeRepository.create({
    User:userId,
    onModel:modelType,
    likeable:modelId
});

 likeable.likes.push(newLike);
await likeable.save();

var isAdded=true;
}
return  isAdded;
}
}


export default LikeService;