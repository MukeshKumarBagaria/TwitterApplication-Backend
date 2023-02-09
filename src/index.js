import express from 'express'
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js'
// import UserRepository from './repository/user-repository.js';
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.listen(3000,async ()=>{
    console.log("server is started");
    await connect();
    console.log("mongo db connected");


    // const userRepo= new UserRepository();
    // const user =await userRepo.create({
    //     email:"mkbagaria13@gmail.com",
    //     password:"mkbagaria",
    //     name:"mukesh kumar bagaria"
    // })
})
