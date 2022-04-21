const { Model, Sequelize } = require('sequelize');

class User_lessons extends Model{
    static init(sequelize) {
        super.init({
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Lessons, { foreignKey: 'lesson_id', as: 'lesson' });
    }
}
module.exports = User_lessons;