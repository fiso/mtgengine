"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrineElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Brine Elemental", "Masters 25", "A25");
  }
}

module.exports = BrineElemental;
