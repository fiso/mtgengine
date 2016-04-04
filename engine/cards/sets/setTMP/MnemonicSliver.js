"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MnemonicSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Mnemonic Sliver", "Tempest", "TMP");
  }
}

module.exports = MnemonicSliver;
