"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../setM10/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor (game) {
    super(game, "Looming Shade", "Eighth Edition", "8ED");
  }
}

module.exports = LoomingShade;
