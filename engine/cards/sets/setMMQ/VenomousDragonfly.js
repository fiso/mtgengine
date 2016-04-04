"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VenomousDragonfly extends UnimplementedCard {
  constructor(game) {
    super(game, "Venomous Dragonfly", "Mercadian Masques", "MMQ");
  }
}

module.exports = VenomousDragonfly;
