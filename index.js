// console.log("ini node js");

const express = require("express");
const students = require("./data/students.json");
const route = require("./route");

// initiate express app
const app = express();
const port = 3000;

// enable request body(json)
app.use(express.json());

app.use("/", express.static("public"));
// add routes

app.use("/", route);

// app.post("/students", (req, res) => {
//   // validate the request from user
//   const { name, address } = req.body;
//   if (!name || name == "") {
//     return res.status(400).json({
//       data: null,
//       message: "Name must be filled!",
//     });
//   }
//   if (!address) {
//     return res.status(400).json({
//       data: null,
//       message: "Address must be filled!",
//     });
//   }

//   const { city, province } = address;
//   if (!city || city == "") {
//     return res.status(400).json({
//       data: null,
//       message: "City must be filled!",
//     });
//   }
//   if (!province || province == "") {
//     return res.status(400).json({
//       data: null,
//       message: "Province must be filled!",
//     });
//   }
//   /* Process insert data */
//   // get the last id and then add 1
//   const lastStudent = students[students.length - 1];
//   req.body = {
//     id: lastStudent.id + 1,
//     ...req.body,
//   };
//   // Insert to data student
//   students.push(req.body);

//   res.status(201).json({
//     data: req.body,
//     message: null,
//   });
// });

// Update Student
// app.put("/students/:id", (req, res) => {
//   // validate the request from user
//   const { name, address } = req.body;
//   if (!name || name == "") {
//     return res.status(400).json({
//       data: null,
//       message: "Name must be filled!",
//     });
//   }

//   const { city, province } = address;
//   if (!city || city == "") {
//     return res.status(400).json({
//       data: null,
//       message: "City must be filled!",
//     });
//   }
//   if (!province || province == "") {
//     return res.status(400).json({
//       data: null,
//       message: "Province must be filled!",
//     });
//   }

//   const id = parseInt(req?.params?.id);
//   const updatedStudent = {
//     id: id,
//     ...req.body,
//   };

//   // Update the data by id
//   students.map((student, index) => {
//     if (student?.id == id) {
//       students[index] = updatedStudent;
//     }
//   });
//   res.status(200).json({
//     data: updatedStudent,
//     message: null,
//   });
// });

// delete students
// app.delete("/students/:id", (req, res) => {
//   const id = parseInt(req?.params?.id);

//   index = students.findIndex((student) => student.id === id);
//   students.splice(index, 1);

//   res.status(200).json({
//     data: null,
//     message: "Success",
//   });
// });

app.listen(port, () => {
  console.log(`server running on ${port}!`);
});
