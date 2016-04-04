"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlaguedRusalka extends Card {
  constructor(game) {
    super(game, "Plagued Rusalka", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PlaguedRusalka;
