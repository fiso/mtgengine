"use strict";
const Constants = require ("../../../Constants");
const DeathDeniedBase = require("../setMMA/DeathDenied");

class DeathDenied extends DeathDeniedBase {
  constructor(game) {
    super(game, "Death Denied", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DeathDenied;
