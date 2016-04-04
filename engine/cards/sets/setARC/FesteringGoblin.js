"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FesteringGoblin extends Card {
  constructor(game) {
    super(game, "Festering Goblin", "Archenemy", "ARC");
  }
}

module.exports = FesteringGoblin;
