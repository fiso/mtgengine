"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastalTower extends UnimplementedCard {
  constructor(game) {
    super(game, "Coastal Tower", "Eighth Edition", "8ED");
  }
}

module.exports = CoastalTower;
