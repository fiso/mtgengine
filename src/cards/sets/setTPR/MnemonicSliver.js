"use strict";
const Constants = require ("../../../Constants");
const MnemonicSliverBase = require("../setTMP/MnemonicSliver");

class MnemonicSliver extends MnemonicSliverBase {
  constructor(game) {
    super(game, "Mnemonic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MnemonicSliver;
