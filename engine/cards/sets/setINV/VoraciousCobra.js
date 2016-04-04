"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoraciousCobra extends Card {
  constructor(game) {
    super(game, "Voracious Cobra", "Invasion", "INV");
  }
}

module.exports = VoraciousCobra;
