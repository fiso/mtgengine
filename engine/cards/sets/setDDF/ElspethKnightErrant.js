"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElspethKnightErrant extends Card {
  constructor(game) {
    super(game, "Elspeth, Knight-Errant", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ElspethKnightErrant;
