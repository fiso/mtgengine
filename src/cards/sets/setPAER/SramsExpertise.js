"use strict";
const Constants = require ("../../../Constants");
const SramsExpertiseBase = require("../setAER/SramsExpertise");

class SramsExpertise extends SramsExpertiseBase {
  constructor (game) {
    super(game, "Sram's Expertise", "Aether Revolt Promos", "PAER");
  }
}

module.exports = SramsExpertise;
