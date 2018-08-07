"use strict";
const Constants = require ("../../../Constants");
const RishkarsExpertiseBase = require("../setAER/RishkarsExpertise");

class RishkarsExpertise extends RishkarsExpertiseBase {
  constructor (game) {
    super(game, "Rishkar's Expertise", "Aether Revolt Promos", "PAER");
  }
}

module.exports = RishkarsExpertise;
