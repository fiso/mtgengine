"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KabiraCrossroads extends UnimplementedCard {
  constructor(game) {
    super(game, "Kabira Crossroads", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KabiraCrossroads;
