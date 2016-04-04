"use strict";
const Constants = require ("../../../Constants");
const HoardingDragonBase = require("../setM11/HoardingDragon");

class HoardingDragon extends HoardingDragonBase {
  constructor(game) {
    super(game, "Hoarding Dragon", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HoardingDragon;
