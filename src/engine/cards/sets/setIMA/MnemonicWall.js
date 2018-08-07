"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MnemonicWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Mnemonic Wall", "Iconic Masters", "IMA");
  }
}

module.exports = MnemonicWall;
