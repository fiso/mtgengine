"use strict";
const Constants = require ("../../../Constants");
const FrozenShadeBase = require("../setCED/FrozenShade");

class FrozenShade extends FrozenShadeBase {
  constructor (game) {
    super(game, "Frozen Shade", "Fifth Edition", "5ED");
  }
}

module.exports = FrozenShade;
