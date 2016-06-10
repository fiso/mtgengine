"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFireFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Fire Fiend", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GoblinFireFiend;
