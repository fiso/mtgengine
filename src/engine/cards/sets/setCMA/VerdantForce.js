"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setDOM/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "Commander Anthology", "CMA");
  }
}

module.exports = VerdantForce;
