"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientCraving extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Craving", "Masters 25", "A25");
  }
}

module.exports = AncientCraving;
