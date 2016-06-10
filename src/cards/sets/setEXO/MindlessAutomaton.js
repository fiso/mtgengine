"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindlessAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindless Automaton", "Exodus", "EXO");
  }
}

module.exports = MindlessAutomaton;
