"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Auramancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Auramancer", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Auramancer;
