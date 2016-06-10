"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Prism Ring", "Magic Origins", "ORI");
  }
}

module.exports = PrismRing;
