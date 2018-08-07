"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlyDesigns extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadly Designs", "Masters 25", "A25");
  }
}

module.exports = DeadlyDesigns;
