"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoraciousDragon extends Card {
  constructor(game) {
    super(game, "Voracious Dragon", "Conflux", "CON");
  }
}

module.exports = VoraciousDragon;
