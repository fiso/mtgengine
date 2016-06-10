"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastWithin extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast Within", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BeastWithin;
