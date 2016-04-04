"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Saltblast extends Card {
  constructor(game) {
    super(game, "Saltblast", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Saltblast;
