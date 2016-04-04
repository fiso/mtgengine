"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland.js");

class TropicalIsland extends TropicalIslandBase {
  constructor(game) {
    super(game, "Tropical Island", "Masters Edition III", "ME3");
  }
}

module.exports = TropicalIsland;
