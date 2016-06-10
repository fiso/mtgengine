"use strict";
const Constants = require ("../../../Constants");
const SanctumCustodianBase = require("../setBRB/SanctumCustodian");

class SanctumCustodian extends SanctumCustodianBase {
  constructor (game) {
    super(game, "Sanctum Custodian", "Urza's Saga", "USG");
  }
}

module.exports = SanctumCustodian;
