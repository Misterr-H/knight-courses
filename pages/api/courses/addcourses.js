
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import Course from "./../models/courses"

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  console.log(req.body);
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
