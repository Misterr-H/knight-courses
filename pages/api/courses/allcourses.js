

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from './../models/connection'

import {Course} from "../models/courses"

// Endpoint for showing all the courses to the user.

export default async function handler(req, res) {

  console.log("Connecting to mongo");

  await connection();

  console.log("Connecting to mongo");

  const data = await Course.find({});

  res.status(200).json(data);

}
