"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtScourBase = require("../setDKA/ThoughtScour.js");

class ThoughtScour extends ThoughtScourBase {
  constructor(game) {
    super(game, "Thought Scour", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ThoughtScour;
