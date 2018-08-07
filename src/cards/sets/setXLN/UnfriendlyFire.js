"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnfriendlyFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Unfriendly Fire", "Ixalan", "XLN");
  }
}

module.exports = UnfriendlyFire;
