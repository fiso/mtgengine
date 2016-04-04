"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedPhantasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunted Phantasm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedPhantasm;
