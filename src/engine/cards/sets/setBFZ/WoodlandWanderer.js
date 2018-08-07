"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlandWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodland Wanderer", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WoodlandWanderer;
