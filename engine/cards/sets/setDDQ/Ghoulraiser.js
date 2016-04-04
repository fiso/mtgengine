"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghoulraiser extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghoulraiser", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Ghoulraiser;
