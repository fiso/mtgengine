"use strict";
const Constants = require ("../../../Constants");
const GroundSealBase = require("../setM13/GroundSeal");

class GroundSeal extends GroundSealBase {
  constructor (game) {
    super(game, "Ground Seal", "Odyssey", "ODY");
  }
}

module.exports = GroundSeal;
