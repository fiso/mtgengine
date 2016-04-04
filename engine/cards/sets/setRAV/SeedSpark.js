"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeedSpark extends Card {
  constructor(game) {
    super(game, "Seed Spark", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeedSpark;
