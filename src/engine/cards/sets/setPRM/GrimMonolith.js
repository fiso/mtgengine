"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimMonolith extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Monolith", "Magic Online Promos", "PRM");
  }
}

module.exports = GrimMonolith;
