"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoryAutomaton extends UnimplementedCard {
  constructor (game) {
    super(game, "Armory Automaton", "You Make the Cube", "PZ2");
  }
}

module.exports = ArmoryAutomaton;
