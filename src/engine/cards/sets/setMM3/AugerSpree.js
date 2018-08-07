"use strict";
const Constants = require ("../../../Constants");
const AugerSpreeBase = require("../setBBD/AugerSpree");

class AugerSpree extends AugerSpreeBase {
  constructor (game) {
    super(game, "Auger Spree", "Modern Masters 2017", "MM3");
  }
}

module.exports = AugerSpree;
