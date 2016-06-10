"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian Automaton", "Magic Origins", "ORI");
  }
}

module.exports = GuardianAutomaton;
