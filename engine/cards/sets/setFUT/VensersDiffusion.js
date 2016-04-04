"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VensersDiffusion extends Card {
  constructor(game) {
    super(game, "Venser's Diffusion", "Future Sight", "FUT");
  }
}

module.exports = VensersDiffusion;
