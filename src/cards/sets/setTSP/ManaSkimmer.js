"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaSkimmer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Skimmer", "Time Spiral", "TSP");
  }
}

module.exports = ManaSkimmer;
