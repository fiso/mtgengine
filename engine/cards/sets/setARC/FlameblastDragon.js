"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameblastDragon extends Card {
  constructor(game) {
    super(game, "Flameblast Dragon", "Archenemy", "ARC");
  }
}

module.exports = FlameblastDragon;
