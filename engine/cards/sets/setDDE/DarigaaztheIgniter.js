"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarigaaztheIgniter extends UnimplementedCard {
  constructor(game) {
    super(game, "Darigaaz, the Igniter", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = DarigaaztheIgniter;
