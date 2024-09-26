import dbConcern from "@config/concerns/_db";
import viewConcern from "@config/concerns/_views";
import routerConcern from "@config/concerns/_router";

global.App = {};

const db = dbConcern(global.App);
const views = viewConcern(global.App);
const router = routerConcern(global.App);

export {
  db,
  views,
  router
};