const { Router } = require('express');
const { getStudents, getStudent, addStudent, deleteStudent, updateStudent, } = require("./controller")
const router = Router();

router.get("/", getStudents).post("/", addStudent);
router.get("/:id", getStudent).delete("/:id", deleteStudent).put("/:id", updateStudent);
 
module.exports = router;