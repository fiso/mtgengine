"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DismalBackwater extends UnimplementedCard {
  constructor(game) {
    super(game, "Dismal Backwater", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = DismalBackwater;
