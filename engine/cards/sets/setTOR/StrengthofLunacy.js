"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthofLunacy extends UnimplementedCard {
  constructor(game) {
    super(game, "Strength of Lunacy", "Torment", "TOR");
  }
}

module.exports = StrengthofLunacy;
