"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mistfolk extends Card {
  constructor(game) {
    super(game, "Mistfolk", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Mistfolk;
