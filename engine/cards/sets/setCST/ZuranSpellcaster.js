"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZuranSpellcaster extends Card {
  constructor(game) {
    super(game, "Zuran Spellcaster", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = ZuranSpellcaster;
