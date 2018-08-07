"use strict";
const Constants = require ("../../../Constants");
const HeroicInterventionBase = require("../setAER/HeroicIntervention");

class HeroicIntervention extends HeroicInterventionBase {
  constructor (game) {
    super(game, "Heroic Intervention", "Aether Revolt Promos", "PAER");
  }
}

module.exports = HeroicIntervention;
