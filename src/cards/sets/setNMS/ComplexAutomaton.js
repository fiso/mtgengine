"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ComplexAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Complex Automaton", "Nemesis", "NMS");
  }
}

module.exports = ComplexAutomaton;
