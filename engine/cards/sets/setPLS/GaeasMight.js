"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Might", "Planeshift", "PLS");
  }
}

module.exports = GaeasMight;
