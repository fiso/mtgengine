"use strict";
const Constants = require ("../../../Constants");
const MindlessAutomatonBase = require("../setEXO/MindlessAutomaton");

class MindlessAutomaton extends MindlessAutomatonBase {
  constructor (game) {
    super(game, "Mindless Automaton", "Tempest Remastered", "TPR");
  }
}

module.exports = MindlessAutomaton;
