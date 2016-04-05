"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtStreetDenizen extends UnimplementedCard {
  constructor(game) {
    super(game, "Court Street Denizen", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CourtStreetDenizen;
