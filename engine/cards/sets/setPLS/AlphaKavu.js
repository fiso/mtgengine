"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Alpha Kavu", "Planeshift", "PLS");
  }
}

module.exports = AlphaKavu;
