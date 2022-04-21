const yup = require("yup");

const lessons = async (req, res, next) => {
    try{
        const schema = yup.object().shape({
            title: yup.string().required(),
            description: yup.string().required(),
            video: yup.string().required(),
        });
        schema.validate(req.body);
        
        return next();
    } catch (err) {
        return res.status(400).json({
            message: "Validação falhou!",
        })
    }
};

module.exports = lessons;