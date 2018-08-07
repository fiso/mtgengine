"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setVMA/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor (game) {
    super(game, "Volcanic Island", "Limited Edition Beta", "LEB");
  }
}

module.exports = VolcanicIsland;
