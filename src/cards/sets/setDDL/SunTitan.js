"use strict";
const Constants = require ("../../../Constants");
const SunTitanBase = require("../setCM2/SunTitan");

class SunTitan extends SunTitanBase {
  constructor (game) {
    super(game, "Sun Titan", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SunTitan;
