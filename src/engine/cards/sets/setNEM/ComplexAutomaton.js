"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ComplexAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Complex Automaton", "Nemesis", "NEM");
  }
}

module.exports = ComplexAutomaton;
