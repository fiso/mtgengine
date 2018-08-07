"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WelderAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Welder Automaton", "Aether Revolt", "AER");
  }
}

module.exports = WelderAutomaton;
