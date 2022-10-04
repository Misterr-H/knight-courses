
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course} from "../models/courses"

const dotenv = require('dotenv');

// Endpoint for adding new courses. This operation is only available for the admin user.

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  console.log(req.body);

  const authHeader = req.headers.authorization;

  const token = (authHeader && authHeader.split(" ")[1]) || req.query.token;

  // checking if the user is admin or not.

  if (token === process.env.ADMIN){


    const newCourse = Course(req.body)


    newCourse.save((err) => {

      if (err){

        res.status(404).json({message: "Course didn't added."})

      }

      else{

        res.status(201).json({message: "Course added!"})
      }
    })



  }

  else{

    res.status(401).json({message: "You're not authorized to perform this action."})
  }
  


}
