"use strict";
const Constants = require ("../../../Constants");
const ThoughtScourBase = require("../setDKA/ThoughtScour");

class ThoughtScour extends ThoughtScourBase {
  constructor(game) {
    super(game, "Thought Scour", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ThoughtScour;
