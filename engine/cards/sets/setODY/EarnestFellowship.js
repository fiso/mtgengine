"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarnestFellowship extends Card {
  constructor(game) {
    super(game, "Earnest Fellowship", "Odyssey", "ODY");
  }
}

module.exports = EarnestFellowship;
