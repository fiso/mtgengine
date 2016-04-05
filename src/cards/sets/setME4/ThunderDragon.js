"use strict";
const Constants = require ("../../../Constants");
const ThunderDragonBase = require("../setDDG/ThunderDragon");

class ThunderDragon extends ThunderDragonBase {
  constructor(game) {
    super(game, "Thunder Dragon", "Masters Edition IV", "ME4");
  }
}

module.exports = ThunderDragon;
