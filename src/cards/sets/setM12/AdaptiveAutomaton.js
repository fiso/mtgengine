"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdaptiveAutomaton extends UnimplementedCard {
  constructor(game) {
    super(game, "Adaptive Automaton", "Magic 2012", "M12");
  }
}

module.exports = AdaptiveAutomaton;
