"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofSalvation extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel of Salvation", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AngelofSalvation;
