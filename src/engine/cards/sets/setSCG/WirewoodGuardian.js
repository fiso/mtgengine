"use strict";
const Constants = require ("../../../Constants");
const WirewoodGuardianBase = require("../setTD0/WirewoodGuardian");

class WirewoodGuardian extends WirewoodGuardianBase {
  constructor (game) {
    super(game, "Wirewood Guardian", "Scourge", "SCG");
  }
}

module.exports = WirewoodGuardian;
