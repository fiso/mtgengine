"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreedingPool extends Card {
  constructor(game) {
    super(game, "Breeding Pool", "Dissension", "DIS");
  }
}

module.exports = BreedingPool;
