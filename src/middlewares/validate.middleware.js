export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (result.success) {
      return next();
    }

    const errors = result.error.flatten().fieldErrors;

    const formattedErrors = Object.fromEntries(
      Object.entries(errors).map(([field, messages]) => [field, messages[0]]),
    );

    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: formattedErrors,
    });
  };
};
