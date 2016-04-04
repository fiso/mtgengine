"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofEtherium extends Card {
  constructor(game) {
    super(game, "Master of Etherium", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MasterofEtherium;
