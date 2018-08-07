"use strict";
const Constants = require ("../../../Constants");
const HoardingDragonBase = require("../setIMA/HoardingDragon");

class HoardingDragon extends HoardingDragonBase {
  constructor (game) {
    super(game, "Hoarding Dragon", "Magic 2011", "M11");
  }
}

module.exports = HoardingDragon;
