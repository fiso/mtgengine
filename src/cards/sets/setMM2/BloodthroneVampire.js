"use strict";
const Constants = require ("../../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor (game) {
    super(game, "Bloodthrone Vampire", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BloodthroneVampire;
