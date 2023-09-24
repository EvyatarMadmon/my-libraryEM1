const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()


try{
    mongoose.connect('mongodb+srv://0526604945:henyair2002@cluster0.ddnnane.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser : true,
        userUnifiedTopology : true
    });
    console.log('connected to mongoDB atlas:');
}catch(error){
    console.log('error connecting to MongoDB')
}

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName :String,
    birthDate : Date,
    gender : String,
    email : String,
    password : String
})

const booksSchema = new mongoose.Schema({
    bookTitle : String,
    bookAuthor : String,
    bookDescription : String,
    numberOfPages : String,
    pictureOfBook : String,
    bookFile : String
})

const User = mongoose.model("User",userSchema);
const Book = mongoose.model("Book",booksSchema);

const user1 = new User({
    firstName : "hen"
})

user1.save();

app.post('/src/components/SingIn.jsx',async(req,res)=>{
    try{
        const existUser = await User.findOne({email:req.body.email})
        if(existUser){
            return res.status(400).send({massage:'email already exists'});
        }
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate:req.body.birthDate,
            gender:req.body.gender,
            email:req.body.email,
            password:req.body.password,
        })

        try{
            const savedUser = await newUser.save();
        }catch(error){
            res.status(500).send(error)
        }
        res.status(201).send({massage:'user created successfully'});
    }catch(error){
        console.error(error);
        res.status(500).send({massage:'Internal server error'});
    }
    
})


app.post('src/components/Login',async (req,res)=>{
    const existUser = await User.findOne({email: req.body.email});
    if(existUser){
        return res.status(200).json({massage: existUser});
    }else{
        res.status(400).send({massage: 'user does not exit'});
    }
})

app.listen(3001,()=>{console.log("server stated on port 3000")})