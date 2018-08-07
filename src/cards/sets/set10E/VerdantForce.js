"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setDOM/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "Tenth Edition", "10E");
  }
}

module.exports = VerdantForce;
