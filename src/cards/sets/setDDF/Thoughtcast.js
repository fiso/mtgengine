"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtcast extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtcast", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Thoughtcast;
