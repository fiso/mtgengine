"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvolutionVat extends Card {
  constructor(game) {
    super(game, "Evolution Vat", "Dissension", "DIS");
  }
}

module.exports = EvolutionVat;
