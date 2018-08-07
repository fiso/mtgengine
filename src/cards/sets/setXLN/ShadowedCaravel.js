"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowedCaravel extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadowed Caravel", "Ixalan", "XLN");
  }
}

module.exports = ShadowedCaravel;
