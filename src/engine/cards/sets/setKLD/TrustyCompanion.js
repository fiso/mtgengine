"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrustyCompanion extends UnimplementedCard {
  constructor (game) {
    super(game, "Trusty Companion", "Kaladesh", "KLD");
  }
}

module.exports = TrustyCompanion;
