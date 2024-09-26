import { globSync } from 'glob';
import Sequelize, { DataTypes } from 'sequelize';
import config from '@config/database.js';

export default function (appInstance) {
  const db = new Sequelize(config[process.env.NODE_ENV].url);

  globSync('./db/models/**/*.js').forEach(path => require(path)(db, DataTypes))

  appInstance.db = db;

  return db;
};
