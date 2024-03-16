const studentRepo = require("../../repository/student/index");

exports.getStudents = (name, city, province) => {
  const data = studentRepo.getStudents(name, city, province);
  return data;
};

exports.getStudent = (id) => {
  const data = studentRepo.getStudent(id);
  return data;
};

exports.addStudent = (payload) => {
  const data = studentRepo.addStudent(payload);
  return data;
};

exports.updateStudent = (id, updatedStudentData) => {
  const data = studentRepo.updateStudent(id, updatedStudentData);
  return data;
};

exports.deleteStudent = (id) => {
  const data = studentRepo.deleteStudent(id);
  return data;
};
