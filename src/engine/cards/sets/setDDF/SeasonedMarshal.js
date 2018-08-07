"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonedMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Seasoned Marshal", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SeasonedMarshal;
