"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofDiffusionBase = require("../setTMP/WallofDiffusion.js");

class WallofDiffusion extends WallofDiffusionBase {
  constructor(game) {
    super(game, "Wall of Diffusion", "Vintage Masters", "VMA");
  }
}

module.exports = WallofDiffusion;
