"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeelfromReality extends UnimplementedCard {
  constructor (game) {
    super(game, "Peel from Reality", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = PeelfromReality;
