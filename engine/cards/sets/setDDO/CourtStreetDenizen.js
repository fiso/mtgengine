"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CourtStreetDenizen extends Card {
  constructor(game) {
    super(game, "Court Street Denizen", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CourtStreetDenizen;
