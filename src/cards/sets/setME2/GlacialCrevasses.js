"use strict";
const Constants = require ("../../../Constants");
const GlacialCrevassesBase = require("../setICE/GlacialCrevasses");

class GlacialCrevasses extends GlacialCrevassesBase {
  constructor (game) {
    super(game, "Glacial Crevasses", "Masters Edition II", "ME2");
  }
}

module.exports = GlacialCrevasses;
