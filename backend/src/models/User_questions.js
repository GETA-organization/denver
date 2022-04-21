const { Model, Sequelize } = require('sequelize');

class User_questions extends Model{
    static init(sequelize) {
        super.init({
            answer: Sequelize.INTEGER,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Question, { foreignKey: 'question_id', as: 'question' });
    }
}
module.exports = User_questions;