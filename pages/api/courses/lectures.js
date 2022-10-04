
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course} from "./../models/courses"

// Endpoint for listing all lectures of a course.

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  console.log(req.body);


  try{

    const course = await Course.findOne(req.body);


    if (course)

    {

      console.log(course.lectures);

      res.status(200).json(course.lectures);

    }

    else{

      res.status(404).json({message: "Course not found"});
    }


  }

  catch(err){

    res.status(401).json(err);
  }





}
