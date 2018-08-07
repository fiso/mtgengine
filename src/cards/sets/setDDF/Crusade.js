"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crusade extends UnimplementedCard {
  constructor (game) {
    super(game, "Crusade", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Crusade;
