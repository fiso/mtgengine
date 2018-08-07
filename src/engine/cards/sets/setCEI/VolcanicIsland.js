"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setVMA/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor (game) {
    super(game, "Volcanic Island", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = VolcanicIsland;
