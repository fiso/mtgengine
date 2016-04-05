"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RollingSpoil extends UnimplementedCard {
  constructor(game) {
    super(game, "Rolling Spoil", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RollingSpoil;
