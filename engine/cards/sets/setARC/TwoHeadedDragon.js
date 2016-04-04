"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwoHeadedDragon extends Card {
  constructor(game) {
    super(game, "Two-Headed Dragon", "Archenemy", "ARC");
  }
}

module.exports = TwoHeadedDragon;
