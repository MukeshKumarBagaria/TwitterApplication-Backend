const express=require('express');
const connect=require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment=require('./models/comment')

const app =express();

app.listen(3000,async ()=>{
    console.log("server is started");
    await connect();
    console.log("mongo db connected")


  const tweetRepo = new TweetRepository();
// const tweet=await tweetRepo.create({content:"this is my first tweet",userEmail:"mkbagaria13@gmail.com"});
// const comment=await Comment.create({content:"this is my  comment associated with first tweet"});
// tweet.comments.push(comment);
// tweet.save();
//const tweet=await tweetRepo.getWithComments('63d69a88a6cdae6ac9bfa6fc');//in this query comments are populatig with tweets 
const tweet=await tweetRepo.getAll(0,2);
  
console.log(tweet[0].contentWithAuthor);
})
