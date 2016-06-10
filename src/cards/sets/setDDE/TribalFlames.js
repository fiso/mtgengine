"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TribalFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Tribal Flames", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TribalFlames;
