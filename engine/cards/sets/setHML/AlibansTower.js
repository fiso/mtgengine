"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlibansTower extends UnimplementedCard {
  constructor(game) {
    super(game, "Aliban's Tower", "Homelands", "HML");
  }
}

module.exports = AlibansTower;
