"use strict";
const Constants = require ("../../../Constants");
const EvolutionaryEscalationBase = require("../setPZ2/EvolutionaryEscalation");

class EvolutionaryEscalation extends EvolutionaryEscalationBase {
  constructor (game) {
    super(game, "Evolutionary Escalation", "Commander 2016", "C16");
  }
}

module.exports = EvolutionaryEscalation;
