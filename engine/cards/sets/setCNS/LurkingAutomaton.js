"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LurkingAutomaton extends Card {
  constructor(game) {
    super(game, "Lurking Automaton", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LurkingAutomaton;
