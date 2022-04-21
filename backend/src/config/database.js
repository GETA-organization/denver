require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    production: {
        "use_env_variable": "DATABASE_URL",
        "dialect": "postgres",
        "operatorsAliases": false
    },
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
    }
}
