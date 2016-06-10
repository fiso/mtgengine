"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealockMonster extends UnimplementedCard {
  constructor (game) {
    super(game, "Sealock Monster", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SealockMonster;
