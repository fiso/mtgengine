"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarBridge extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Bridge", "Aether Revolt", "AER");
  }
}

module.exports = PlanarBridge;
