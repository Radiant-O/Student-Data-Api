const pool = require("../../db");

const {
  getStuds,
  getStud,
  addStud,
  checkEmailExists,
  deleteStud,
  updateStud,
} = require("./queries");

const getStudents = (req, res) => {
  pool.query(getStuds, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const getStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStud, [id], (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  // check if email exists
  pool.query(checkEmailExists, [email], (err, results) => {
    if (results.rows.length) {
      res.send("Email Already Exist");
      return;
    }

    pool.query(addStud, [name, email, age, dob], (err, results) => {
      if (err) throw err;
      res.status(201).send("Student Created Successfully");
    });
  });
};

const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStud, [id], (err, results) => {
    const noStudent = !results.rows.length;
    if (noStudent) {
      res.send("Student does not exist");
      return;
    }
    pool.query(deleteStud, [id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student deleted Successfully");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  pool.query(getStud, [id], (err, results) => {
    const noStudent = !results.rows.length;

    if (noStudent) {
      res.send("Student does not exist");
      return;
    }

    pool.query(updateStud, [name, email, id], (err, results) => {
      if (err) throw err;
      res.status(200).send("Student Updated successfully");
    });
  });
};

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
};
