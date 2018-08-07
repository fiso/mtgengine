"use strict";
const Constants = require ("../../../Constants");
const FarrelsMantleBase = require("../setME2/FarrelsMantle");

class FarrelsMantle extends FarrelsMantleBase {
  constructor (game) {
    super(game, "Farrel's Mantle", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelsMantle;
