const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:123456789@localhost:5432/sample",
  {
    //   host: 'localhost',
    dialect: "postgres",
    pool: {
      max: 9,
      min: 0,
      idle: 10000
    }
  }
);

module.exports = sequelize;
