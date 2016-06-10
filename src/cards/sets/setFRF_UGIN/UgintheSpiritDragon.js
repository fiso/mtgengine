"use strict";
const Constants = require ("../../../Constants");
const UgintheSpiritDragonBase = require("../setFRF/UgintheSpiritDragon");

class UgintheSpiritDragon extends UgintheSpiritDragonBase {
  constructor (game) {
    super(game, "Ugin, the Spirit Dragon", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = UgintheSpiritDragon;
