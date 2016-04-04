"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedPhantasm extends Card {
  constructor(game) {
    super(game, "Hunted Phantasm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedPhantasm;
