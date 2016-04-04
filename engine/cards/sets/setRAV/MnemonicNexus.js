"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MnemonicNexus extends Card {
  constructor(game) {
    super(game, "Mnemonic Nexus", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MnemonicNexus;
