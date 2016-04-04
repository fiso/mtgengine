"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland.js");

class TropicalIsland extends TropicalIslandBase {
  constructor(game) {
    super(game, "Tropical Island", "International Collector's Edition", "CEI");
  }
}

module.exports = TropicalIsland;
