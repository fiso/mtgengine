"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DistortingLensBase = require("../set8ED/DistortingLens.js");

class DistortingLens extends DistortingLensBase {
  constructor(game) {
    super(game, "Distorting Lens", "Mercadian Masques", "MMQ");
  }
}

module.exports = DistortingLens;
