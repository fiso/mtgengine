"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setDOM/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "Commander 2015", "C15");
  }
}

module.exports = VerdantForce;
