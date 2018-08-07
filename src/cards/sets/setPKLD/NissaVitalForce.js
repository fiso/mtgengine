"use strict";
const Constants = require ("../../../Constants");
const NissaVitalForceBase = require("../setPS18/NissaVitalForce");

class NissaVitalForce extends NissaVitalForceBase {
  constructor (game) {
    super(game, "Nissa, Vital Force", "Kaladesh Promos", "PKLD");
  }
}

module.exports = NissaVitalForce;
