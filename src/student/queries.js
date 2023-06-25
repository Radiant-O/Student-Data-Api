const getStuds = "SELECT * FROM stud";
const getStud = "SELECT * FROM stud WHERE id = $1";
const checkEmailExists = "SELECT s FROM stud s WHERE s.email = $1";
const addStud = "INSERT INTO stud(name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStud = "DELETE FROM stud WHERE id = $1";
const updateStud = "UPDATE stud SET name = $1 WHERE id = $2";

module.exports = { getStuds, getStud, addStud, checkEmailExists, deleteStud, updateStud }