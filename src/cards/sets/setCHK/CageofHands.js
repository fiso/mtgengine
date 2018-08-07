"use strict";
const Constants = require ("../../../Constants");
const CageofHandsBase = require("../setPCA/CageofHands");

class CageofHands extends CageofHandsBase {
  constructor (game) {
    super(game, "Cage of Hands", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CageofHands;
