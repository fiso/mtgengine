"use strict";
const Constants = require ("../../../Constants");
const GoblinTinkererBase = require("../setATH/GoblinTinkerer");

class GoblinTinkerer extends GoblinTinkererBase {
  constructor(game) {
    super(game, "Goblin Tinkerer", "Mirage", "MIR");
  }
}

module.exports = GoblinTinkerer;
