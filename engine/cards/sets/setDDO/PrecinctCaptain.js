"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrecinctCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Precinct Captain", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PrecinctCaptain;
