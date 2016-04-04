"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialPrism extends Card {
  constructor(game) {
    super(game, "Celestial Prism", "Collector's Edition", "CED");
  }
}

module.exports = CelestialPrism;
