"use strict";
const Constants = require ("../../../Constants");
const ThunderDragonBase = require("../setDDG/ThunderDragon");

class ThunderDragon extends ThunderDragonBase {
  constructor (game) {
    super(game, "Thunder Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = ThunderDragon;
