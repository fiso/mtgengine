"use strict";
const Constants = require ("../../../Constants");
const RushingRiverBase = require("../setWC02/RushingRiver");

class RushingRiver extends RushingRiverBase {
  constructor (game) {
    super(game, "Rushing River", "Planeshift", "PLS");
  }
}

module.exports = RushingRiver;
