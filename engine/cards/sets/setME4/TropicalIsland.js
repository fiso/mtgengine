"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TropicalIslandBase = require("../setCED/TropicalIsland.js");

class TropicalIsland extends TropicalIslandBase {
  constructor(game) {
    super(game, "Tropical Island", "Masters Edition IV", "ME4");
  }
}

module.exports = TropicalIsland;
