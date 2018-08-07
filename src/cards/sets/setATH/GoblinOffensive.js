"use strict";
const Constants = require ("../../../Constants");
const GoblinOffensiveBase = require("../setHOP/GoblinOffensive");

class GoblinOffensive extends GoblinOffensiveBase {
  constructor (game) {
    super(game, "Goblin Offensive", "Anthologies", "ATH");
  }
}

module.exports = GoblinOffensive;
