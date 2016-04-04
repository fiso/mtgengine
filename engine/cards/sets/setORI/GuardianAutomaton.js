"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianAutomaton extends Card {
  constructor(game) {
    super(game, "Guardian Automaton", "Magic Origins", "ORI");
  }
}

module.exports = GuardianAutomaton;
