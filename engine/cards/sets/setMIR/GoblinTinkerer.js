"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinTinkererBase = require("../setATH/GoblinTinkerer.js");

class GoblinTinkerer extends GoblinTinkererBase {
  constructor(game) {
    super(game, "Goblin Tinkerer", "Mirage", "MIR");
  }
}

module.exports = GoblinTinkerer;
