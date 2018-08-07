"use strict";
const Constants = require ("../../../Constants");
const AdaptiveAutomatonBase = require("../setE02/AdaptiveAutomaton");

class AdaptiveAutomaton extends AdaptiveAutomatonBase {
  constructor (game) {
    super(game, "Adaptive Automaton", "Magic 2012", "M12");
  }
}

module.exports = AdaptiveAutomaton;
