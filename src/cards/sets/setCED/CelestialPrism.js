"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CelestialPrism extends UnimplementedCard {
  constructor(game) {
    super(game, "Celestial Prism", "Collector's Edition", "CED");
  }
}

module.exports = CelestialPrism;
