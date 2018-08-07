"use strict";
const Constants = require ("../../../Constants");
const EssenceScatterBase = require("../setM19/EssenceScatter");

class EssenceScatter extends EssenceScatterBase {
  constructor (game) {
    super(game, "Essence Scatter", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = EssenceScatter;
