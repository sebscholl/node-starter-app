import dbConcern from "@config/concerns/db";
import viewConcern from "@config/concerns/views";
import routerConcern from "@config/concerns/router";


global.App = {};

const db = dbConcern(global.App);
const views = viewConcern(global.App);
const router = routerConcern(global.App);

export {
  db,
  views,
  router
};