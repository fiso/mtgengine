"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SanguineGuardBase = require("../setDDE/SanguineGuard.js");

class SanguineGuard extends SanguineGuardBase {
  constructor(game) {
    super(game, "Sanguine Guard", "Urza's Saga", "USG");
  }
}

module.exports = SanguineGuard;
