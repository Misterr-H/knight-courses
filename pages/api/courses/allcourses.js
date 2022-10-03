

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Course from "./../models/courses"

export default async function handler(req, res) {

  const data = await Course.find({});

  res.status(200).json(data);

}
