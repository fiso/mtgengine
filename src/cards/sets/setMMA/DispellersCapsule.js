"use strict";
const Constants = require ("../../../Constants");
const DispellersCapsuleBase = require("../setC16/DispellersCapsule");

class DispellersCapsule extends DispellersCapsuleBase {
  constructor (game) {
    super(game, "Dispeller's Capsule", "Modern Masters", "MMA");
  }
}

module.exports = DispellersCapsule;
