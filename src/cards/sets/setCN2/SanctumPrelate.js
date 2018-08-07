"use strict";
const Constants = require ("../../../Constants");
const SanctumPrelateBase = require("../setPZ2/SanctumPrelate");

class SanctumPrelate extends SanctumPrelateBase {
  constructor (game) {
    super(game, "Sanctum Prelate", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SanctumPrelate;
