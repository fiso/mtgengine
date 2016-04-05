"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thunderheads extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderheads", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Thunderheads;
