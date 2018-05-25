var express = require("express");
var router = express.Router();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.RDS_DB_NAME,
  process.env.RDS_USERNAME,
  process.env.RDS_PASSWORD,
  {
    host: process.env.RDS_HOSTNAME,
    dialect: "postgres",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    operatorsAliases: false
  }
);

const Name = sequelize.define("test", {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  name: Sequelize.TEXT
});

/* GET users listing. */
router.get("/", function(req, res, next) {
  Name.findAll().then(names => {
    res.json(names.map(({ id, name }) => ({ id, name })));
  });
});

module.exports = router;
