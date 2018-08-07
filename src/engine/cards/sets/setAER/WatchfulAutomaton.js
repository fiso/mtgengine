"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatchfulAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Watchful Automaton", "Aether Revolt", "AER");
  }
}

module.exports = WatchfulAutomaton;
