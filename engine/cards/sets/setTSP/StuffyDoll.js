"use strict";
const Constants = require ("../../../Constants");
const StuffyDollBase = require("../setM13/StuffyDoll");

class StuffyDoll extends StuffyDollBase {
  constructor(game) {
    super(game, "Stuffy Doll", "Time Spiral", "TSP");
  }
}

module.exports = StuffyDoll;
