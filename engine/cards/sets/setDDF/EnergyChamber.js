"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnergyChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Energy Chamber", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EnergyChamber;
