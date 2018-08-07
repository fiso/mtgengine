"use strict";
const Constants = require ("../../../Constants");
const BaralsExpertiseBase = require("../setAER/BaralsExpertise");

class BaralsExpertise extends BaralsExpertiseBase {
  constructor (game) {
    super(game, "Baral's Expertise", "Aether Revolt Promos", "PAER");
  }
}

module.exports = BaralsExpertise;
