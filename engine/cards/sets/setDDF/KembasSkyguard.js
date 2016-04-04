"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KembasSkyguard extends Card {
  constructor(game) {
    super(game, "Kemba's Skyguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KembasSkyguard;
