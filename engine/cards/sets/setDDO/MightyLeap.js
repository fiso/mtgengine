"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MightyLeap extends Card {
  constructor(game) {
    super(game, "Mighty Leap", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = MightyLeap;
