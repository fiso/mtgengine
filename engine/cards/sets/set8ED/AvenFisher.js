"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenFisher extends Card {
  constructor(game) {
    super(game, "Aven Fisher", "Eighth Edition", "8ED");
  }
}

module.exports = AvenFisher;
