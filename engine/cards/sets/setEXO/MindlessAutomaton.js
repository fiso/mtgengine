"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindlessAutomaton extends Card {
  constructor(game) {
    super(game, "Mindless Automaton", "Exodus", "EXO");
  }
}

module.exports = MindlessAutomaton;
