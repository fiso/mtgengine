"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaguedRusalka extends UnimplementedCard {
  constructor (game) {
    super(game, "Plagued Rusalka", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = PlaguedRusalka;
