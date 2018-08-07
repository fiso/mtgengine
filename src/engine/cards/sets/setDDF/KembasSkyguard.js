"use strict";
const Constants = require ("../../../Constants");
const KembasSkyguardBase = require("../setSOM/KembasSkyguard");

class KembasSkyguard extends KembasSkyguardBase {
  constructor (game) {
    super(game, "Kemba's Skyguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KembasSkyguard;
