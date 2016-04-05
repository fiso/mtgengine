"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderscapeFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = ThunderscapeFamiliar;
