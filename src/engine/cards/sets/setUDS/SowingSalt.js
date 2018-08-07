"use strict";
const Constants = require ("../../../Constants");
const SowingSaltBase = require("../setBOK/SowingSalt");

class SowingSalt extends SowingSaltBase {
  constructor (game) {
    super(game, "Sowing Salt", "Urza's Destiny", "UDS");
  }
}

module.exports = SowingSalt;
