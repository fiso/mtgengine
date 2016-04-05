"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorSkyfisher extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Skyfisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KorSkyfisher;
