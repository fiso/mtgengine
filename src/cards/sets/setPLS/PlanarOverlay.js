"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarOverlay extends UnimplementedCard {
  constructor(game) {
    super(game, "Planar Overlay", "Planeshift", "PLS");
  }
}

module.exports = PlanarOverlay;
