const express = require("express");
const { studentController } = require("./student.controller");

const router = express.Router();

router.get("/", studentController.getStudent);

exports.studentRouter = router ;

