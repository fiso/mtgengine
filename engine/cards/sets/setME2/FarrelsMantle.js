"use strict";
const Constants = require ("../../../Constants");
const FarrelsMantleBase = require("../setFEM/FarrelsMantle");

class FarrelsMantle extends FarrelsMantleBase {
  constructor(game) {
    super(game, "Farrel's Mantle", "Masters Edition II", "ME2");
  }
}

module.exports = FarrelsMantle;
