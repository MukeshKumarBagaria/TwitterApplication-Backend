import express from 'express'
import {connect} from './config/database.js'

import TweetService from './services/tweet-service.js';

const app =express();
app.listen(3000,async ()=>{
    console.log("server is started");
    await connect();
    console.log("mongo db connected")

    let service=new TweetService();
   const tweet= await service.create({
    content:"checking before #commit all #changes made"
   })
 

})
