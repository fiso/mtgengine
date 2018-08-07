"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Mage", "Iconic Masters", "IMA");
  }
}

module.exports = BlindingMage;
