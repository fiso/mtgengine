"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindlessAutomatonBase = require("../setEXO/MindlessAutomaton.js");

class MindlessAutomaton extends MindlessAutomatonBase {
  constructor(game) {
    super(game, "Mindless Automaton", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MindlessAutomaton;
