"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeinDrinker extends Card {
  constructor(game) {
    super(game, "Vein Drinker", "Shards of Alara", "ALA");
  }
}

module.exports = VeinDrinker;
