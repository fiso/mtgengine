"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanopySurge extends UnimplementedCard {
  constructor(game) {
    super(game, "Canopy Surge", "Invasion", "INV");
  }
}

module.exports = CanopySurge;
