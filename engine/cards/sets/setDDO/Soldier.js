"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soldier extends Card {
  constructor(game) {
    super(game, "Soldier", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Soldier;
