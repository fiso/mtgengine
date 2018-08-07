"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhelmingWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Whelming Wave", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = WhelmingWave;
