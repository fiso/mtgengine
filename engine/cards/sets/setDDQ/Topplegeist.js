"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Topplegeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Topplegeist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Topplegeist;
