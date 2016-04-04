"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraFlux extends UnimplementedCard {
  constructor(game) {
    super(game, "Aura Flux", "Urza's Legacy", "ULG");
  }
}

module.exports = AuraFlux;
