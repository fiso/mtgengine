"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Harvest Wurm", "World Championship Decks 1997", "WC97");
  }
}

module.exports = HarvestWurm;
