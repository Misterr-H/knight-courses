import connection from './../models/connection'

import {Course} from "../models/courses"
import * as constants from "constants";

export default async function handler(req, res) {
    await connection();
    const course = await Course.findOne({_id: req.body.id});
    console.log(req.body);
    res.status(200).json(course);
}