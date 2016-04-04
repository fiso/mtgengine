"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvolutionVat extends UnimplementedCard {
  constructor(game) {
    super(game, "Evolution Vat", "Dissension", "DIS");
  }
}

module.exports = EvolutionVat;
