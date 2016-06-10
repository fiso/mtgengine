"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningTreeShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning-Tree Shaman", "Guildpact", "GPT");
  }
}

module.exports = BurningTreeShaman;
