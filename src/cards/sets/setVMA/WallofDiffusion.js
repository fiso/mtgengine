"use strict";
const Constants = require ("../../../Constants");
const WallofDiffusionBase = require("../setTPR/WallofDiffusion");

class WallofDiffusion extends WallofDiffusionBase {
  constructor (game) {
    super(game, "Wall of Diffusion", "Vintage Masters", "VMA");
  }
}

module.exports = WallofDiffusion;
