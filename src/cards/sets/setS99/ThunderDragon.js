"use strict";
const Constants = require ("../../../Constants");
const ThunderDragonBase = require("../setDDG/ThunderDragon");

class ThunderDragon extends ThunderDragonBase {
  constructor(game) {
    super(game, "Thunder Dragon", "Starter 1999", "S99");
  }
}

module.exports = ThunderDragon;
