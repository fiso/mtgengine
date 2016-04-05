"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setCED/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor(game) {
    super(game, "Volcanic Island", "Vintage Masters", "VMA");
  }
}

module.exports = VolcanicIsland;
