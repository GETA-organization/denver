const Question = require("../models/Question");

module.exports = {
    async index (req, res){
        const questions = await Question.findAll();

        return res.json(questions);
    },
    async store (req, res) {
        const { question, answers, right_answer, lesson_id } = req.body;

        const quest = await Question.create({ question, answers, right_answer, lesson_id });

        return res.json(quest); 
    },

    async update(req, res){
        const { id } = req.params;
        const { question, answers, right_answer } = req.body;

        const quest = await Question.findOne({ where: { id }});

        if (!quest){
            return res.status(401).send('Question not found');
        }

        quest.update({ question, answers, right_answer });

        quest.save();

        return res.json(quest);
    },
    async delete(req, res){
        const { id } = req.params;

        const question = await Question.findOne({ where: { id } });

        if(!question){
            return res.status(401).send('Question not found!');
        }
        
        question.destroy();

        return res.send(`Question ${id} deleted.`);
    }
}