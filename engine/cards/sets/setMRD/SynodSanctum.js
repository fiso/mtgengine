"use strict";
const Constants = require ("../../../Constants");
const SynodSanctumBase = require("../setARC/SynodSanctum");

class SynodSanctum extends SynodSanctumBase {
  constructor(game) {
    super(game, "Synod Sanctum", "Mirrodin", "MRD");
  }
}

module.exports = SynodSanctum;
