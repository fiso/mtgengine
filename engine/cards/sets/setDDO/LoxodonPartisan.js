"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonPartisan extends Card {
  constructor(game) {
    super(game, "Loxodon Partisan", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = LoxodonPartisan;
