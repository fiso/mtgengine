"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NetherbornPhalanx extends Card {
  constructor(game) {
    super(game, "Netherborn Phalanx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NetherbornPhalanx;
