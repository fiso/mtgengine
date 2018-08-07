"use strict";
const Constants = require ("../../../Constants");
const MigratoryRouteBase = require("../setCM2/MigratoryRoute");

class MigratoryRoute extends MigratoryRouteBase {
  constructor (game) {
    super(game, "Migratory Route", "You Make the Cube", "PZ2");
  }
}

module.exports = MigratoryRoute;
