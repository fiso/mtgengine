"use strict";
const Constants = require ("../../../Constants");
const MnemonicWallBase = require("../setC13/MnemonicWall");

class MnemonicWall extends MnemonicWallBase {
  constructor(game) {
    super(game, "Mnemonic Wall", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MnemonicWall;
