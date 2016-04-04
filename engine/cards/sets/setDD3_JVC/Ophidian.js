"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ophidian extends Card {
  constructor(game) {
    super(game, "Ophidian", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Ophidian;
