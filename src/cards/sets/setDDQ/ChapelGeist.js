"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChapelGeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Chapel Geist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ChapelGeist;
