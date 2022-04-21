const { Model, Sequelize } = require('sequelize');

class Lessons extends Model{
    static init(sequelize) {
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            video: Sequelize.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasMany(models.Question, { foreignKey: 'id', as: 'questions' });
    }
}

module.exports = Lessons;