"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofDiffusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Diffusion", "Tempest", "TMP");
  }
}

module.exports = WallofDiffusion;
