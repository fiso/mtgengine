"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PreyUpon extends UnimplementedCard {
  constructor (game) {
    super(game, "Prey Upon", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = PreyUpon;
