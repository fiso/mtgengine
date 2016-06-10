"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoundryChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Foundry Champion", "Gatecrash", "GTC");
  }
}

module.exports = FoundryChampion;
