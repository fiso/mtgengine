"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofWater extends Card {
  constructor(game) {
    super(game, "Wall of Water", "Collector's Edition", "CED");
  }
}

module.exports = WallofWater;
