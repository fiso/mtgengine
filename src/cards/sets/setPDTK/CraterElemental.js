"use strict";
const Constants = require ("../../../Constants");
const CraterElementalBase = require("../setDTK/CraterElemental");

class CraterElemental extends CraterElementalBase {
  constructor (game) {
    super(game, "Crater Elemental", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = CraterElemental;
