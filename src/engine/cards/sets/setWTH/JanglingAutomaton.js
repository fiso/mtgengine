"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JanglingAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Jangling Automaton", "Weatherlight", "WTH");
  }
}

module.exports = JanglingAutomaton;
