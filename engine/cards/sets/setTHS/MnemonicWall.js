"use strict";
const Constants = require ("../../../Constants");
const MnemonicWallBase = require("../setC13/MnemonicWall");

class MnemonicWall extends MnemonicWallBase {
  constructor(game) {
    super(game, "Mnemonic Wall", "Theros", "THS");
  }
}

module.exports = MnemonicWall;
