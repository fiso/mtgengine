"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ophidian extends UnimplementedCard {
  constructor (game) {
    super(game, "Ophidian", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Ophidian;
