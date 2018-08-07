"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Automaton", "Conspiracy", "CNS");
  }
}

module.exports = LurkingAutomaton;
