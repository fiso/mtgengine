"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostLegacy extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Legacy", "Kaladesh", "KLD");
  }
}

module.exports = LostLegacy;
