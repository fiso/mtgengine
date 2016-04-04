"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningTreeShaman extends Card {
  constructor(game) {
    super(game, "Burning-Tree Shaman", "Guildpact", "GPT");
  }
}

module.exports = BurningTreeShaman;
