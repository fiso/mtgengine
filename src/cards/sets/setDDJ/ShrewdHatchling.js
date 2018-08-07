"use strict";
const Constants = require ("../../../Constants");
const ShrewdHatchlingBase = require("../setMM2/ShrewdHatchling");

class ShrewdHatchling extends ShrewdHatchlingBase {
  constructor (game) {
    super(game, "Shrewd Hatchling", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = ShrewdHatchling;
