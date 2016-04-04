"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofSalvation extends Card {
  constructor(game) {
    super(game, "Angel of Salvation", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AngelofSalvation;
