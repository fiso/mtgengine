"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demonfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Demonfire", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Demonfire;
