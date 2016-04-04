"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShivanEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Shivan Emissary", "Invasion", "INV");
  }
}

module.exports = ShivanEmissary;
