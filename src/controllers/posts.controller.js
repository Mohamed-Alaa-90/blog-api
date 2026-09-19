export const createPost = (req, res) => {
  const { title, content } = req.body;

  res.status(201).json({
    title: title,
    content: content,
  });
};
