"use strict";
const Constants = require ("../../../Constants");
const KariZevsExpertiseBase = require("../setAER/KariZevsExpertise");

class KariZevsExpertise extends KariZevsExpertiseBase {
  constructor (game) {
    super(game, "Kari Zev's Expertise", "Aether Revolt Promos", "PAER");
  }
}

module.exports = KariZevsExpertise;
