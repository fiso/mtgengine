"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscapeFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = SunscapeFamiliar;
