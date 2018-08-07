"use strict";
const Constants = require ("../../../Constants");
const GlacialCrevassesBase = require("../setME2/GlacialCrevasses");

class GlacialCrevasses extends GlacialCrevassesBase {
  constructor (game) {
    super(game, "Glacial Crevasses", "Ice Age", "ICE");
  }
}

module.exports = GlacialCrevasses;
