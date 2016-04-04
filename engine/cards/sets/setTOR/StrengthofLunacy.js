"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrengthofLunacy extends Card {
  constructor(game) {
    super(game, "Strength of Lunacy", "Torment", "TOR");
  }
}

module.exports = StrengthofLunacy;
