
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course} from "./../models/courses"

const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  console.log(req.body);


  try{

    const newCourse = await Course.findOne(req.body)

    if (newCourse){


      const authHeader = req.headers.authorization;

      const token = (authHeader && authHeader.split(" ")[1]) || req.query.token;

      let userdata = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log(userdata);

      newCourse.enrolls.push(userdata);

      res.status(401).json({message: "Enrolled"});


    }


    else{

      res.status(404).json({message: "Course didn't exists."})
    }

  }

  catch(err){

    res.status(401).json(err)
  }


}
