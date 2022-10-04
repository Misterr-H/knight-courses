
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course, Status} from "./../models/courses"

const dotenv = require('dotenv');

const jwt = require('jsonwebtoken');

// Endpoint for tracking progress of the user.

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  try{

    const newCourse = await Course.findOne(req.body)

    // checking if the course is exists or not.

    if (newCourse){


      // authenticating user
      const authHeader = req.headers.authorization;

      const token = (authHeader && authHeader.split(" ")[1]) || req.query.token;

      let userdata = jwt.verify(token, process.env.JWT_SECRET_KEY);

      
      // lectures of the course
      let courseLectures = newCourse.lectures;

      // variable for storing how many lectures a user has completed so far.
      let lecturesDone;

      // checking if the user has done this lecture or not.
      courseLectures.forEach(async ele => {

        const done = await Status.findOne({lecture: ele.lecture_title});


        if (done){

          lecturesDone += 1;

        }

      })

      res.status(200).json({lecturesDone: lecturesDone});


    }


    else{

      res.status(404).json({message: "Course didn't exists."})

    }

  }

  catch(err){

    res.status(401).json(err)

  }


}
