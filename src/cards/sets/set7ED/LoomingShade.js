"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../setM10/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor (game) {
    super(game, "Looming Shade", "Seventh Edition", "7ED");
  }
}

module.exports = LoomingShade;
