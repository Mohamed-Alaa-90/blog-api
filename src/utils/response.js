export const sendSuccess = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

export const sendError = (res, statusCode, message, errors = null) => {
  const response = {
    status: "error",
    message,
  };

  if (errors !== null) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};
