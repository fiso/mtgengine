"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Wanderer", "Kaladesh", "KLD");
  }
}

module.exports = WildWanderer;
