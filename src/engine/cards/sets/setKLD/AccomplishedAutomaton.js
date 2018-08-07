"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccomplishedAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Accomplished Automaton", "Kaladesh", "KLD");
  }
}

module.exports = AccomplishedAutomaton;
