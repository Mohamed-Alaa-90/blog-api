export const response = (res, statuscode, message, data) => {
  res.status(statuscode).json({
    status: statuscode >= 200 && statuscode < 300 ? "success" : "error",
    message,
    data,
  });
};
