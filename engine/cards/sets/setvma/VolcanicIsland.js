"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolcanicIslandBase = require("../setCED/VolcanicIsland.js");

class VolcanicIsland extends VolcanicIslandBase {
  constructor(game) {
    super(game, "Volcanic Island", "Vintage Masters", "VMA");
  }
}

module.exports = VolcanicIsland;
