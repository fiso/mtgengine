"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreedingPool extends UnimplementedCard {
  constructor (game) {
    super(game, "Breeding Pool", "Dissension", "DIS");
  }
}

module.exports = BreedingPool;
