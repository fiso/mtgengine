"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PredatorDragon extends Card {
  constructor(game) {
    super(game, "Predator Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = PredatorDragon;
