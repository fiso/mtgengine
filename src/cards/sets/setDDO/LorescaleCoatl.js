"use strict";
const Constants = require ("../../../Constants");
const LorescaleCoatlBase = require("../setA25/LorescaleCoatl");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor (game) {
    super(game, "Lorescale Coatl", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = LorescaleCoatl;
