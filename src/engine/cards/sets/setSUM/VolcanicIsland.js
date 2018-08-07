"use strict";
const Constants = require ("../../../Constants");
const VolcanicIslandBase = require("../setVMA/VolcanicIsland");

class VolcanicIsland extends VolcanicIslandBase {
  constructor (game) {
    super(game, "Volcanic Island", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = VolcanicIsland;
