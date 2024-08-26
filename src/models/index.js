import { Sequelize, DataTypes } from "sequelize";
import path from "path";
import fs from 'fs/promises';
import dbConfig from "../config/db.config";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    maxConcurrentQueries: 100,
    benchmark: true,
    logging: false,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const database = {};
const excludedFiles = ['.', '..', 'index.js'];
let files = await fs.readdir('./src/models');

for (let fileName of files) {
    if (!excludedFiles.includes(fileName) && (path.extname(fileName) === '.js')) {
        const getModel = await import('./' + fileName)
        let model = await getModel.default(sequelize, DataTypes)
        database[model.name] = model;
    }
}

Object.keys(database).forEach(modelName => {
    if (database[modelName].associate) {
        database[modelName].associate(database);
    }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize
database.sequelize.sync({ force: false }).then(() => {
    console.log("yes re-sync done!");
});

export default database;