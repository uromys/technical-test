const passwordValidator = require("password-validator");
const AWS = require("aws-sdk");

function validatePassword(password) {
  const schema = new passwordValidator();
  schema
    .is()
    .min(8)
    .is()
    .max(100);

  return schema.validate(password);
}

module.exports = {
  validatePassword,
};
