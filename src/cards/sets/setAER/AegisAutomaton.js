"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AegisAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Aegis Automaton", "Aether Revolt", "AER");
  }
}

module.exports = AegisAutomaton;
