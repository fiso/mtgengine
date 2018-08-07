"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelLeafPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Leaf Paladin", "Planeshift", "PLS");
  }
}

module.exports = SteelLeafPaladin;
