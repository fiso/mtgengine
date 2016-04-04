"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PygmyPyrosaur extends Card {
  constructor(game) {
    super(game, "Pygmy Pyrosaur", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PygmyPyrosaur;
