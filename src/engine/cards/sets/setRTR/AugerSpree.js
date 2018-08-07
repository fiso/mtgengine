"use strict";
const Constants = require ("../../../Constants");
const AugerSpreeBase = require("../setBBD/AugerSpree");

class AugerSpree extends AugerSpreeBase {
  constructor (game) {
    super(game, "Auger Spree", "Return to Ravnica", "RTR");
  }
}

module.exports = AugerSpree;
