"use strict";
const Constants = require ("../../../Constants");
const DistortingLensBase = require("../set8ED/DistortingLens");

class DistortingLens extends DistortingLensBase {
  constructor (game) {
    super(game, "Distorting Lens", "Mercadian Masques", "MMQ");
  }
}

module.exports = DistortingLens;
