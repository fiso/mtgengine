"use strict";
const Constants = require ("../../../Constants");
const GreatOakGuardianBase = require("../setCMA/GreatOakGuardian");

class GreatOakGuardian extends GreatOakGuardianBase {
  constructor (game) {
    super(game, "Great Oak Guardian", "Legendary Cube", "PZ1");
  }
}

module.exports = GreatOakGuardian;
