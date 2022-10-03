// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import User from "./../models/UserDetails"

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  const newUser = User({username: req.body.username, email: req.body.email, password: req.body.password})

  newUser.save((err) => {

    if (err){
      res.status(404).json({message: "User didn't created."})
    }

    else{

      res.status(201).json({message: "User created!"})
    }
  })

}
