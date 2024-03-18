const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");

// add routes

router
  .route("/")
  .get(studentController.getStudents)
  .post(studentController.addStudent);
// router.get("/", studentController.getStudents);
// router.post("/", studentController.addStudent);

router
  .route("/:id")
  .get(studentController.getStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);
// router.get("/:id", studentController.getStudent);
// router.put("/:id", studentController.updateStudent);
// router.delete("/:id", studentController.deleteStudent);

module.exports = router;
