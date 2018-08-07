"use strict";
const Constants = require ("../../../Constants");
const PhyrexiasCoreBase = require("../setCM2/PhyrexiasCore");

class PhyrexiasCore extends PhyrexiasCoreBase {
  constructor (game) {
    super(game, "Phyrexia's Core", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = PhyrexiasCore;
