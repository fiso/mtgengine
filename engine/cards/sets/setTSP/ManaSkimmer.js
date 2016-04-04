"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaSkimmer extends Card {
  constructor(game) {
    super(game, "Mana Skimmer", "Time Spiral", "TSP");
  }
}

module.exports = ManaSkimmer;
