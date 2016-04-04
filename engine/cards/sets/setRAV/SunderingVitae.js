"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunderingVitaeBase = require("../setMM2/SunderingVitae.js");

class SunderingVitae extends SunderingVitaeBase {
  constructor(game) {
    super(game, "Sundering Vitae", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SunderingVitae;
