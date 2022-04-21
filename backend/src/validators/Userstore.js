const yup = require("yup");

const user = async (req, res, next) => {
  try{
      const schema = yup.object().shape({
          name: yup.string().required(),
          age: yup.number().required().positive().integer(),
          email: yup.string().email(),
          password: yup.string().min(6).required(),
          birthdate: yup.date().required(),
          role: yup.number().positive().integer(),
      });
      schema.validate(req.body);
      
      return next();
  } catch (err) {
      return res.status(400).json({
          message: "Validação falhou!",
      })
  }
};

module.exports = user;