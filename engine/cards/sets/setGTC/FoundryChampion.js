"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoundryChampion extends Card {
  constructor(game) {
    super(game, "Foundry Champion", "Gatecrash", "GTC");
  }
}

module.exports = FoundryChampion;
