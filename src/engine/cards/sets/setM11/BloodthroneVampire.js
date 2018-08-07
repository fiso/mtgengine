"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor (game) {
    super(game, "Bloodthrone Vampire", "Magic 2011", "M11");
  }
}

module.exports = BloodthroneVampire;
