"use strict";
const Constants = require ("../../../Constants");
const NorwoodPriestessBase = require("../setPO2/NorwoodPriestess");

class NorwoodPriestess extends NorwoodPriestessBase {
  constructor(game) {
    super(game, "Norwood Priestess", "Vintage Masters", "VMA");
  }
}

module.exports = NorwoodPriestess;
