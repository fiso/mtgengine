"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildCelebrants extends Card {
  constructor(game) {
    super(game, "Wild Celebrants", "Theros", "THS");
  }
}

module.exports = WildCelebrants;
