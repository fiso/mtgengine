"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor(game) {
    super(game, "Looming Shade", "Magic 2010", "M10");
  }
}

module.exports = LoomingShade;
