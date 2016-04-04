"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../set8ED/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor(game) {
    super(game, "Looming Shade", "Ninth Edition", "9ED");
  }
}

module.exports = LoomingShade;
