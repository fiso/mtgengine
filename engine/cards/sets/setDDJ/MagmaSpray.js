"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaSpray extends UnimplementedCard {
  constructor(game) {
    super(game, "Magma Spray", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = MagmaSpray;
