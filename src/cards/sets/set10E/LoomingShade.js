"use strict";
const Constants = require ("../../../Constants");
const LoomingShadeBase = require("../setM10/LoomingShade");

class LoomingShade extends LoomingShadeBase {
  constructor (game) {
    super(game, "Looming Shade", "Tenth Edition", "10E");
  }
}

module.exports = LoomingShade;
