"use strict";
const Constants = require ("../../../Constants");
const RockHydraBase = require("../setCED/RockHydra");

class RockHydra extends RockHydraBase {
  constructor (game) {
    super(game, "Rock Hydra", "Limited Edition Beta", "LEB");
  }
}

module.exports = RockHydra;
