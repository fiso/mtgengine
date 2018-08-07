"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalarasBattalion extends UnimplementedCard {
  constructor (game) {
    super(game, "Talara's Battalion", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = TalarasBattalion;
