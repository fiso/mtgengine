"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FigureofDestiny extends Card {
  constructor(game) {
    super(game, "Figure of Destiny", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = FigureofDestiny;
