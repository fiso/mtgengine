"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor (game) {
    super(game, "Bloodthrone Vampire", "Magic 2013", "M13");
  }
}

module.exports = BloodthroneVampire;
