"use strict";
const Constants = require ("../../../Constants");
const DeathDeniedBase = require("../setMM2/DeathDenied");

class DeathDenied extends DeathDeniedBase {
  constructor (game) {
    super(game, "Death Denied", "Modern Masters", "MMA");
  }
}

module.exports = DeathDenied;
