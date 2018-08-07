"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecoctionModule extends UnimplementedCard {
  constructor (game) {
    super(game, "Decoction Module", "Kaladesh", "KLD");
  }
}

module.exports = DecoctionModule;
