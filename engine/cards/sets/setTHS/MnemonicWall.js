"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MnemonicWallBase = require("../setC13/MnemonicWall.js");

class MnemonicWall extends MnemonicWallBase {
  constructor(game) {
    super(game, "Mnemonic Wall", "Theros", "THS");
  }
}

module.exports = MnemonicWall;
