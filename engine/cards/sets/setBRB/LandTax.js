"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandTax extends Card {
  constructor(game) {
    super(game, "Land Tax", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LandTax;
