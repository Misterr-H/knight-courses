
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course} from "./../models/courses"

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  console.log(req.body);

  const course = await Course.findOne(req.body);

  console.log(course.lectures);

  res.status(200).json(course.lectures);

}
