"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Blinding Mage", "Magic 2010", "M10");
  }
}

module.exports = BlindingMage;
