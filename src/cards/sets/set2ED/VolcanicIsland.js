"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setCED/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor (game) {
    super(game, "Volcanic Island", "Unlimited Edition", "2ED");
  }
}

module.exports = VolcanicIsland;
