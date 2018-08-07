"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fathom Mage", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FathomMage;
