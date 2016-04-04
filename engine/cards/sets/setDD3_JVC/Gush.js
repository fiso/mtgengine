"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gush extends Card {
  constructor(game) {
    super(game, "Gush", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Gush;
