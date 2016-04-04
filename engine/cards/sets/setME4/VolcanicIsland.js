"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setCED/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor(game) {
    super(game, "Volcanic Island", "Masters Edition IV", "ME4");
  }
}

module.exports = VolcanicIsland;
