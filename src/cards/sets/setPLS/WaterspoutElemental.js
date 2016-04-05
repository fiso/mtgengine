"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterspoutElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Waterspout Elemental", "Planeshift", "PLS");
  }
}

module.exports = WaterspoutElemental;
