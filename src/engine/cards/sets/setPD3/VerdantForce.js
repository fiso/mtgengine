"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setDOM/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = VerdantForce;
