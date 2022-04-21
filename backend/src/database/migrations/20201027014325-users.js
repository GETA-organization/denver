'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('users', { 
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       age: {
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       email: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
       },
       password_hash: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       image: {
         type: Sequelize.STRING,
         allowNull: true,
       },
       birthdate: {
         type: Sequelize.DATEONLY,
         allowNull: false,
       },
       role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'roles', key: 'id' },
      },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};