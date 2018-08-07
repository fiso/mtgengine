"use strict";
const Constants = require ("../../../Constants");
const ConcentrateBase = require("../setE02/Concentrate");

class Concentrate extends ConcentrateBase {
  constructor (game) {
    super(game, "Concentrate", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = Concentrate;
