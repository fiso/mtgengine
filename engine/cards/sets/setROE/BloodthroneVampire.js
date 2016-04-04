"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BloodthroneVampire;
