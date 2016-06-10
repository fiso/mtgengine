"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setCED/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor (game) {
    super(game, "Volcanic Island", "Masters Edition III", "ME3");
  }
}

module.exports = VolcanicIsland;
