"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor (game) {
    super(game, "Bloodthrone Vampire", "URL/Convention Promos", "PURL");
  }
}

module.exports = BloodthroneVampire;
