"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanTusker extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Tusker", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = KrosanTusker;
