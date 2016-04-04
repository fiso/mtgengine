"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruEncampment extends Card {
  constructor(game) {
    super(game, "Daru Encampment", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = DaruEncampment;
