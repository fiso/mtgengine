"use strict";
const Constants = require ("../../../Constants");
const VampiricDragonBase = require("../setTD0/VampiricDragon");

class VampiricDragon extends VampiricDragonBase {
  constructor (game) {
    super(game, "Vampiric Dragon", "Archenemy", "ARC");
  }
}

module.exports = VampiricDragon;
