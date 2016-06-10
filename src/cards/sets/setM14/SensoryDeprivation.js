"use strict";
const Constants = require ("../../../Constants");
const SensoryDeprivationBase = require("../setISD/SensoryDeprivation");

class SensoryDeprivation extends SensoryDeprivationBase {
  constructor (game) {
    super(game, "Sensory Deprivation", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SensoryDeprivation;
