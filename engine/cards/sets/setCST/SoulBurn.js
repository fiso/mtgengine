"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulBurn extends Card {
  constructor(game) {
    super(game, "Soul Burn", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = SoulBurn;
