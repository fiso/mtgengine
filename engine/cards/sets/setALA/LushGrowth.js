"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LushGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Lush Growth", "Shards of Alara", "ALA");
  }
}

module.exports = LushGrowth;
