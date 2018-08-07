"use strict";
const Constants = require ("../../../Constants");
const MindlessAutomatonBase = require("../setEMA/MindlessAutomaton");

class MindlessAutomaton extends MindlessAutomatonBase {
  constructor (game) {
    super(game, "Mindless Automaton", "Tempest Remastered", "TPR");
  }
}

module.exports = MindlessAutomaton;
