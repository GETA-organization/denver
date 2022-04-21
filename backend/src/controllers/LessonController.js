const Lessons = require("../models/Lessons");

module.exports = {
    async index (req, res){
        const lessons = await Lessons.findAll();

        return res.json(lessons);
    },
    async getLesson(req,res){
        const { id } = req.params;

        const lesson = await Lessons.findOne({ where: { id }});

        return res.json(lesson);
    },
    async store (req, res) {
        const { title, description, video } = req.body;

        const lesson = await Lessons.create({ title, description, video });

        return res.json(lesson);
    },
    async update (req, res) {
        const { id } = req.params;
        const { title, description, video} = req.body;

        const lesson = await Lessons.findOne({ where: { id } });

        if (!lesson){
            return res.status(401).send('Lesson not found');
        }

        lesson.update({ title, description, video });

        lesson.save();

        return res.json(lesson); 
    },
    async delete(req, res){
        const { id } = req.params;

        const lesson = await Lessons.findOne({ where: { id } });

        if(!lesson){
            return res.status(401).send('Lesson not found!');
        }
        
        lesson.destroy();

        return res.send(`Lesson ${id} deleted.`);
    }
}