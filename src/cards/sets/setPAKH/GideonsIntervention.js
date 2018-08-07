"use strict";
const Constants = require ("../../../Constants");
const GideonsInterventionBase = require("../setAKH/GideonsIntervention");

class GideonsIntervention extends GideonsInterventionBase {
  constructor (game) {
    super(game, "Gideon's Intervention", "Amonkhet Promos", "PAKH");
  }
}

module.exports = GideonsIntervention;
