"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientCraving extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Craving", "Commander 2015", "C15");
  }
}

module.exports = AncientCraving;
