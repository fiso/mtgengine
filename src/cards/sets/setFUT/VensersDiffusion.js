"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensersDiffusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser's Diffusion", "Future Sight", "FUT");
  }
}

module.exports = VensersDiffusion;
