"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SensoryDeprivationBase = require("../setISD/SensoryDeprivation.js");

class SensoryDeprivation extends SensoryDeprivationBase {
  constructor(game) {
    super(game, "Sensory Deprivation", "Magic 2014 Core Set", "M14");
  }
}

module.exports = SensoryDeprivation;
