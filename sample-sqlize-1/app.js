const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const sequelize = require("./dbConfig");
const { syncDatabase } = require("./dbDefine");
const operation = require("./operation");

app.get("/all", async (req, res) => {
  const getAllData = await operation.getAll();
  //   console.log({
  //     getAllData
  //   });
  res.send(getAllData);
});

app.get("/only", async (req, res) => {
  const getOnly = await operation.getOnly();
  //   console.log({
  //     getOnly
  //   });

  res.send(getOnly);
});

app.post("/", async (req, res) => {
  const createdData = await operation.createData(req.body);
  //   console.log({
  //     createdData
  //   });
  res.send(createdData);
});

app.patch("/", async (req, res) => {
  const createdData = await operation.createData();
  //   console.log({
  //     createdData
  //   });
  res.send(createdData);
});

app.delete("/", async (req, res) => {
  const createdData = await operation.createData();
  //   console.log({
  //     createdData
  //   });
  res.send(createdData);
});

sequelize.authenticate().then(async () => {
  console.log("Database connected!");

  await syncDatabase();

  await operation.createData({
    title: "Getting Started with PostgreSQL and Sequelize",
    content: "Hello there"
  });

  app.listen(3000, () => {
    console.log("====================================");
    console.log("Server start on port 3000");
    console.log("====================================");
  });
});
