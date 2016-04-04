"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sunlance extends Card {
  constructor(game) {
    super(game, "Sunlance", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Sunlance;
