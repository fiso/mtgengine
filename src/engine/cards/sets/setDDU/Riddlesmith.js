"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riddlesmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Riddlesmith", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = Riddlesmith;
