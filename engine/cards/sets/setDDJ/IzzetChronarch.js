"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetChronarch extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Chronarch", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetChronarch;
