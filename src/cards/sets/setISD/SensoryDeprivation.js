"use strict";
const Constants = require ("../../../Constants");
const SensoryDeprivationBase = require("../setM14/SensoryDeprivation");

class SensoryDeprivation extends SensoryDeprivationBase {
  constructor (game) {
    super(game, "Sensory Deprivation", "Innistrad", "ISD");
  }
}

module.exports = SensoryDeprivation;
