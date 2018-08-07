"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarTorchGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "War-Torch Goblin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WarTorchGoblin;
