"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Qumulox extends Card {
  constructor(game) {
    super(game, "Qumulox", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Qumulox;
