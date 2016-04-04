"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoastalPiracy extends Card {
  constructor(game) {
    super(game, "Coastal Piracy", "Eighth Edition", "8ED");
  }
}

module.exports = CoastalPiracy;
