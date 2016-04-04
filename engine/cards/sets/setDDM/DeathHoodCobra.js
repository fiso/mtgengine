"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathHoodCobra extends Card {
  constructor(game) {
    super(game, "Death-Hood Cobra", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DeathHoodCobra;
