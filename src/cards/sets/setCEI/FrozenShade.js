"use strict";
const Constants = require ("../../../Constants");
const FrozenShadeBase = require("../setCED/FrozenShade");

class FrozenShade extends FrozenShadeBase {
  constructor(game) {
    super(game, "Frozen Shade", "International Collector's Edition", "CEI");
  }
}

module.exports = FrozenShade;
