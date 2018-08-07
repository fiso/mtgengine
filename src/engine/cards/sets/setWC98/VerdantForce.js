"use strict";
const Constants = require ("../../../Constants");
const VerdantForceBase = require("../setDOM/VerdantForce");

class VerdantForce extends VerdantForceBase {
  constructor (game) {
    super(game, "Verdant Force", "World Championship Decks 1998", "WC98");
  }
}

module.exports = VerdantForce;
