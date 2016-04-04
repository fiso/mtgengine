"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor(game) {
    super(game, "Looming Shade", "Tenth Edition", "10E");
  }
}

module.exports = LoomingShade;
