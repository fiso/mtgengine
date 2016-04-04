"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Spike Weaver", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeWeaver;
