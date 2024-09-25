import { globSync } from 'glob';
import Sequelize, { DataTypes } from 'sequelize';

import config from '@config/database.js';

const { url } = config[process.env.NODE_ENV];

const sequelize = new Sequelize(url);

globSync('./db/models/**/*.js').forEach(path => require(path)(sequelize, DataTypes))

export default sequelize;