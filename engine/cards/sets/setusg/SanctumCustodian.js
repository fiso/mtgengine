"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SanctumCustodianBase = require("../setBRB/SanctumCustodian.js");

class SanctumCustodian extends SanctumCustodianBase {
  constructor(game) {
    super(game, "Sanctum Custodian", "Urza's Saga", "USG");
  }
}

module.exports = SanctumCustodian;
