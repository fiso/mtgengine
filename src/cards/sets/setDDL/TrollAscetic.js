"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrollAscetic extends UnimplementedCard {
  constructor (game) {
    super(game, "Troll Ascetic", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TrollAscetic;
