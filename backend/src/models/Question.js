const { Model, Sequelize } = require('sequelize');

class Question extends Model{
    static init(sequelize) {
        super.init({
            question: Sequelize.STRING,
            answers: Sequelize.ARRAY(Sequelize.TEXT),
            right_answer: Sequelize.INTEGER,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Lessons, { foreignKey: 'lesson_id', as: 'lesson' });
    }
}

module.exports = Question;