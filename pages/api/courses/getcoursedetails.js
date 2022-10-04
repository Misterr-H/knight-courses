import connection from './../models/connection'

import {Course} from "../models/courses"

export default async function handler(req, res) {
    await connection();
    const course = await Course.findOne(req.body);
    res.status(200).json(course);
}