"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MnemonicWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Mnemonic Wall", "Commander 2013 Edition", "C13");
  }
}

module.exports = MnemonicWall;
