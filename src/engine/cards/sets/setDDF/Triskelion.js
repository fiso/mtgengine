"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Triskelion extends UnimplementedCard {
  constructor (game) {
    super(game, "Triskelion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Triskelion;
