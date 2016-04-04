"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElspethSunsChampion extends Card {
  constructor(game) {
    super(game, "Elspeth, Sun's Champion", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ElspethSunsChampion;
