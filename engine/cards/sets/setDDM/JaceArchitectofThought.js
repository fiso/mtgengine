"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JaceArchitectofThought extends Card {
  constructor(game) {
    super(game, "Jace, Architect of Thought", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JaceArchitectofThought;
