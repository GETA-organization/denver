const yup = require("yup");

const questions = async (req, res, next) => {
    try{
        const schema = yup.object().shape({
            question: yup.string().required(),
            answers: yup.array().required(),
            right_answer: yup.number().integer().required(),
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

module.exports = questions;