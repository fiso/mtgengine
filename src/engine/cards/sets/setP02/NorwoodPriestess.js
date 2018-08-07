"use strict";
const Constants = require ("../../../Constants");
const NorwoodPriestessBase = require("../setVMA/NorwoodPriestess");

class NorwoodPriestess extends NorwoodPriestessBase {
  constructor (game) {
    super(game, "Norwood Priestess", "Portal Second Age", "P02");
  }
}

module.exports = NorwoodPriestess;
