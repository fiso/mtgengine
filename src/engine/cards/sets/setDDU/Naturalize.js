"use strict";
const Constants = require ("../../../Constants");
const NaturalizeBase = require("../setM19/Naturalize");

class Naturalize extends NaturalizeBase {
  constructor (game) {
    super(game, "Naturalize", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = Naturalize;
