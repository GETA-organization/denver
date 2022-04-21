const Sequelize = require('sequelize');
const dbconfig = require('../config/database');

const User = require('../models/User');
const Lessons = require('../models/Lessons');
const Question = require('../models/Question');
const User_questions = require('../models/User_questions');
const User_lessons = require('../models/User_lessons');
const Role = require('../models/Role');

const models = [User, Lessons, Question, User_questions, User_lessons, Role];

const connection = new Sequelize(dbconfig);

models.map((model) => model.init(connection));

models.map((model) => model.associate && model.associate(connection.models));

module.exports = connection;
