"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MnemonicSliverBase = require("../setTMP/MnemonicSliver.js");

class MnemonicSliver extends MnemonicSliverBase {
  constructor(game) {
    super(game, "Mnemonic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MnemonicSliver;
