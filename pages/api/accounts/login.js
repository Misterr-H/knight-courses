
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');


import User from "./../models/UserDetails.js"


// Endpoint for loging in user and providing jsonwebtoken.

export default async function handler(req, res) {


  const username = req.body.username;
  const password = req.body.password;

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");


  let user;


  try{

    // if user exists then check the password, if password matches the provide the token in response.
    
    user = await User.findOne({username: username});

    if (user && user.password === password){

      const token = jwt.sign(user.username, process.env.JWT_SECRET_KEY);

      res.status(200).json({
        token
      });

    }

    else{

      res.status(401).json({message: "Password didn't match."})

    }

  }

  catch(err){

    res.send(err)

  }

}
