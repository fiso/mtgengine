"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofDiffusion extends Card {
  constructor(game) {
    super(game, "Wall of Diffusion", "Tempest", "TMP");
  }
}

module.exports = WallofDiffusion;
