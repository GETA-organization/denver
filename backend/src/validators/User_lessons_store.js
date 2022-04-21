const yup = require("yup");

const userLessons = async (req, res, next) => {
    try{
        const schema = yup.object().shape({
            user_id: yup.number().positive().integer().required(),
            lesson_id: yup.number().positive().integer().required(),
        });
        schema.validate(req.body);
        
        return next();
    } catch (err) {
        return res.status(400).json({
            message: "Validação falhou!",
        })
    }
};

module.exports = userLessons;