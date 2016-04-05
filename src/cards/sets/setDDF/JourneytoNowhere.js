"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JourneytoNowhere extends UnimplementedCard {
  constructor(game) {
    super(game, "Journey to Nowhere", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = JourneytoNowhere;
