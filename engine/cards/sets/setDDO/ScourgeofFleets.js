"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourgeofFleets extends UnimplementedCard {
  constructor(game) {
    super(game, "Scourge of Fleets", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ScourgeofFleets;
