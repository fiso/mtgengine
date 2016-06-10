"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor (game) {
    super(game, "Looming Shade", "Seventh Edition", "7ED");
  }
}

module.exports = LoomingShade;
