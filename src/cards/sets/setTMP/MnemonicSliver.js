"use strict";
const Constants = require ("../../../Constants");
const MnemonicSliverBase = require("../setTPR/MnemonicSliver");

class MnemonicSliver extends MnemonicSliverBase {
  constructor (game) {
    super(game, "Mnemonic Sliver", "Tempest", "TMP");
  }
}

module.exports = MnemonicSliver;
