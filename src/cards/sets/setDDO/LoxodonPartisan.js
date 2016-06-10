"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonPartisan extends UnimplementedCard {
  constructor (game) {
    super(game, "Loxodon Partisan", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = LoxodonPartisan;
