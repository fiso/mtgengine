"use strict";
const Constants = require ("../../../Constants");
const DeathHoodCobraBase = require("../setMM3/DeathHoodCobra");

class DeathHoodCobra extends DeathHoodCobraBase {
  constructor (game) {
    super(game, "Death-Hood Cobra", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DeathHoodCobra;
