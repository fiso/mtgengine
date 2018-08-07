"use strict";
const Constants = require ("../../../Constants");
const BaralChiefofComplianceBase = require("../setAER/BaralChiefofCompliance");

class BaralChiefofCompliance extends BaralChiefofComplianceBase {
  constructor (game) {
    super(game, "Baral, Chief of Compliance", "Aether Revolt Promos", "PAER");
  }
}

module.exports = BaralChiefofCompliance;
