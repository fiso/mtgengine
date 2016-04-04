"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Media Inserts", "pMEI");
  }
}

module.exports = BloodthroneVampire;
