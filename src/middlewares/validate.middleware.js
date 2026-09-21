export const validate = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (result.success) {
      return next();
    }

    const errors = result.error.flatten();

    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: {
        ...errors.fieldErrors,
        form: errors.formErrors,
      },
    });
  };
};
