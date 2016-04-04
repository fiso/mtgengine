"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanarOverlay extends Card {
  constructor(game) {
    super(game, "Planar Overlay", "Planeshift", "PLS");
  }
}

module.exports = PlanarOverlay;
