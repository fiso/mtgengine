"use strict";
const Constants = require ("../../../Constants");
const ArmoryAutomatonBase = require("../setPZ2/ArmoryAutomaton");

class ArmoryAutomaton extends ArmoryAutomatonBase {
  constructor (game) {
    super(game, "Armory Automaton", "Commander 2016", "C16");
  }
}

module.exports = ArmoryAutomaton;
