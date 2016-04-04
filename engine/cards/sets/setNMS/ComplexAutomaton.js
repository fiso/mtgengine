"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ComplexAutomaton extends Card {
  constructor(game) {
    super(game, "Complex Automaton", "Nemesis", "NMS");
  }
}

module.exports = ComplexAutomaton;
