"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrecinctCaptain extends Card {
  constructor(game) {
    super(game, "Precinct Captain", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PrecinctCaptain;
