"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MnemonicNexus extends UnimplementedCard {
  constructor (game) {
    super(game, "Mnemonic Nexus", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MnemonicNexus;
