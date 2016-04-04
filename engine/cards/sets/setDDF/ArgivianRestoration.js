"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgivianRestoration extends Card {
  constructor(game) {
    super(game, "Argivian Restoration", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ArgivianRestoration;
