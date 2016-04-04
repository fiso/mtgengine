"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricDragon extends Card {
  constructor(game) {
    super(game, "Vampiric Dragon", "Archenemy", "ARC");
  }
}

module.exports = VampiricDragon;
