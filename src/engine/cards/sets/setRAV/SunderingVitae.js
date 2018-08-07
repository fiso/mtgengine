"use strict";
const Constants = require ("../../../Constants");
const SunderingVitaeBase = require("../setMM2/SunderingVitae");

class SunderingVitae extends SunderingVitaeBase {
  constructor (game) {
    super(game, "Sundering Vitae", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SunderingVitae;
