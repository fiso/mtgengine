"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoppingAutomaton extends Card {
  constructor(game) {
    super(game, "Hopping Automaton", "Urza's Saga", "USG");
  }
}

module.exports = HoppingAutomaton;
