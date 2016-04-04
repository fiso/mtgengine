"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CullingScales extends Card {
  constructor(game) {
    super(game, "Culling Scales", "Mirrodin", "MRD");
  }
}

module.exports = CullingScales;
