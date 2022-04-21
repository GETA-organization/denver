'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      lesson_id:  {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'lessons', key: 'id' },
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answers: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false,        
      },
      right_answer: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};