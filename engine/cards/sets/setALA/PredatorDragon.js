"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatorDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Predator Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = PredatorDragon;
