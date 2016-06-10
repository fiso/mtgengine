"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaceArchitectofThought extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace, Architect of Thought", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = JaceArchitectofThought;
