"use strict";
const Constants = require ("../../../Constants");
const RockHydraBase = require("../setCED/RockHydra");

class RockHydra extends RockHydraBase {
  constructor (game) {
    super(game, "Rock Hydra", "Masters Edition IV", "ME4");
  }
}

module.exports = RockHydra;
