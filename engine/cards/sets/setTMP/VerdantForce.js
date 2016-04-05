"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setC15/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor(game) {
    super(game, "Verdant Force", "Tempest", "TMP");
  }
}

module.exports = VerdantForce;
