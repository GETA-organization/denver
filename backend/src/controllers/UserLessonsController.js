const User_lessons = require('../models/User_lessons');

module.exports = {
    async index (req,res){
        const { id } = req.params;
        
        const userLessons = await User_lessons.findAll({ where: { user_id: id } });

        return res.json(userLessons);
    },

    async store (req,res){
        const { user_id, lesson_id } = req.body;

        const userLesson = await User_lessons.create({ user_id, lesson_id });

        return res.json(userLesson);
    },

    async delete (req,res){
        const { user_id, lesson_id } = req.params;
        
        const userLessons = await User_lessons.findOne({ where: { user_id, lesson_id }});
 
        if (!userLessons){
            return res.status(401).send('User or Lesson not found');
        }

        userLessons.destroy();

        return res.send('Relation deleted');
    }
}