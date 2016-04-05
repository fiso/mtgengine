"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrifyingPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Terrifying Presence", "Avacyn Restored", "AVR");
  }
}

module.exports = TerrifyingPresence;
