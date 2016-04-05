"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Radiant Kavu", "Planeshift", "PLS");
  }
}

module.exports = RadiantKavu;
