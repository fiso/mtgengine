"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterElemental extends Card {
  constructor(game) {
    super(game, "Water Elemental", "Collector's Edition", "CED");
  }
}

module.exports = WaterElemental;
