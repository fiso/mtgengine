"use strict";
const Constants = require ("../../../Constants");
const VampiricDragonBase = require("../setTD0/VampiricDragon");

class VampiricDragon extends VampiricDragonBase {
  constructor (game) {
    super(game, "Vampiric Dragon", "Odyssey", "ODY");
  }
}

module.exports = VampiricDragon;
