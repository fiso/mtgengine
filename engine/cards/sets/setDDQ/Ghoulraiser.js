"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ghoulraiser extends Card {
  constructor(game) {
    super(game, "Ghoulraiser", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Ghoulraiser;
