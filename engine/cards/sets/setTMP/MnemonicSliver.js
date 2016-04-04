"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MnemonicSliver extends Card {
  constructor(game) {
    super(game, "Mnemonic Sliver", "Tempest", "TMP");
  }
}

module.exports = MnemonicSliver;
