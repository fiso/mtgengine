"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Righteousness extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteousness", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Righteousness;
