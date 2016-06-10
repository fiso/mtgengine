"use strict";
const Constants = require ("../../../Constants");
const RockHydraBase = require("../setCED/RockHydra");

class RockHydra extends RockHydraBase {
  constructor (game) {
    super(game, "Rock Hydra", "Revised Edition", "3ED");
  }
}

module.exports = RockHydra;
