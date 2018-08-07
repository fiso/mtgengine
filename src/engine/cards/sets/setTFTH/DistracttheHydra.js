"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistracttheHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Distract the Hydra", "Face the Hydra", "TFTH");
  }
}

module.exports = DistracttheHydra;
