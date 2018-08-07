"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofEpiphany extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple of Epiphany", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = TempleofEpiphany;
