const { Model, Sequelize } = require('sequelize');

const bcrypt = require('bcrypt');

class User extends Model{
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            age: Sequelize.INTEGER,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            image: Sequelize.STRING,
            birthdate: Sequelize.STRING,
        }, {
            sequelize
        });

        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this
    }

    static associate(models) {
        this.hasMany(models.User_questions, { foreignKey: 'question_id', as: 'questions' });
        this.hasMany(models.User_lessons, { foreignKey: 'lesson_id', as: 'lesson' });
        this.belongsTo(models.Role, { foreignKey: "role_id", as: "role" })
    }
}

module.exports = User;