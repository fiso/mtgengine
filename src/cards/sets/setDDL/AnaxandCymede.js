"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnaxandCymede extends UnimplementedCard {
  constructor (game) {
    super(game, "Anax and Cymede", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = AnaxandCymede;
