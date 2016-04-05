"use strict";
const Constants = require ("../../../Constants");
const CageofHandsBase = require("../setCHK/CageofHands");

class CageofHands extends CageofHandsBase {
  constructor(game) {
    super(game, "Cage of Hands", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = CageofHands;
