"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryHornet extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Hornet", "Aether Revolt", "AER");
  }
}

module.exports = FoundryHornet;
