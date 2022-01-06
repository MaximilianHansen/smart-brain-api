import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import knex from "knex";
import bcrypt from "bcrypt-nodejs";
import handleRegister from "./controllers/register.js";
import signIn from "./controllers/signin.js";
import getId from "./controllers/id.js";
import handleApiCall from "./controllers/clarifai.js";
import getEntries from "./controllers/entries.js"

const db = knex({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl: true,
    }
  });

const app = express();

app.use(bodyParser.json());
app.use(cors({orgin : 'http://localhost:3000'}))

app.get("/", (req,res) => {res.send('app is working')})

app.post('/signin', (req,res)=> {signIn(req, res, db, bcrypt)});

app.post('/register', (req,res) => {handleRegister(req,res, db, bcrypt)});

app.get('/profile/:id', (req,res)=> {getId(req, res)});

app.put('/image', (req,res) => {getEntries(req, res, db)})

app.post('/imageurl', (req,res) => {handleApiCall(req, res)})

const PORT = process.env.PORT

app.listen(PORT, ()=> {console.log(`app is running on port ${PORT}`)});

