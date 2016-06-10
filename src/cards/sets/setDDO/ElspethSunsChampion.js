"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElspethSunsChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Elspeth, Sun's Champion", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ElspethSunsChampion;
