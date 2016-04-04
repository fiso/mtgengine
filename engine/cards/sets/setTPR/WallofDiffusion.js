"use strict";
const Constants = require ("../../../Constants");
const WallofDiffusionBase = require("../setTMP/WallofDiffusion");

class WallofDiffusion extends WallofDiffusionBase {
  constructor(game) {
    super(game, "Wall of Diffusion", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofDiffusion;
