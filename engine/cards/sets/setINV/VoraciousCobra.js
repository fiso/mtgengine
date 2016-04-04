"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoraciousCobra extends UnimplementedCard {
  constructor(game) {
    super(game, "Voracious Cobra", "Invasion", "INV");
  }
}

module.exports = VoraciousCobra;
