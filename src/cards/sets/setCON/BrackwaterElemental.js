"use strict";
const Constants = require ("../../../Constants");
const BrackwaterElementalBase = require("../setDDH/BrackwaterElemental");

class BrackwaterElemental extends BrackwaterElementalBase {
  constructor (game) {
    super(game, "Brackwater Elemental", "Conflux", "CON");
  }
}

module.exports = BrackwaterElemental;
