"use strict";
const Constants = require ("../../../Constants");
const AlliedStrategiesBase = require("../setDDE/AlliedStrategies");

class AlliedStrategies extends AlliedStrategiesBase {
  constructor(game) {
    super(game, "Allied Strategies", "Planeshift", "PLS");
  }
}

module.exports = AlliedStrategies;
