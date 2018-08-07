"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwellofCourage extends UnimplementedCard {
  constructor (game) {
    super(game, "Swell of Courage", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SwellofCourage;
