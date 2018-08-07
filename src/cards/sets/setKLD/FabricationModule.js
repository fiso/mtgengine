"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FabricationModule extends UnimplementedCard {
  constructor (game) {
    super(game, "Fabrication Module", "Kaladesh", "KLD");
  }
}

module.exports = FabricationModule;
