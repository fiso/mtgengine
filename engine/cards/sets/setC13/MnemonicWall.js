"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MnemonicWall extends Card {
  constructor(game) {
    super(game, "Mnemonic Wall", "Commander 2013 Edition", "C13");
  }
}

module.exports = MnemonicWall;
