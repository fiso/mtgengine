"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdaptiveAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Adaptive Automaton", "Explorers of Ixalan", "E02");
  }
}

module.exports = AdaptiveAutomaton;
