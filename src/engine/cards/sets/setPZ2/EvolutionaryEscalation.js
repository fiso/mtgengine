"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvolutionaryEscalation extends UnimplementedCard {
  constructor (game) {
    super(game, "Evolutionary Escalation", "You Make the Cube", "PZ2");
  }
}

module.exports = EvolutionaryEscalation;
