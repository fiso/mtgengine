"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoppingAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Hopping Automaton", "Urza's Saga", "USG");
  }
}

module.exports = HoppingAutomaton;
