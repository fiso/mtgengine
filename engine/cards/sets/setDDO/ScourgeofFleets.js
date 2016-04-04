"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScourgeofFleets extends Card {
  constructor(game) {
    super(game, "Scourge of Fleets", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ScourgeofFleets;
