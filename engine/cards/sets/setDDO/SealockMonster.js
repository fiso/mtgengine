"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealockMonster extends Card {
  constructor(game) {
    super(game, "Sealock Monster", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SealockMonster;
