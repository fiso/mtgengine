"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorSkyfisher extends Card {
  constructor(game) {
    super(game, "Kor Skyfisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KorSkyfisher;
