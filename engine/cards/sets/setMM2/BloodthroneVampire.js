"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodthroneVampireBase = require("../setDDP/BloodthroneVampire.js");

class BloodthroneVampire extends BloodthroneVampireBase {
  constructor(game) {
    super(game, "Bloodthrone Vampire", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BloodthroneVampire;
