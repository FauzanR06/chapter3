const studentUsecase = require("../usecase/student");

exports.getStudents = (req, res) => {
  const { name, city, province } = req.query;

  // call the usecase
  const data = studentUsecase.getStudents(name, city, province);

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.getStudent = (req, res, next) => {
  const { id } = req.params;

  const data = studentUsecase.getStudent(id);
  if (!data) {
    return next({
      statusCode: 404,
      message: `Student with id ${id} is not found!`,
    });
  }

  const response = {
    data: data,
    message: null,
  };

  res.status(200).json(response);
};

exports.addStudent = (req, res, next) => {
  // validate the request from user
  const { name, address } = req.body;
  if (!name || name == "") {
    return next({
      statusCode: 400,
      message: "Name must be filled!",
    });
  }
  if (!address) {
    return next({
      statusCode: 400,
      message: "Address must be filled!",
    });
  }

  const { city, province } = address;
  if (!city || city == "") {
    return next({
      statusCode: 400,
      message: "City must be filled!",
    });
  }
  if (!province || province == "") {
    return next({
      statusCode: 400,
      message: "Province must be filled!",
    });
  }
  /* Process insert data */
  const data = studentUsecase.addStudent(req.body);

  res.status(201).json({
    data,
    message: null,
  });
};

exports.updateStudent = (req, res, next) => {
  const { name, address } = req.body;
  if (!name || name == "") {
    return next({
      statusCode: 400,
      message: "Name must be filled!",
    });
  }

  const { city, province } = address;
  if (!city || city == "") {
    return next({
      statusCode: 400,
      message: "City must be filled!",
    });
  }
  if (!province || province == "") {
    return next({
      statusCode: 400,
      message: "Province must be filled!",
    });
  }

  const id = parseInt(req?.params?.id);

  /* Process update data */
  studentUsecase.updateStudent(id, req.body);

  const updatedStudent = studentUsecase.getStudent(id);

  res.status(200).json({
    data: updatedStudent,
    message: null,
  });
};

exports.deleteStudent = (req, res) => {
  const id = parseInt(req?.params?.id);

  const data = studentUsecase.deleteStudent(id);

  res.status(200).json({
    data,
    message: "Success",
  });
};
