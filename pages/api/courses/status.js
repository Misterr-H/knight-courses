
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course, Status} from "./../models/courses"

const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');



// Endpoint for tracking status i.e. whether the course is completed/uncompleted by the user.

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  try{

      const authHeader = req.headers.authorization;

      const token = (authHeader && authHeader.split(" ")[1]) || req.query.token;

      let userdata = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log(userdata);

      const status = await Status.findOne(req.body);

      if (status){

        res.status(200).json({message: "Already Completed!"})
      }

      else{

        const newStatus = Status(req.body);

        newStatus.save((err) => {

          if (err){

            res.status(404).json({message: "Status didn't update."});

          }

          else{

            res.status(201).json({message: "User updated!"});

          }

        })


        res.status(200).json({message: "Done!"})
      }

  }

  catch(err){

    res.status(401).json(err)
  }


}
