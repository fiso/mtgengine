"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrideGuardian extends Card {
  constructor(game) {
    super(game, "Pride Guardian", "Magic 2012", "M12");
  }
}

module.exports = PrideGuardian;
