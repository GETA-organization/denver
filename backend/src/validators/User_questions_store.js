const yup = require("yup");

const userQuestions = async (req, res, next) => {
    try{
        const schema = yup.object().shape({
            user_id: yup.number().positive().integer().required(),
            question_id: yup.number().positive().integer().required(),
            answer: yup.number().positive().integer().required(),
        });
        schema.validate(req.body);
        
        return next();
    } catch (err) {
        return res.status(400).json({
            message: "Validação falhou!",
        })
    }
};

module.exports = userQuestions;