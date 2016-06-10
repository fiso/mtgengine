"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandTax extends UnimplementedCard {
  constructor (game) {
    super(game, "Land Tax", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LandTax;
