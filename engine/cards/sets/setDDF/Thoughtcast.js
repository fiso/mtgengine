"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thoughtcast extends Card {
  constructor(game) {
    super(game, "Thoughtcast", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Thoughtcast;
