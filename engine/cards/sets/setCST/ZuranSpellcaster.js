"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZuranSpellcaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Zuran Spellcaster", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = ZuranSpellcaster;
