"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodcrazedPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodcrazed Paladin", "Ixalan", "XLN");
  }
}

module.exports = BloodcrazedPaladin;
