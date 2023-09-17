import fs from "fs";

export const saveToJsonDB = (filepath,data) => {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2), {
    encoding: "utf-8",
  });
};

export const validatorHandler = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);

  if (error) {
     res.status(400).json({
          status: 'error',
          message: error.details[0].message.replace('/[^a-zA-Z0-9 ]/g', '')
      });
      return;
  }
  next();
};

export const asyncHandler = (cb) => async (req, res, next) => {
  try {
      await cb(req, res, next);
  } catch (err) {
      return res.status(500).json({
          status: 'error',
          message: err.message
      });
  }
  return true;
}
