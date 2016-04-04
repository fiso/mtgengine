"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameElemental extends Card {
  constructor(game) {
    super(game, "Flame Elemental", "Mirage", "MIR");
  }
}

module.exports = FlameElemental;
