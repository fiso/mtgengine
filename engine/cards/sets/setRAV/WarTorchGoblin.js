"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarTorchGoblin extends Card {
  constructor(game) {
    super(game, "War-Torch Goblin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WarTorchGoblin;
