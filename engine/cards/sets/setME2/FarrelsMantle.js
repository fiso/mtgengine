"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarrelsMantleBase = require("../setFEM/FarrelsMantle.js");

class FarrelsMantle extends FarrelsMantleBase {
  constructor(game) {
    super(game, "Farrel's Mantle", "Masters Edition II", "ME2");
  }
}

module.exports = FarrelsMantle;
