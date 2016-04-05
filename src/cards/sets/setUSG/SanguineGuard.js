"use strict";
const Constants = require ("../../../Constants");
const SanguineGuardBase = require("../setDDE/SanguineGuard");

class SanguineGuard extends SanguineGuardBase {
  constructor(game) {
    super(game, "Sanguine Guard", "Urza's Saga", "USG");
  }
}

module.exports = SanguineGuard;
