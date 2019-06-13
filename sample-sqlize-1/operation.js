const { Posts } = require("./dbDefine");

const getAll = async () => {
  return await Posts.findAll({});
};

const getOnly = async () => {
  return await Posts.findAll({
    where: {
      id: "100"
    }
  });
};

const createData = async ({ title, content }) => {
  return await Posts.create({
    title,
    content
  });
};

const updateData = async () => {
  return await Posts.update(
    {
      content: "This is a tutorial to learn Sequelize and PostgreSQL"
    },
    {
      where: {
        id: 1
      }
    }
  );
};

const deleteData = async () => {
  return await Posts.destroy({
    where: {
      id: 1
    }
  });
};

module.exports = {
  getAll,
  getOnly,
  createData,
  updateData,
  deleteData
};
