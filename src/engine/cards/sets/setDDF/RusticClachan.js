"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RusticClachan extends UnimplementedCard {
  constructor (game) {
    super(game, "Rustic Clachan", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RusticClachan;
