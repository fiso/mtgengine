"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TezzeretsSimulacrum extends UnimplementedCard {
  constructor (game) {
    super(game, "Tezzeret's Simulacrum", "Aether Revolt", "AER");
  }
}

module.exports = TezzeretsSimulacrum;
