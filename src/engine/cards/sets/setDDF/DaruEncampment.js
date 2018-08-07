"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruEncampment extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Encampment", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = DaruEncampment;
