const Sequelize = require("sequelize");
const sequelize = require("./dbConfig");

const Posts = sequelize.define(
  "posts",
  {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true
  }
);

const syncDatabase = async () => {
  await Posts.sync();
};

module.exports = {
  Posts,
  syncDatabase
};
