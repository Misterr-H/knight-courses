
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'


import User from "./../models/UserDetails.js"

// const User = require("./../models/UserDetails");

export default async function handler(req, res) {


  const username = req.body.username;
  const password = req.body.password;

  let user;


  try{

    user = await User.findOne({username: username});

    if (user && user.password === password){

      res.status(200).json({message: "login Successfully."})
    }

    else{

      res.status(404).json({message: "Password didn't match."})
    }

  }

  catch(err){

    res.status(404).json(err)
    return;

  }

}
