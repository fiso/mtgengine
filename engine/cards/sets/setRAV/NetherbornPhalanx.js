"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherbornPhalanx extends UnimplementedCard {
  constructor(game) {
    super(game, "Netherborn Phalanx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NetherbornPhalanx;
