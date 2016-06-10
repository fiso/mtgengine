"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FigureofDestiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Figure of Destiny", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FigureofDestiny;
