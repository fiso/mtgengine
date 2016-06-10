"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedSpark extends UnimplementedCard {
  constructor (game) {
    super(game, "Seed Spark", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SeedSpark;
