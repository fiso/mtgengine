"use strict";
const Constants = require ("../../../Constants");
const GroundSealBase = require("../setC18/GroundSeal");

class GroundSeal extends GroundSealBase {
  constructor (game) {
    super(game, "Ground Seal", "Magic 2013", "M13");
  }
}

module.exports = GroundSeal;
