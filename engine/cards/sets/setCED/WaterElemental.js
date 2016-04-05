"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Water Elemental", "Collector's Edition", "CED");
  }
}

module.exports = WaterElemental;
