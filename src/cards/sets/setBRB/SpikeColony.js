"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeColony extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Colony", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeColony;
