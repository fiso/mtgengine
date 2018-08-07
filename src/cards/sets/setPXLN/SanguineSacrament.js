"use strict";
const Constants = require ("../../../Constants");
const SanguineSacramentBase = require("../setXLN/SanguineSacrament");

class SanguineSacrament extends SanguineSacramentBase {
  constructor (game) {
    super(game, "Sanguine Sacrament", "Ixalan Promos", "PXLN");
  }
}

module.exports = SanguineSacrament;
