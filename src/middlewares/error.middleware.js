export const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};
