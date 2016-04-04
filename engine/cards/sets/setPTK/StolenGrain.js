"use strict";
const Constants = require ("../../../Constants");
const StolenGrainBase = require("../setME3/StolenGrain");

class StolenGrain extends StolenGrainBase {
  constructor(game) {
    super(game, "Stolen Grain", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StolenGrain;
