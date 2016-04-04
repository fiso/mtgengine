"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire.js");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BloodthroneVampire;
