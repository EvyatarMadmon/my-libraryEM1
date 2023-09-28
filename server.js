const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



try{
    mongoose.connect('mongodb+srv://0526604945:henyair2002@cluster0.ddnnane.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
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



app.post('/components/SingIn',async(req,res)=>{
    try{
        console.log("hahahahah")
        console.log(req.body.email);
        console.log("hahahahah");
        const existUser = await User.findOne({email:req.body.email})
        if(existUser){
            return res.status(400).send({massage:'email already exists'});
        }

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate:req.body.birthdate,
            gender:req.body.gender,
            email:req.body.Email,
            password:req.body.Password,
        })
        try{
            console.log(newUser)
            await newUser.save();
        }catch(error){
            console.log("you cant signup")
            res.status(500).send(error)
        }
        res.status(201).send({massage:'user created successfully'});
    }catch(error){
        console.error(error);
        res.status(500).send({massage:'Internal server error'});
    }
    
})


app.post('/components/Login',async (req,res)=>{
    console.log('Request Body:', req.body);
    const existUser = await User.findOne({email: req.body.email});
    console.log(existUser)
    if(existUser){
        console.log("you connected to the web")
        return res.status(200).json({massage: existUser});
    }else{
        console.log("you falied to the web")
        res.status(404).send({massage: 'user does not exit'});
    }
})

app.listen(3001,()=>{console.log("server stated on port 3001")})