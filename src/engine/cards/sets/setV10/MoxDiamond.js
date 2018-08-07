"use strict";
const Constants = require ("../../../Constants");
const MoxDiamondBase = require("../setTPR/MoxDiamond");

class MoxDiamond extends MoxDiamondBase {
  constructor (game) {
    super(game, "Mox Diamond", "From the Vault: Relics", "V10");
  }
}

module.exports = MoxDiamond;
