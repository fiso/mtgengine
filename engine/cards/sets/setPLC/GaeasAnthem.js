"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasAnthem extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Anthem", "Planar Chaos", "PLC");
  }
}

module.exports = GaeasAnthem;
