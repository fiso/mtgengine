"use strict";
const Constants = require ("../../../Constants");
const MigratoryRouteBase = require("../setCM2/MigratoryRoute");

class MigratoryRoute extends MigratoryRouteBase {
  constructor (game) {
    super(game, "Migratory Route", "Commander 2016", "C16");
  }
}

module.exports = MigratoryRoute;
