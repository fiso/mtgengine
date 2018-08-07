"use strict";
const Constants = require ("../../../Constants");
const UgintheSpiritDragonBase = require("../setFRF/UgintheSpiritDragon");

class UgintheSpiritDragon extends UgintheSpiritDragonBase {
  constructor (game) {
    super(game, "Ugin, the Spirit Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = UgintheSpiritDragon;
