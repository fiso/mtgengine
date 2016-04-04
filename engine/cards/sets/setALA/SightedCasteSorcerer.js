"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SightedCasteSorcerer extends UnimplementedCard {
  constructor(game) {
    super(game, "Sighted-Caste Sorcerer", "Shards of Alara", "ALA");
  }
}

module.exports = SightedCasteSorcerer;
